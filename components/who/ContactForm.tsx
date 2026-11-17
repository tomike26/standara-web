"use client";

import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerInterest } from "@/app/actions/register-interest";
import {
  leadSchema,
  type LeadField,
  type LeadFormValues,
  type LeadOutput,
} from "@/lib/lead-schema";
import { TickIcon } from "@/components/ui/icons";
import { buttonClass } from "@/components/ui/Button";
import { who } from "@/content/who";

const copy = who.contact.form;
const thanks = who.contact.thanks;

const EMPTY: LeadFormValues = {
  name: "",
  organisation: "",
  email: "",
  role: undefined as unknown as LeadFormValues["role"],
  message: "",
  website: "",
};

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [status, setStatus] = useState("");
  const [formError, setFormError] = useState("");
  const thanksRef = useRef<HTMLDivElement>(null);
  const firstFieldRef = useRef<HTMLInputElement | null>(null);
  const refocusAfterReset = useRef(false);

  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(leadSchema),
    defaultValues: EMPTY,
    mode: "onSubmit",
    reValidateMode: "onChange",
  });

  useEffect(() => {
    if (sent) thanksRef.current?.focus();
    else if (refocusAfterReset.current) {
      refocusAfterReset.current = false;
      firstFieldRef.current?.focus();
    }
  }, [sent]);

  const onValid = async (values: LeadOutput) => {
    setFormError("");
    setStatus("");
    let result;
    try {
      result = await registerInterest(values);
    } catch {
      result = { ok: false as const, error: "server" as const };
    }
    if (result.ok) {
      setSent(true);
      return;
    }
    if (result.error === "invalid" && result.fieldErrors) {
      for (const [field, message] of Object.entries(result.fieldErrors)) {
        setError(
          field as LeadField,
          { type: "server", message },
          { shouldFocus: true },
        );
      }
      setStatus(copy.errors.summary);
      return;
    }
    const msg =
      result.error === "rate_limited"
        ? copy.errors.rateLimited
        : copy.errors.generic;
    setFormError(msg);
    setStatus(msg);
  };

  const onInvalid = () => setStatus(copy.errors.summary);

  const sendAnother = () => {
    reset(EMPTY);
    setStatus("");
    setFormError("");
    refocusAfterReset.current = true;
    setSent(false);
  };

  const nameField = register("name");

  return (
    <div className="contact-form">
      {/* Polite live region for validation and submission problems. */}
      <p className="sr-only" role="status" aria-live="polite">
        {status}
      </p>

      {sent ? (
        <div className="thanks" ref={thanksRef} tabIndex={-1}>
          <span className="thanks-icon">
            <TickIcon size={28} stroke="#0b1f3a" strokeWidth={3} />
          </span>
          <h3 className="h3" style={{ fontSize: 28, fontWeight: 700 }}>
            {thanks.title}
          </h3>
          <p className="muted">{thanks.body}</p>
          <button
            type="button"
            className={buttonClass("ghost")}
            onClick={sendAnother}
          >
            {thanks.again}
          </button>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit(onValid, onInvalid)}
          noValidate
          aria-label="Register interest"
        >
          <div className="two">
            <Field
              label={copy.name}
              error={errors.name?.message}
              id="lead-name"
            >
              <input
                type="text"
                autoComplete="name"
                required
                {...nameField}
                ref={(el) => {
                  nameField.ref(el);
                  firstFieldRef.current = el;
                }}
                {...a11y("lead-name", errors.name?.message)}
              />
            </Field>
            <Field
              label={copy.organisation}
              error={errors.organisation?.message}
              id="lead-org"
            >
              <input
                type="text"
                autoComplete="organization"
                required
                {...register("organisation")}
                {...a11y("lead-org", errors.organisation?.message)}
              />
            </Field>
          </div>

          <Field
            label={copy.email}
            error={errors.email?.message}
            id="lead-email"
          >
            <input
              type="email"
              autoComplete="email"
              inputMode="email"
              required
              {...register("email")}
              {...a11y("lead-email", errors.email?.message)}
            />
          </Field>

          <fieldset
            aria-describedby={errors.role ? "lead-role-error" : undefined}
          >
            <legend>{copy.role}</legend>
            <div className="roles">
              {copy.roles.map((role, i) => (
                <label key={role} className="role">
                  <input
                    type="radio"
                    value={role}
                    required={i === 0}
                    {...register("role")}
                  />
                  {role}
                </label>
              ))}
            </div>
            {errors.role?.message && (
              <p
                id="lead-role-error"
                className="field-error"
                style={{ marginTop: 8 }}
              >
                {errors.role.message}
              </p>
            )}
          </fieldset>

          <Field
            label={copy.message}
            error={errors.message?.message}
            id="lead-message"
          >
            <textarea
              rows={4}
              {...register("message")}
              {...a11y("lead-message", errors.message?.message)}
            />
          </Field>

          {/* Honeypot: hidden from people and assistive tech. */}
          <div className="hp" aria-hidden="true">
            <label>
              {copy.honeypot}
              <input
                type="text"
                tabIndex={-1}
                autoComplete="off"
                {...register("website")}
              />
            </label>
          </div>

          {formError && (
            <p className="field-error" role="alert">
              {formError}
            </p>
          )}

          <button
            type="submit"
            className={buttonClass("blue", "lg")}
            style={{ alignSelf: "flex-start" }}
            disabled={isSubmitting}
            aria-busy={isSubmitting || undefined}
          >
            {isSubmitting ? copy.submitting : copy.submit}
          </button>
          <p className="privacy">{copy.privacy}</p>
        </form>
      )}
    </div>
  );
}

function Field({
  label,
  error,
  id,
  children,
}: {
  label: string;
  error?: string;
  id: string;
  children: React.ReactNode;
}) {
  return (
    <div className="f">
      <label htmlFor={id}>{label}</label>
      {children}
      {error && (
        <span id={`${id}-error`} className="field-error">
          {error}
        </span>
      )}
    </div>
  );
}

function a11y(id: string, error?: string) {
  return {
    id,
    "aria-invalid": error ? (true as const) : undefined,
    "aria-describedby": error ? `${id}-error` : undefined,
  };
}

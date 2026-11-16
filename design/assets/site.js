/* Standara — motion + form (no dependencies) */
(function () {
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  document.documentElement.classList.add('js');

  /* Nav firms up after scrolling */
  var nav = document.querySelector('.nav');
  function onScroll() { if (nav) nav.classList.toggle('scrolled', window.scrollY > 10); }
  window.addEventListener('scroll', onScroll, { passive: true }); onScroll();

  /* Hero headline: words rise in */
  var h1 = document.querySelector('.hero .h1');
  if (h1 && !reduce) {
    h1.innerHTML = h1.textContent.trim().split(/\s+/).map(function (w, i) {
      return '<span class="word" style="transition-delay:' + (0.08 * i + 0.1).toFixed(2) + 's">' + w + '</span>';
    }).join(' ');
  }
  requestAnimationFrame(function () { requestAnimationFrame(function () { document.body.classList.add('loaded'); }); });

  /* Count-up for numbers like £407bn, 95%, 50% */
  function countUp(el) {
    var txt = el.textContent.trim();
    var m = txt.match(/^([^\d]*)(\d+)([^\d]*)$/);
    if (!m || reduce) return;
    var pre = m[1], target = parseInt(m[2], 10), suf = m[3], start = null, dur = 1500;
    function frame(t) {
      if (!start) start = t;
      var p = Math.min((t - start) / dur, 1);
      el.textContent = pre + Math.round(target * (1 - Math.pow(1 - p, 4))) + suf;
      if (p < 1) requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }

  /* Score ring: start empty, fill when shown */
  var arc = document.querySelector('.report circle[stroke-dasharray]');
  var arcTarget = arc ? arc.getAttribute('stroke-dasharray') : null;
  var scoreText = document.querySelector('.report svg text');
  if (arc && !reduce) { arc.classList.add('gauge-arc'); arc.setAttribute('stroke-dasharray', '0 339.3'); }

  /* What reveals on scroll */
  var revealSel = '.head, .card, .stepcards li, .lend-steps li, .figures > div, .tiles > div, .timeline li, .sector, .practice, .callout, .neutral, .tbl, .record, .cta, .contact, .panel, .split > .stack, .levels > .card';
  var reveals = Array.prototype.slice.call(document.querySelectorAll(revealSel)).filter(function (el) { return !el.closest('.hero'); });
  reveals.forEach(function (el) {
    el.classList.add('rv');
    var sibs = Array.prototype.filter.call(el.parentElement.children, function (c) { return c.matches(revealSel); });
    var i = sibs.indexOf(el);
    if (i > 0) el.style.transitionDelay = Math.min(i * 0.09, 0.45) + 's';
  });
  var watch = reveals.concat(Array.prototype.slice.call(document.querySelectorAll('.report, .steps, .flow, .levels')));

  function activate(el) {
    el.classList.add('in');
    if (el.classList.contains('report')) {
      if (arc && arcTarget) arc.setAttribute('stroke-dasharray', arcTarget);
      if (scoreText && !reduce) {
        var s = null;
        (function f(t) { if (!s) s = t; var p = Math.min((t - s) / 1800, 1); scoreText.textContent = Math.round(78 * (1 - Math.pow(1 - p, 3))); if (p < 1) requestAnimationFrame(f); })(performance.now());
      }
    }
    el.querySelectorAll('.fig, .bigpct').forEach(countUp);
    if (el.matches('.fig, .bigpct')) countUp(el);
  }

  if ('IntersectionObserver' in window && !reduce) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { activate(e.target); io.unobserve(e.target); } });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
    watch.forEach(function (el) { io.observe(el); });
    setTimeout(function () { watch.forEach(function (el) { if (!el.classList.contains('in')) activate(el); }); }, 8000);
  } else {
    watch.forEach(activate);
  }

  /* Contact form */
  var roles = document.querySelectorAll('.role');
  roles.forEach(function (r) {
    r.addEventListener('click', function () { roles.forEach(function (o) { o.setAttribute('aria-pressed', o === r ? 'true' : 'false'); }); });
  });
  var form = document.getElementById('interest-form');
  var thanks = document.getElementById('thanks');
  if (form && thanks) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      // TODO: send the form data (and the selected "I am a..." role) to your backend or form service here.
      form.style.display = 'none';
      thanks.classList.add('show');
    });
    document.getElementById('again').addEventListener('click', function () {
      form.reset(); roles.forEach(function (o) { o.setAttribute('aria-pressed', 'false'); });
      thanks.classList.remove('show'); form.style.display = '';
    });
  }
})();

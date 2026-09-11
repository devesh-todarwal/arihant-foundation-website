// Arihant Foundation — shared site behaviour
(function () {
  // mobile nav
  var menuBtn = document.getElementById('menuBtn');
  var navlinks = document.getElementById('navlinks');
  if (menuBtn && navlinks) {
    menuBtn.addEventListener('click', function () { navlinks.classList.toggle('open'); });
    navlinks.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { navlinks.classList.remove('open'); });
    });
  }

  // gentle scroll reveal — plain rect checks, never traps content invisible
  document.documentElement.classList.add('js');
  var toReveal = Array.prototype.slice.call(document.querySelectorAll('.reveal'));
  function checkReveals() {
    for (var i = toReveal.length - 1; i >= 0; i--) {
      var r = toReveal[i].getBoundingClientRect();
      if (r.top < window.innerHeight * 0.92 && r.bottom > 0) {
        toReveal[i].classList.add('in');
        toReveal.splice(i, 1);
      }
    }
  }
  window.addEventListener('scroll', checkReveals, { passive: true });
  window.addEventListener('resize', checkReveals);
  window.addEventListener('load', checkReveals);
  checkReveals();
  setTimeout(function () { toReveal.forEach(function (el) { el.classList.add('in'); }); toReveal = []; }, 2500);

  // lightbox (pages with a gallery)
  var lb = document.getElementById('lb'), lbimg = document.getElementById('lbimg');
  if (lb && lbimg) {
    document.querySelectorAll('#galleryGrid figure').forEach(function (fig) {
      fig.setAttribute('tabindex', '0');
      fig.setAttribute('role', 'button');
      var img = fig.querySelector('img');
      function openLb() { lbimg.src = img.src; lbimg.alt = img.alt; lb.classList.add('open'); }
      fig.addEventListener('click', openLb);
      fig.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openLb(); } });
    });
    lb.addEventListener('click', function () { lb.classList.remove('open'); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') lb.classList.remove('open'); });
  }

  // gallery category filters
  var filterBar = document.getElementById('galleryFilters');
  if (filterBar) {
    filterBar.querySelectorAll('button').forEach(function (btn) {
      btn.addEventListener('click', function () {
        filterBar.querySelectorAll('button').forEach(function (b) { b.classList.remove('on'); b.setAttribute('aria-pressed', 'false'); });
        btn.classList.add('on'); btn.setAttribute('aria-pressed', 'true');
        var cat = btn.getAttribute('data-filter');
        document.querySelectorAll('#galleryGrid figure').forEach(function (fig) {
          var match = cat === 'all' || (fig.getAttribute('data-cat') || '').indexOf(cat) !== -1;
          fig.classList.toggle('hide', !match);
        });
      });
    });
  }

  // forms that compose an email to the Foundation (no backend needed).
  // Any form with [data-mailform] and a data-subject attribute.
  document.querySelectorAll('form[data-mailform]').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var subject = form.getAttribute('data-subject') || 'Website enquiry';
      var lines = [];
      form.querySelectorAll('input[type=text],input[type=email],input[type=tel],select,textarea').forEach(function (el) {
        if (el.value) lines.push((el.getAttribute('data-label') || el.name) + ': ' + el.value);
      });
      var checks = [];
      form.querySelectorAll('input[type=checkbox]:checked').forEach(function (c) { checks.push(c.value); });
      if (checks.length) lines.push('Areas of interest: ' + checks.join(', '));
      var body = lines.join('\n');
      window.location.href = 'mailto:arihantfoundation@gmail.com?subject=' +
        encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
      var note = form.querySelector('.form-sent');
      if (note) note.hidden = false;
    });
  });
})();

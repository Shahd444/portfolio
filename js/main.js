(function () {
  // Logo wall: duplicate the track once so translating by -50% loops seamlessly
  var track = document.querySelector('.dm-marquee-track');
  if (track) {
    Array.prototype.slice.call(track.children).forEach(function (item) {
      var copy = item.cloneNode(true);
      copy.setAttribute('aria-hidden', 'true');
      track.appendChild(copy);
    });
  }

  // Desktop nav shrinks into a glass pill once the page scrolls
  var navWrap = document.querySelector('.nav-wrap');
  var nav = navWrap && navWrap.querySelector('.dm-nav');
  function onScroll() {
    var scrolled = window.scrollY > 10;
    if (navWrap) navWrap.classList.toggle('is-scrolled', scrolled);
    if (nav) nav.classList.toggle('dm-nav--scrolled', scrolled);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Mark the link of the section in view
  var links = document.querySelectorAll('a[data-nav]');
  var sections = ['home', 'about', 'projects', 'contact']
    .map(function (id) { return document.getElementById(id); })
    .filter(Boolean);
  function setCurrent(id) {
    links.forEach(function (a) {
      if (a.getAttribute('data-nav') === id) a.setAttribute('aria-current', 'page');
      else a.removeAttribute('aria-current');
    });
  }
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) setCurrent(e.target.id); });
    }, { rootMargin: '-40% 0px -55% 0px' });
    sections.forEach(function (s) { io.observe(s); });
  }
  setCurrent('home');

  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();

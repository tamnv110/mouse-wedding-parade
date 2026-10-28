(function () {
  function get() { try { return localStorage.getItem('mwp-lang'); } catch (e) { return null; } }
  function put(v) { try { localStorage.setItem('mwp-lang', v); } catch (e) {} }
  var q = new URLSearchParams(location.search).get('lang');
  var lang = q || get() || ((navigator.language || 'en').toLowerCase().indexOf('vi') === 0 ? 'vi' : 'en');
  if (lang !== 'vi') lang = 'en';
  function set(l) {
    document.documentElement.setAttribute('data-lang', l);
    document.documentElement.lang = l;
    document.querySelectorAll('.seg button').forEach(function (b) {
      b.setAttribute('aria-pressed', b.dataset.set === l ? 'true' : 'false');
    });
    put(l);
  }
  set(lang);
  document.addEventListener('DOMContentLoaded', function () {
    set(lang);
    document.querySelectorAll('.seg button').forEach(function (b) {
      b.addEventListener('click', function () { lang = b.dataset.set; set(lang); });
    });
    var y = document.getElementById('y'); if (y) y.textContent = new Date().getFullYear();
  });
})();

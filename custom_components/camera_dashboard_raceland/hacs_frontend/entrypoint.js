
try {
  new Function("import('/hacsfiles/frontend/main-dev.js')")();
} catch (err) {
  var el = document.createElement('script');
  el.src = '/hacsfiles/frontend/main-dev.js';
  el.type = 'module';
  document.body.appendChild(el);
}
  
// Páginas embebidas: todo <iframe class="marco-embebido"> ajusta su altura a su contenido
// para que no tenga barra de desplazamiento propia.
// Si el navegador no lo permite (por ejemplo, al abrir el archivo con doble clic), se queda con la altura del CSS.
document.querySelectorAll('iframe.marco-embebido').forEach(function (marco) {
  function ajustar() {
    try { marco.style.height = marco.contentDocument.documentElement.scrollHeight + 'px'; } catch (e) {}
  }
  marco.addEventListener('load', function () {
    ajustar();
    try { new ResizeObserver(ajustar).observe(marco.contentDocument.body); } catch (e) {}
  });
});

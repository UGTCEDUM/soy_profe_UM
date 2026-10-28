// Popups: un botón con data-abrir="id-del-dialog" abre ese popup.
// Dentro del <dialog>, el botón con data-cerrar lo cierra.
// El iframe se carga solo al abrir, para no hacer lenta la página.
document.querySelectorAll('[data-abrir]').forEach(function (boton) {
  var modal = document.getElementById(boton.dataset.abrir);
  var marco = modal.querySelector('iframe');
  boton.addEventListener('click', function () {
    // En celulares los PDF locales no se ven dentro de un iframe: se abren en una pestaña nueva
    var esPdfLocal = /\.pdf(#|$)/i.test(marco.dataset.src);
    if (esPdfLocal && window.matchMedia('(pointer: coarse) and (max-width: 768px)').matches) {
      window.open(marco.dataset.src.split('#')[0], '_blank', 'noopener');
      return;
    }
    if (!marco.src) marco.src = marco.dataset.src;
    modal.showModal();
  });
  modal.querySelector('[data-cerrar]').addEventListener('click', function () {
    modal.close();
  });
  // Cerrar al hacer clic fuera del contenido
  modal.addEventListener('click', function (e) {
    if (e.target === modal) modal.close();
  });
});

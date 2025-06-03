// Inicializa AOS (animaciones al hacer scroll)
AOS.init();

// Inicializa Swiper (slider)
const swiper = new Swiper(".mySwiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination"
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});

// Animación al pasar el mouse sobre productos
document.querySelectorAll('.producto').forEach(producto => {
  producto.addEventListener('mouseenter', () => {
    producto.style.transform = 'scale(1.05)';
    producto.style.transition = '0.3s';
  });
  producto.addEventListener('mouseleave', () => {
    producto.style.transform = 'scale(1)';
  });
});
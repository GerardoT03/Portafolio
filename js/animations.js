document.addEventListener('DOMContentLoaded', function () {
    const header = document.getElementById('list-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const elementos = document.querySelectorAll(".scroll-animation");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            } else {
                entry.target.classList.remove("visible");
            }
        });
    }, {
        threshold: 0.1, // Ajusta este valor para controlar cuándo se activa la animación
    });

    elementos.forEach((elemento) => {
        observer.observe(elemento);
    });
});
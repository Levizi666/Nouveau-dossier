






// Animation sécurisée
document.addEventListener("DOMContentLoaded", () => {

    const elements = document.querySelectorAll(".card, .section, .hero-content");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, { threshold: 0.2 });

    elements.forEach(el => {
        el.classList.add("hidden");
        observer.observe(el);
    });

});
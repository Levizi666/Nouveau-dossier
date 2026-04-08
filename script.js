document.addEventListener("DOMContentLoaded", function () {

    // Animation scroll (léger)
    const elements = document.querySelectorAll(".card, .section");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    });

    elements.forEach(el => {
        el.classList.add("hidden");
        observer.observe(el);
    });

    // Désactiver animation sur petits téléphones
    if (window.innerWidth < 600) {
        elements.forEach(el => el.classList.remove("hidden"));
    }

    // Formulaire → WhatsApp
    const form = document.querySelector(".form");

    form.addEventListener("submit", function(e) {
        e.preventDefault();

        const nom = form.querySelector("input[type='text']").value;
        const tel = form.querySelector("input[type='tel']").value;
        const date = form.querySelector("input[type='date']").value;
        const voiture = form.querySelector("select").value;

        const message = `Bonjour Auto Parking CK,%0A
Nom: ${nom}%0A
Téléphone: ${tel}%0A
Date: ${date}%0A
Voiture: ${voiture}`;

        window.open(`https://wa.me/22390873170?text=${message}`, "_blank");
    });

});
// Animation au scroll
const elements = document.querySelectorAll('.card, .section, .hero-content');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, {
    threshold: 0.2
});

elements.forEach(el => observer.observe(el));


// Bouton WhatsApp flottant
const whatsappBtn = document.createElement("a");
whatsappBtn.href = "https://wa.me/22390873170";
whatsappBtn.innerHTML = "💬";
whatsappBtn.target = "_blank";

whatsappBtn.style.position = "fixed";
whatsappBtn.style.bottom = "20px";
whatsappBtn.style.right = "20px";
whatsappBtn.style.background = "#25D366";
whatsappBtn.style.color = "white";
whatsappBtn.style.fontSize = "24px";
whatsappBtn.style.padding = "15px";
whatsappBtn.style.borderRadius = "50%";
whatsappBtn.style.boxShadow = "0 5px 15px rgba(0,0,0,0.3)";
whatsappBtn.style.zIndex = "999";

document.body.appendChild(whatsappBtn);


// Animation bouton clic
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', () => {
        btn.style.transform = "scale(0.95)";
        setTimeout(() => {
            btn.style.transform = "scale(1)";
        }, 150);
    });
});
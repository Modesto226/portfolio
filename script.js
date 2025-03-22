document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Empêche l'envoi du formulaire

    // Récupère les valeurs des champs
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Validation simple
    if (name === "" || email === "" || message === "") {
        document.getElementById("form-message").textContent = "Tous les champs sont obligatoires.";
        document.getElementById("form-message").style.color = "red";
    } else if (!validateEmail(email)) {
        document.getElementById("form-message").textContent = "Veuillez entrer une adresse email valide.";
        document.getElementById("form-message").style.color = "red";
    } else {
        document.getElementById("form-message").textContent = "Message envoyé avec succès !";
        document.getElementById("form-message").style.color = "green";
        // Réinitialiser le formulaire après envoi
        document.getElementById("contact-form").reset();
    }
});

// Fonction pour valider l'email
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// effet de survol
document.querySelectorAll(".projet").forEach(projet => {
    projet.addEventListener("click", function() {
        alert("Vous avez cliqué sur : " + this.querySelector("h3").textContent);
    });
});

// animation
function checkVisibility() {
    document.querySelectorAll("section").forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) { // 80% de la hauteur de l'écran
            section.classList.add("visible");
        }
    });
}

window.addEventListener("scroll", checkVisibility);
window.addEventListener("load", checkVisibility); // Vérifie au chargement de la page


// Afficher ou masquer le bouton en fonction du défilement
window.onscroll = function() {
    const backToTopButton = document.getElementById("back-to-top");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopButton.style.display = "block"; // Affiche le bouton
    } else {
        backToTopButton.style.display = "none"; // Cache le bouton
    }
};

// Faire défiler vers le haut lorsque le bouton est cliqué
document.getElementById("back-to-top").onclick = function() {
    document.body.scrollTop = 0; // Pour Safari
    document.documentElement.scrollTop = 0; // Pour Chrome, Firefox, IE et Opera
};
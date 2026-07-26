// ===============================
// Portfolio JavaScript
// ===============================

// ---------- Active Navigation ----------

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active");
        }

    });

});


// ---------- Reveal Animation ----------

const cards = document.querySelectorAll(
    ".about-container, .skill-card, .project-card, .education-card"
);

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0px)";

        }

    });

}, {
    threshold: 0.2
});

cards.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
    card.style.transition = "all 0.6s ease";

    observer.observe(card);

});


// ---------- Hero Typing Effect ----------

const title = document.querySelector(".hero h2");

const text = "Computer Science & Engineering Student";

let index = 0;

title.textContent = "";

function typeText() {

    if (index < text.length) {

        title.textContent += text.charAt(index);

        index++;

        setTimeout(typeText, 60);

    }

}

window.onload = () => {

    typeText();

};


// ---------- Smooth Scroll ----------

navLinks.forEach(link => {

    link.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(
            this.getAttribute("href")
        );

        target.scrollIntoView({

            behavior: "smooth"

        });

    });

});


// ---------- Console Message ----------

console.log("Welcome to Saheema's Portfolio!");

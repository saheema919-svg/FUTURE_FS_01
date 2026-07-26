// Welcome Message

console.log("Welcome to Saheema's Portfolio");

// =========================
// Contact Form Validation
// =========================

const form = document.querySelector("form");

form.addEventListener("submit", function(event){

    event.preventDefault();

    const name = document.querySelector('input[type="text"]').value.trim();

    const email = document.querySelector('input[type="email"]').value.trim();

    const message = document.querySelector("textarea").value.trim();

    if(name === "" || email === "" || message === "")
    {
        alert("Please fill all the fields.");
        return;
    }

    alert("Thank you for contacting me! I will get back to you soon.");

    form.reset();

});


// =========================
// Highlight Active Navigation
// =========================

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 100;

        if(window.scrollY >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }

    });

});


// =========================
// Scroll Animation
// =========================

const cards = document.querySelectorAll(".project-card,.skill,.education-box");

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.style.opacity = "1";

            entry.target.style.transform = "translateY(0px)";

        }

    });

});

cards.forEach(card=>{

    card.style.opacity="0";

    card.style.transform="translateY(40px)";

    card.style.transition="0.6s";

    observer.observe(card);

});


// =========================
// Hero Text Typing Effect
// =========================

const title = document.querySelector(".hero h2");

const text = "Computer Science Engineering Student";

let index = 0;

title.textContent = "";

function typing(){

    if(index < text.length){

        title.textContent += text.charAt(index);

        index++;

        setTimeout(typing,70);

    }

}

typing();

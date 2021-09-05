const burgerBtn = document.querySelector('.burger-btn')
const nav = document.querySelector('.nav-list')
const navButtons = document.querySelectorAll('.nav-list li')
const main = document.querySelector('main')
const navLinks = document.querySelectorAll('.nav-links')
const body = document.querySelector('body')

const scrollBtn = document.querySelector('.scrollBtn');


const responsiveBurgerMenu = () => {
    // Toggle nav bar
    burgerBtn.addEventListener('click', (e) => {

        e.stopPropagation()
        nav.classList.toggle('nav-active')
        main.classList.toggle('blur')
        body.classList.toggle('overflow')

        // FadeIn navbar links
        navButtons.forEach((button, index) => {
            if (button.style.animation) {
                button.style.animation = ''
            } else {
                button.style.animation = `navLinkFade 0.5s ease forwards ${index / 12}s`;
            }
        })

        // Close navbar when a link is clicked
        navLinks.forEach(link => link.addEventListener("click", () => {
            nav.classList.remove('nav-active')
            main.classList.remove('blur')
            burgerBtn.classList.remove('toggle');
            body.classList.remove('overflow');
            navButtons.forEach((button) => {
                button.style.animation = ''
            })
        }))

        // Burger menu button animation
        burgerBtn.classList.toggle('toggle');
    })

    // Close navbar when clicked outside
    document.addEventListener('click', (e) => {
        if (!e.target.classList.contains('nav-list') && nav.classList.contains('nav-active')) {
            nav.classList.remove('nav-active')
            main.classList.remove('blur')
            burgerBtn.classList.remove('toggle');
            body.classList.remove('overflow');
            navButtons.forEach((button) => {
                button.style.animation = ''
            })
        }
    });
}

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
        scrollBtn.classList.add('fadeIn');
        scrollBtn.classList.remove('fadeOut');
    } else {
        scrollBtn.classList.remove('fadeIn');
        scrollBtn.classList.add('fadeOut');
    }
}

// When the user clicks on the button, scroll to the top of the document
function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

responsiveBurgerMenu()
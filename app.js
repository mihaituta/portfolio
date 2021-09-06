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

const SuccessAlert = document.querySelector('.success-alert')
const ErrorAlert = document.querySelector('.error-alert')
const AlertCloseButtons = document.querySelectorAll('.close-btn');

const showAlert = (alert) => {
    alert.classList.remove('hide')
    alert.classList.add('show')
    alert.classList.add('showAlert')
    setTimeout(() => {
        alert.classList.add('hide')
        alert.classList.remove('show')
    }, 5000)
}

// Close alert when X button is clicked
for (let i = 0; i < AlertCloseButtons.length; i++) {
    AlertCloseButtons[i].addEventListener('click', () => {
        if (SuccessAlert.classList.contains('show')) {
            SuccessAlert.classList.add('hide')
            SuccessAlert.classList.remove('show')
        }
        if (ErrorAlert.classList.contains('show')) {
            ErrorAlert.classList.add('hide')
            ErrorAlert.classList.remove('show')
        }
    });
}

// Use Ajax to display a success or error alert when the form is submitted
const contactForm = document.querySelector('.contact-form')
contactForm.addEventListener("submit", (e) => {
    e.preventDefault()
    const formData = new FormData(contactForm)
    fetch('/', {
        method: 'POST',
        headers: {"Content-Type": "application/x-www-form-urlencoded"},
        body: new URLSearchParams(formData).toString()
    }).then(() => {
        showAlert(SuccessAlert)
        //reset form inputs
        
    }).catch(() => showAlert(ErrorAlert))
})

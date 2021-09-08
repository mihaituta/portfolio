const burgerBtn = document.querySelector('.burger-btn')
const nav = document.querySelector('.nav-list')
const navButtons = document.querySelectorAll('.nav-list li')
const main = document.querySelector('main')
const navLinks = document.querySelectorAll('.nav-links')
const body = document.querySelector('body')
const scrollBtn = document.querySelector('.scrollBtn');
const SuccessAlert = document.querySelector('.success-alert')
const ErrorAlert = document.querySelector('.error-alert')
const contactForm = document.querySelector('.contact-form')

const responsiveBurgerMenuLogic = () => {
    // Toggle nav bar on small screens
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

const scrollLogic = () => {
//  Show the scroll to top button when the user scrolls down 40px from the top of the document
    const scrollFunction = () => {
        if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
            scrollBtn.classList.add('fadeIn');
            scrollBtn.classList.remove('fadeOut');
        } else {
            scrollBtn.classList.remove('fadeIn');
            scrollBtn.classList.add('fadeOut');
        }
    }

    window.onscroll = function () {
        scrollFunction()
    };
}

// When the user clicks on the button, scroll to the top of the document
const scrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

const alertLogic = () => {
    const AlertCloseButtons = document.querySelectorAll('.close-btn');

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
}

const showAlert = (alert) => {
    alert.classList.remove('hide')
    alert.classList.add('show')
    alert.classList.add('showAlert')
    setTimeout(() => {
        alert.classList.add('hide')
        alert.classList.remove('show')
    }, 5000)
}

const formLogic = () => {
    const nameInput = contactForm.elements['name']
    const emailInput = contactForm.elements['email']
    const messageInput = contactForm.elements['message']

    const inputs = [nameInput, emailInput, messageInput]

    const resetInput = (input) => {
        const formGroup = input.parentElement;
        formGroup.classList.remove('invalid')
    }

    const inputError = (input, message) => {
        const formGroup = input.parentElement;
        const errorMsg = formGroup.querySelector('.input-error-msg')
        errorMsg.innerText = message;
        formGroup.classList.add('invalid')
    }

    const isEmail = (value) => /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value);

    let isFormValid = false;
    let shouldValidate = false;

    const validateInputs = () => {
        if (!shouldValidate) return
        isFormValid = true

        const nameValue = nameInput.value.trim()
        const emailValue = emailInput.value.trim()
        const messageValue = messageInput.value.trim()

        inputs.forEach(input => resetInput(input))

        if (!nameValue) {
            isFormValid = false;
            inputError(nameInput, 'Name field is required!')
        }

        if (!emailValue) {
            isFormValid = false;
            inputError(emailInput, 'Email field is required!')
        } else if (!isEmail(emailValue)) {
            isFormValid = false;
            inputError(emailInput, 'A valid email address is required!')
        }

        if (!messageValue) {
            isFormValid = false;
            inputError(messageInput, 'Message field is requires!')
        }
    }

// Validate inputs and use Ajax to display a success or error alert when the form is submitted
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault()
        shouldValidate = true
        validateInputs()
        if (isFormValid) {
            const formData = new FormData(contactForm)
            fetch('/', {
                method: 'POST',
                headers: {"Content-Type": "application/x-www-form-urlencoded"},
                body: new URLSearchParams(formData).toString()
            }).then(() => {
                showAlert(SuccessAlert)
                nameInput.value = ''
                emailInput.value = ''
                messageInput.value = ''
                isFormValid = false
                shouldValidate = false
            }).catch(() => showAlert(ErrorAlert))
        }
    })

// Add an event listener for every input field to validate
    inputs.forEach(input => input.addEventListener('input', () => validateInputs()))
}

const loadFunctions = () => {
    responsiveBurgerMenuLogic()
    scrollLogic()
    if (contactForm) {
        formLogic()
        alertLogic()
    }
}

loadFunctions()
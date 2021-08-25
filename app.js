/*window.onscroll = function () {
    const infinityFood = document.querySelector('#infinityFood');
    const infinityCode = document.querySelector('#infinityCode');
    const spaceGame = document.querySelector('#spaceGame');
    const testeGrila = document.querySelector('#testeGrila');
    const projectTitle = document.querySelector('#project-title')
    const projectSkills = document.querySelector('#project-skills')
    const projectDescription = document.querySelector('#project-description')
    const projectContent = document.querySelector('#project-content')
    const livePreviewBtn = document.querySelector('#live-preview-btn')
    const githubBtn = document.querySelector('#github-btn')

    if (isScrolledIntoView(infinityFood)) {
        projectTitle.innerHTML = "Infinity Food"
        projectSkills.innerHTML = ""
        projectSkills.appendChild(populateUL(['HTML', 'CSS', 'JavaScript', 'Vue.js', 'Node.js']));
        projectDescription.innerHTML = "A web platform for presenting and managing restaurants."
        livePreviewBtn.style.visibility = "visible"
        githubBtn.style.visibility = "visible"
    } else if (isScrolledIntoView(infinityCode)) {
        projectTitle.innerHTML = "Infinity Code"
        projectSkills.innerHTML = ""
        projectSkills.appendChild(populateUL(['HTML', 'CSS', 'JavaScript', 'PHP']));
        projectDescription.innerHTML = "A programming contest website made during college."
        livePreviewBtn.style.visibility = "visible"
        githubBtn.style.visibility = "visible"
    } else if (isScrolledIntoView(spaceGame)) {
        projectTitle.innerHTML = "Space Game"
        projectSkills.innerHTML = ""
        projectSkills.appendChild(populateUL(['C']));
        projectDescription.innerHTML = "A fun space shooting 2d game made during college."
        livePreviewBtn.style.visibility = "visible"
        githubBtn.style.visibility = "visible"
    } else if (isScrolledIntoView(testeGrila)) {
        projectTitle.innerHTML = "Teste Grila"
        projectSkills.innerHTML = ""
        projectSkills.appendChild(populateUL(['Java', 'JPheonix', 'SceneBuilder']));
        projectDescription.innerHTML = "A quiz-solving application made during college."
        livePreviewBtn.style.visibility = "visible"
        githubBtn.style.visibility = "visible"
    } else {
        projectTitle.innerHTML = ""
        projectSkills.innerHTML = ""
        projectDescription.innerHTML = ""
        livePreviewBtn.style.visibility = "hidden"
        githubBtn.style.visibility = "hidden"
    }
}*/

/*function populateUL(array) {
    const list = document.createElement('ul');

    for (let i = 0; i < array.length; i++) {
        let item = document.createElement('li');
        item.appendChild(document.createTextNode(array[i]));

        list.appendChild(item);
    }
    return list;
}

function isScrolledIntoView(elem) {
    const rect = elem.getBoundingClientRect()
    const elemTop = rect.top
    const elemBottom = rect.bottom

    // const isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight)
    // const isVisible = (elemTop < window.innerHeight && elemBottom >= 250)
    const isVisible = (elemTop <= 250) && (elemBottom >= 250)

    return isVisible
}*/

const responsiveBurgerMenu = () => {
    const burgerBtn = document.querySelector('.burger-btn')
    const nav = document.querySelector('.nav-list')
    const navButtons = document.querySelectorAll('.nav-list li')
    const content = document.querySelector('#content')
    const navLinks = document.querySelectorAll('.nav-links')
    const body = document.querySelector('body')
    //Toggle nav bar
    burgerBtn.addEventListener('click', (e) => {

        e.stopPropagation()
        nav.classList.toggle('nav-active')
        content.classList.toggle('blur')
        body.classList.toggle('overflow')

        //FadeIn navbar links
        navButtons.forEach((button, index) => {
            if (button.style.animation) {
                button.style.animation = ''
            } else {
                button.style.animation = `navLinkFade 0.5s ease forwards ${index / 12}s`;
            }
        })

        //Close navbar when a link is clicked
        navLinks.forEach(link => link.addEventListener("click", () => {
            nav.classList.remove('nav-active')
            content.classList.remove('blur')
            burgerBtn.classList.remove('toggle');
            body.classList.remove('overflow');
            navButtons.forEach((button) => {
                button.style.animation = ''
            })
        }))

        //Burger btn animation
        burgerBtn.classList.toggle('toggle');
    })

    //Close navbar when clicked outside
    document.addEventListener('click', function (e) {
        if (!e.target.classList.contains('nav-list') && nav.classList.contains('nav-active')) {
            nav.classList.remove('nav-active')
            content.classList.remove('blur')
            burgerBtn.classList.remove('toggle');
            body.classList.remove('overflow');
            navButtons.forEach((button) => {
                button.style.animation = ''
            })
        }
    });
}

responsiveBurgerMenu()
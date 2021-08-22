window.onscroll = function () {
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
}

function populateUL(array) {
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
}


function initGoogleMap() {
    const coords = {lat: 51.364473520265456, lng: 6.419280449229745};
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 10,
        center: coords,
        mapId: '46d5929e81efda3',
        disableDefaultUI: true,
    })
    map.panBy(450,0);

    new google.maps.Marker({
        position: coords,
        map,
        title: "Mihai Tuta",
    });
}
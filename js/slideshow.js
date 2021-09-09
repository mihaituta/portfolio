const slideshow = document.querySelector('.slideshow')
const slides = Array.from(slideshow.children)
const dotsNav = document.querySelector('.slideshow-nav')
const dots = Array.from(dotsNav.children)
const nextButton = document.querySelector('.slideshow-button-next')
const prevButton = document.querySelector('.slideshow-button-prev')

// display the first image on page load
// slides[0].style.display = 'block'
slides[0].style.display = 'block'

function showSlide(slideshow, currentSlide, targetSlide) {
    currentSlide.style.display = 'none'
    currentSlide.classList.remove('current-slide')
    targetSlide.style.display = 'block'
    targetSlide.classList.add('current-slide')
}

// show/hide next and previous buttons at the start/end of slideshow
const hideShowArrows = (targetIndex) => {
    if (targetIndex === 0) {
        prevButton.classList.add('is-hidden')
        nextButton.classList.remove('is-hidden')
    } else if (targetIndex === slides.length - 1) {
        nextButton.classList.add('is-hidden')
        prevButton.classList.remove('is-hidden')

    } else {
        prevButton.classList.remove('is-hidden')
        nextButton.classList.remove('is-hidden')
    }
}

const updateDots = (currentDot, targetDot) => {
    currentDot.classList.remove('current-slide')
    targetDot.classList.add('current-slide')
}

// show previous image
prevButton.addEventListener('click', () => {
    const currentDot = dotsNav.querySelector('.current-slide')
    const prevDot = currentDot.previousElementSibling
    const currentSlide = slideshow.querySelector('.current-slide')
    const prevSlide = currentSlide.previousElementSibling
    const prevIndex = slides.findIndex(slide => slide === prevSlide)

    hideShowArrows(prevIndex)
    showSlide(slideshow, currentSlide, prevSlide)
    updateDots(currentDot, prevDot)
})

// show next image
nextButton.addEventListener('click', () => {
    const currentDot = dotsNav.querySelector('.current-slide')
    const nextDot = currentDot.nextElementSibling
    const currentSlide = slideshow.querySelector('.current-slide')
    const nextSlide = currentSlide.nextElementSibling
    const nextIndex = slides.findIndex(slide => slide === nextSlide)

    hideShowArrows(nextIndex)
    showSlide(slideshow, currentSlide, nextSlide)
    updateDots(currentDot, nextDot)
})


// when clicked on the bottom nav dots move to the selected slide
dotsNav.addEventListener('click', e => {
    // which dot was clicked
    const targetDot = e.target.closest('button');

    // only run the function if a button was clicked (and not the navbar itself)
    if (!targetDot) return

    const currentDot = dotsNav.querySelector('.current-slide')
    const targetIndex = dots.findIndex(dot => dot === targetDot)

    const currentSlide = slideshow.querySelector('.current-slide')
    const targetSlide = slides[targetIndex]

    hideShowArrows(targetIndex)
    showSlide(slideshow, currentSlide, targetSlide)
    updateDots(currentDot, targetDot)
})

const video = document.querySelector(".video");

// set time for timestamps on video to jump to
const setTime = (time) => {
    // transform time from format MM:SS (ex: 00:15) format to seconds (15)
    const split = time.split(":");
    video.currentTime = split[0] * 60 + (+split[1])
}
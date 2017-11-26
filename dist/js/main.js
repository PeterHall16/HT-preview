//Peter Hall
//18:14 25/11/2017
function picker(query) {
	return document.querySelector(query)
}

let splash = picker('.splash')
let grid = picker('.grid')
let link = picker('.link')
let subtitle = picker('h1.subtitle')
let toggle = picker('.toggle')
let back = picker('.second')
let spotlightArticle = picker('div.splash article')
let spotlightArticleContainer = picker('div.splash div.article-container')
let swipe = picker('.swipe')
let unswipe = picker('.unswipe')
let right = picker('.right')
let content = picker('.content')
let special = picker('.special')

let listOfFades = document.querySelectorAll('.HIDE')

//Events
link.addEventListener('click', spotlight)
link.addEventListener('touchstart', spotlight)

back.addEventListener('click', closeSpotlight)
back.addEventListener('touchstart', closeSpotlight)

swipe.addEventListener('click', pageSwipe)
swipe.addEventListener('touchstart', pageSwipe)

unswipe.addEventListener('click', pageUnSwipe)
unswipe.addEventListener('touchstart', pageUnSwipe)

function spotlight() {
	splash.style.borderRadius = "0"
	splash.style.width = "48vw"
	splash.style.height = "90vh"
	subtitle.style.opacity = "1"
	back.style.opacity = "1"
	back.style.visibility = "visible"
	spotlightArticle.style.opacity = "1"
	spotlightArticle.style.userSelect = "auto"
	spotlightArticleContainer.style.opacity = "1"
	spotlightArticleContainer.style.userSelect = "auto"
	// splash.style.border-radius = "0"
	listOfFades.forEach(fade => {
		fade.style.opacity = "0"
		fade.style.visibility = "hidden"
	})
}

function closeSpotlight() {
	splash.style.borderRadius = "50%"
	splash.style.width = "30em"
	splash.style.height = "30em"
	subtitle.style.opacity = "0"
	back.style.opacity = "0"
	back.style.visibility = "hidden"
	spotlightArticle.style.opacity = "0"
	spotlightArticle.style.userSelect = "none"
	spotlightArticleContainer.style.opacity = "0"
	spotlightArticleContainer.style.userSelect = "none"
	// splash.style.border-radius = "0"
	listOfFades.forEach(fade => {
		fade.style.opacity = "1"
		fade.style.visibility = "visible"
	})
}

function pageSwipe() {
	special.style.opacity = "0"
	special.style.visibility = "hidden"
	grid.style.opacity = "0"
	grid.style.visibility = "hidden"
	grid.style.width = "0vw"
	right.style.opacity = "0"
	right.style.visibility = "hidden" 
	right.style.width = "0vw"
	content.style.width = "72vw"

}

function pageUnSwipe() {
	special.style.opacity = "1"
	special.style.visibility = "visible"
	grid.style.visibility = "visible"
	grid.style.opacity = "1"
	grid.style.width = "54vw"
	right.style.visibility = "visible"
	right.style.opacity = "1" 
	right.style.width = "18vw"
	content.style.width = "0vw"
}
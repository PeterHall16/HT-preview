//Peter Hall
//18:14 25/11/2017
function picker(query) {
	return document.querySelector(query)
}

let main = picker('main')
let splash = picker('.splash')
let grid = picker('.grid')
let link = picker('.link')
let subtitle = picker('h1.subtitle')
let toggle = picker('.toggle')
let back = picker('.second')
let spotlightArticle = picker('div.splash article')
let spotlightArticleContainer = picker('div.splash div.article-container')
let content = picker('.page')
let unswipe = picker('.unswipe')
let swipe = document.querySelectorAll(".swipe.specificName")
let right = picker('.right')
let left = picker('header.left')
let tabSwipe = document.querySelectorAll(".tabSwipe.specialName")
let special = picker('.special')
let listOfFades = document.querySelectorAll('.HIDE')
let contact = picker('.contact')
let wholePage = picker('.wholePage')

//Events
link.addEventListener('click', spotlight)
link.addEventListener('touchstart', spotlight)

back.addEventListener('click', closeSpotlight)
back.addEventListener('touchstart', closeSpotlight)

unswipe.addEventListener('click', closePopup)
unswipe.addEventListener('touchstart', closePopup)

contact.addEventListener('click', openContact)
contact.addEventListener('touchstart', openContact)

//Main Pages
//Populated dynamically specific for equation.
var page = {}

// template for pages
var template = popupData.template

for(let buttonClick of swipe) {
	buttonClick.onclick = function(){
		generatePopup(buttonClick)
	}
}

function generatePopup(buttonClick) {
	var index = buttonClick.id

	console.log("Main" + index)
	page = popupData.popups[index]

	var html = Mustache.to_html(template, page)
	picker(".page").innerHTML = html

	waiter()
	showPopup()

	if (index == 'contact' || index == 'about') {
		hideBottom()
	}
}

var contactPage = {}
var contactTemplate = contactData.contactTemplate

function openContact() {
	console.log("Opening contact")
	contactPage = contactData.contactPages.contact

	var html = Mustache.to_html(contactTemplate, contactPage)
	picker(".page").innerHTML = html

	showPopup()
}





function showPopup() {
	content.style.width = "78vw"
	right.style.display = "none"
	grid.style.display = "none"
	special.style.opacity = "0"
	special.style.display = "none"
	wholePage.style.width = "12vw"
}

function closePopup() {
	content.style.width = "0vw"
	right.style.display = "flex"
	grid.style.display = "flex"
	wholePage.style.width = "90vw"

	setTimeout(()=>{
		special.style.display = "flex"
		special.style.opacity = "1"
		}, 200)
}

function spotlight() {
	splash.style.borderRadius = "0"
	splash.style.width = "100%"
	grid.style.width = "72vw"
	splash.style.height = "90vh"
	subtitle.style.opacity = "1"
	back.style.opacity = "1"
	back.style.visibility = "visible"
	spotlightArticle.style.opacity = "1"
	spotlightArticle.style.userSelect = "auto"
	spotlightArticleContainer.style.opacity = "1"
	spotlightArticleContainer.style.userSelect = "auto"

	right.style.opacity = "0"
	right.style.visibility = "hidden" 
	right.style.width = "0vw"

	// splash.style.border-radius = "0"
	listOfFades.forEach(fade => {
		fade.style.opacity = "0"
		fade.style.visibility = "hidden"
	})
}

function closeSpotlight() {
	splash.style.borderRadius = "50%"
	splash.style.width = "30em"
	grid.style.width = "54vw"
	splash.style.height = "30em"
	subtitle.style.opacity = "0"
	back.style.opacity = "0"
	back.style.visibility = "hidden"
	spotlightArticle.style.opacity = "0"
	spotlightArticle.style.userSelect = "none"
	spotlightArticleContainer.style.opacity = "0"
	spotlightArticleContainer.style.userSelect = "none"

	right.style.opacity = "1"
	right.style.visibility = "visible" 
	right.style.width = "18vw"
	// splash.style.border-radius = "0"
	listOfFades.forEach(fade => {
		fade.style.opacity = "1"
		fade.style.visibility = "visible"
	})
}
function picker(query) {
	return document.querySelector(query)
}

function waiter () {
	let open = document.querySelectorAll(".tabItem.specific")
	let belowTemplate = picker('div.belowTemplate')
	let bottom = picker('div.bottom')
	let top = picker('div.top')
	let takeover = picker('div.takeover')
	let wholePage = picker('div.wholePage')
	
	console.log(open)
	var article = {}

	var tabTemplate = tabData.tabTemplate

	for(let buttonClick of open) {
		buttonClick.onclick = function(){
			openArticle(buttonClick)
		}
	}
	open.forEach(item => {
		item.addEventListener("click", () => {
			openArticle(item)
		})
	})

	function openArticle(buttonClick) {
		var index = buttonClick.id
		console.log("success")

		console.log(index)
		article = tabData.tabs[index]

		var html = Mustache.to_html(tabTemplate, article)
		picker(".takeover").innerHTML = html

		showArticle()
	}
	//Fix this transition. Maybe add individual transitions
	//for left and right
	function showArticle() {
		console.log("shwoing")
		takeover.style.width = "90vw"
		picker('.p69').style.display = "none"
	}
}

function hideBottom() {
	picker('.p69').style.display = "none"
}
	
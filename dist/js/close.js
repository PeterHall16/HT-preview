function picker(query) {
	return document.querySelector(query)
}

let takeover = picker('div.takeover')


function closeArticle() {
		console.log("hiding some")
		takeover.style.width = "0vw"
		picker('.p69').style.display = "flex"
}

function closeAll() {
		console.log("hiding all")
		takeover.style.width = "0vw"
		picker('.p69').style.display = "flex"

		content.style.width = "0vw"
		right.style.display = "flex"
		grid.style.display = "flex"

		setTimeout(()=>{
		special.style.display = "flex"
		special.style.opacity = "1"
		}, 200)
}
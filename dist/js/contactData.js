let contactData = {
	"contactPages": {
		"contact": {
			id: "contact",
			title: "CONTACT",
		}
	},
	"contactTemplate": `
		<div class="content">
			<h1 class="title">{{title}}</h1>
			<div class="{{visibility}} flex-column">
			<div class="tenVH">
				<a class="contact pink" href="mailto:info@halltechnologies.co?subject=Site">info@halltechnologies.co</a>
				<a class="contact pink">937 846 4013</a>
			</div>
			<form>
				<div class="column">
					<input class="input" placeholder="Full Name" required></input>
					<input class="input" placeholder="Email" required></input>
					<input class="input" placeholder="Phone Number"></input>
				</div>
				<div class="column">
					<textarea class="input big" placeholder="Message" required></textarea>		
				</div>
			</form>
			<button>Submit</button>
			</div>
		</div>
	`
}
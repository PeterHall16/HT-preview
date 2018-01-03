var popupData = {
	"popups": {
		"portfolio": {
			"id": "Quadratic",
			"title": "Quadratic Equation",
			"input_a": "A",
			"input_b": "B",
			"input_c": "C",
			"inputID_a": "a",
			"inputID_b": "b",
			"inputID_c": "c",
			"visibility3": "hidden",
			"onclick": "quadratic_onClick()"
		},
	},
	"template": `
		<div class="card template">
			<h2>{{title}}</h2>
			<form name="form">
				<div class="row">
					<h4>{{input_a}}<sub>{{sub_1}}</sub></h4><input id="{{inputID_a}}" name="{{input_name_a}}">
				</div>
				<div class="row {{visibility1}}">
					<h4>{{input_b}}<sub>{{sub_2}}</sub></h4><input id="{{inputID_b}}" name="{{input_name_b}}">
				</div>
				<div class="row {{visibility2}}">
					<h4>{{input_c}}<sub>{{sub_3}}</sub></h4><input id="{{inputID_c}}" name="{{input_name_c}}">
				</div>
				<div class="row {{visibility3}}">
					<h4>{{input_d}}<sub>{{sub_4}}</sub></h4><input id="{{inputID_d}}" name="{{input_name_d}}">
				</div>
			</form>
			<button id="submit" onclick="{{onclick}}">Submit</button>
			<div class="answer" id="answer">	
			</div>
		</div>
	`
}
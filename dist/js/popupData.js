let popupData = {
	"popups": {
		"portfolio": {
			"id": "portfolio",
			"title": "WHAT WE'VE BUILT",
			"article1": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
			"tabs": {
				"p1": {
					"id": "p1",
					"title": "FRANKLIN CMS",
					"thumb": "n1Thumb"
				},
				"p2": {
					"id": "p2",
					"title": "CUBE WORLD",
					"thumb": "n2Thumb"
				},
				"p3": {
					"id": "p3",
					"title": "MATH",
					"thumb": "n3Thumb"
				},
				"p4": {
					"id": "p4",
					"title": "CHESS",
					"thumb": "n4Thumb"
				},
			},
			"visibility": "hidden",
		},
		"team": {
			"id": "team",
			"title": "WHO WE ARE",
			"article1": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
			"tabTitle": "Peter Hall",
			"tabs": {
				"p5": {
					"id": "p5",
					"title": "Daniel Oltmanns",
					"thumb": "n4Thumb"
				},
				"p6": {
					"id": "p6",
					"title": "Peter Hall",
					"thumb": "n6Thumb"
				},
				"p7": {
					"id": "p7",
					"title": "Matthew Hall",
					"thumb": "n7Thumb"
				},
				"p8": {
					"id": "p8",
					"title": "Ryan Wolf",
					"thumb": "n8Thumb"
				},
			},
			"visibility": "hidden",
		},
		"about": {
			"id": "about",
			"title": "ABOUT",
			"article1": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. ",
			"article2": "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
			"visibility": "hidden",
		}
	},
	"template": `
		
		<div class="belowTemplate">
		<!-- <div class="article"></div> -->
			<div class="top">
				<div class="content">
					<h1 class="title">{{title}}</h1>
					<article>{{article1}}</article>
					<article>{{article2}}</article>
					<article>{{article3}}</article>
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
			</div>

			<div class="bottom p69">
				<div class="tabItem specific {{tabs.p1.thumb}} {{tabs.p5.thumb}}" id="{{tabs.p1.id}}">
					<h1 class="tabItem">{{tabs.p1.title}}{{tabs.p5.title}}</h1>
				</div> 
				<div class="tabItem specific {{tabs.p2.thumb}} {{tabs.p6.thumb}}" id="{{tabs.p2.id}}">
					<h1 class="tabItem">{{tabs.p2.title}}{{tabs.p6.title}}</h1>
				</div> 
				<div class="tabItem specific {{tabs.p3.thumb}} {{tabs.p7.thumb}}" id="{{tabs.p3.id}}">
					<h1 class="tabItem">{{tabs.p3.title}}{{tabs.p7.title}}</h1>
				</div> 
				<div class="tabItem specific {{tabs.p4.thumb}} {{tabs.p8.thumb}}" id="{{tabs.p4.id}}">
					<h1 class="tabItem">{{tabs.p4.title}}{{tabs.p8.title}}</h1>
				</div>
			</div>
		</div>
	
	`
}

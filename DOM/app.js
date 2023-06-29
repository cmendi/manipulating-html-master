// █▀▀ █▀█ █░█ ▄▀█ █░░ █▀▀ █▄░█ █▀▀ █▀▀   █▀█ █░█ █░░ █▀▀ █▀ █
// █▄▄ █▄█ ▀▄▀ █▀█ █▄▄ ██▄ █░▀█ █▄▄ ██▄   █▀▄ █▄█ █▄▄ ██▄ ▄█ ▄

document.addEventListener("DOMContentLoaded", function () {
	// ### OBJECTIVE ONE START ###
	// Create variable that has the value of button element
	let btn = document.createElement("button");
	//Create variable that creates text for the button
	let btnText = document.createTextNode("Click Me!");
	// Add text to the button
	btn.appendChild(btnText);
	// Add button to the body of the html
	document.body.appendChild(btn);

	// Add an event listener to the button for when its clicked it displays an alert with a nice message.
	btn.addEventListener("click", function () {
		// console.log("working");
		alert("Covalence Rocks!");
	});
	// ### OBJECTIVE ONE END ###

	// ### OBJECTIVE TWO START ###
	// Create a variable that stores the value of the classname of the button element in the HTML
	let btnSubmit = document.getElementsByClassName("btn-submit")[0];

	// Create an event listener that listens for a click on the submit button then displays an alert with the text that was entered into the input field.
	btnSubmit.addEventListener("click", function () {
		let inputField = document.querySelector("input[type=text]");
		let inputValue = inputField.value;
		alert(inputValue);
	});
	// ### OBJECTIVE TWO END ###

	// ### OBJECTIVE THREE START ###
	// Create a variable that stores the div element
	let div = document.getElementsByClassName("div")[0];

	// Create an event listener for when the mouse is over the div it sets a background color
	div.addEventListener("mouseover", function () {
		div.style.backgroundColor = "green";
	});

	// Event listener for when the mouse moves out of the element then changes back to original color
	div.addEventListener("mouseout", function () {
		div.style.backgroundColor = "black";
		div.style.cursor = "pointer";
	});
	// ### OBJECTIVE END THREE ###

	// ### OBJECTIVE FOUR START ###
	// Create a variable that stores the value of creating a paragraph element
	let para = document.createElement("p");
	// Create text that will go into the paragraph
	let paraText = document.createTextNode(
		"Nature is a remarkable and awe-inspiring entity that never fails to captivate our senses. From the majestic mountains that pierce the sky to the tranquil lakes that mirror the surrounding beauty, natures splendor is truly unparalleled. The vibrant hues of a sunset painting the horizon with a kaleidoscope of colors, the gentle caress of a breeze whispering through the trees, and the melodious symphony of birdsong that fills the air—all these elements intertwine to create a harmonious tapestry. Exploring the vast expanse of nature allows us to reconnect with our inner selves, providing solace and serenity amidst the chaos of modern life. Whether its the grandeur of a cascading waterfall or the delicate petals of a blooming flower, each facet of nature holds its own unique charm. It reminds us of the intricate interconnectedness of all living things and instills in us a profound sense of wonder and reverence. Nature is a constant source of inspiration, inviting us to pause, reflect, and appreciate the extraordinary world we are privileged to inhabit."
	);

	// Add text to the paragraph
	para.appendChild(paraText);
	// Add paragraph to the body
	document.body.appendChild(para);

	// Create an array with 5 different colors stored in a variable
	let colors = ["#8C3D8E", "#F9A825", "#2E7D32", "#1E88E5", "#FF4081"];

	// Create an event listner to listen for a click and it will change the color of the paragraph to a random color.
	para.addEventListener("click", function () {
		let randomColor = colors[Math.floor(Math.random() * colors.length)];
		para.style.color = randomColor;
	});
	// ### OBJECTIVE FOUR END ###

	// ### OBJECTIVE FIVE START ###
	// Create a button to a variable
	let myBtn = document.createElement("button");
	// Create button text to a variable
	let myBtnText = document.createTextNode("My Name");
	// Add  button text to button
	myBtn.appendChild(myBtnText);
	// Add button to the document body
	document.body.appendChild(myBtn);
	// Create an empty div to a variable
	let myDiv = document.createElement("div");
	// Add dive to the document body
	document.body.appendChild(myDiv);
	// Create an event listener for when the button is clicked add a span that contains my name to the empty div.
	myBtn.addEventListener("click", function () {
		// console.log("working");
		// Create span element stored in a variable
		let mySpan = document.createElement("span");
		// Add text to the span with my name
		let mySpanText = document.createTextNode("Chris Mendenhall");
		// Add text to span
		mySpan.appendChild(mySpanText);
		// Add span to the div
		myDiv.appendChild(mySpan);
	});
	// ### OBJECTIVE FIVE END ###

	// ──────▄▀▄─────▄▀▄
	// ─────▄█░░▀▀▀▀▀░░█▄
	// ─▄▄──█░░░░░░░░░░░█──▄▄
	// █▄▄█─█░░▀░░┬░░▀░░█─█▄▄█
	// ### OBJECTIVE SIX START ###
	// Create an array that contains 10 of my friends names and store that in a variable.
	let myFriends = [
		"Jack",
		"Freddie",
		"Sean",
		"Valerie",
		"Kyle",
		"Clay",
		"Mom",
		"Dad",
		"Jordy",
		"Myles",
	];
	// Target the button in the HTML and set it to a variable
	let btnFriends = document.getElementsByClassName("my-friends")[0];
	// Create an event listener to listen for when the button is clicked
	btnFriends.addEventListener("click", function () {
		// console.log("working");
		// Create a ul and save it to a variable
		let friendsUl = document.createElement("ul");
		// Create a for loop that loops through friends array
		for (let i = 0; i < myFriends.length; i++) {
			// console.log(myFriends[i]);
			// Create li element and store it in a variable
			let friendsLi = document.createElement("li");
			// Create a variable with the value of the friends erray
			let friends = document.createTextNode(myFriends[i]);
			// Add friends the li element
			friendsLi.appendChild(friends);
			// Add li to ul
			friendsUl.appendChild(friendsLi);
			// Add ul to document body
			document.body.appendChild(friendsUl);
		}
	});
	// ### OBJECTIVE SIX END ###
});

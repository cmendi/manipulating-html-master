$(document).ready(function () {
	// ### OBJECTIVE ONE START ###
	// Create a variable that stores a button element
	let btnOne = $('<button class="btn-one">Click Me</button>');
	// Add button element to the body of the page.
	$("body").append(btnOne);
	// Create event listener to listen for a click
	$(btnOne).click(function () {
		// console.log("working");
		// Create an alert with a string
		alert("Covalence Rocks");
	});
	// ### OBJECTIVE ONE END ###

	// ### OBJECTIVE TWO START ###
	// Target the button class and a click event
	$(".btn-two").click(function () {
		// console.log("working");
		// Create a varaible and target the input element and the value
		let inputVal = $("input").val();
		// Create an alert with the input value
		alert(inputVal);
	});
	// ### OBJECTIVE TWO END ###

	// ### OBJECTIVE THREE START ###
	// Target the div then create an event listener to listen for a mouse hover.
	$(".div-one").mouseover(function () {
		// console.log("working");
		// Change the color of the background
		$(".div-one").css("background-color", "green");
	});
	// Target the div and create a event listenr to listen for the mouse to leave and change the color back to original color
	$(".div-one").mouseout(function () {
		// console.log("working");
		$(".div-one").css("background-color", "black");
	});
	// ### OBJECTIVE THREE END ###

	// ### OBJECTIVE FOUR START ###
	// Create a paragraph and set it to a variable
	let paraOne = $(
		"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus imperdiet nulla malesuada pellentesque elit eget. Ac orci phasellus egestas tellus rutrum tellus pellentesque. Enim neque volutpat ac tincidunt vitae semper. Mi tempus imperdiet nulla malesuada. Commodo odio aenean sed adipiscing diam donec adipiscing. Faucibus vitae aliquet nec ullamcorper sit amet. Eu augue ut lectus arcu bibendum. Rhoncus urna neque viverra justo. Quis viverra nibh cras pulvinar. Lectus magna fringilla urna porttitor. Non sodales neque sodales ut etiam sit.</p>"
	);
	$("body").append(paraOne);
	// Create a variable that stores an array of random colors
	let colors = ["#8C3D8E", "#F9A825", "#2E7D32", "#1E88E5", "#FF4081"];
	// Create an event listener that listens for a click on the paragraph
	$(paraOne).click(function () {
		// Switch through random colors and set it to a variable
		let randomColors = colors[Math.floor(Math.random() * colors.length)];
		// Change the paragraph color to red
		$(paraOne).css("color", randomColors);
	});
	// ### OBJECTIVE FOUR END ###

	// ### OBJECTIVE FIVE START ###
	// Create a button with a class and store it to a variable
	let btnFour = $("<button>My Name</button>");
	// Create an empty div with a class and store it in a variable
	let emptyDiv = $("<div></div>");
	// Add the button to the body
	$("body").append(btnFour);
	// event listener when button is clicked
	$(btnFour).click(function () {
		// console.log("working");
		// Add the div to the DOM
		$("body").append(emptyDiv);
		// Create a span that has my name and save it to a variable
		let span = $("<span>Chris Mendenhall</span>");
		// Add the span to the div
		$(emptyDiv).append(span);
	});
	// ### OBJECTIVE FIVE END ###

	// ### OBJECTIVE SIX START ###
	// Create an array with all my friends
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
	// Target the button and add an Event listener for when the button is clicked
	$(".btn-six").click(function () {
		// console.log("working");
		// Create a for loop for friends array
		for (let i = 0; i < myFriends.length; i++) {
			// Create an li element and store it to a variable
			let liSix = $("<li></li>");
			// Add friends array to li
			// $("li").append(myFriends[i]);
			$(liSix).text(myFriends[i]);
			// Add li to ul
			$(".ul-six").append(liSix);
		}
	});
	// ### OBJECTIVE SIX END ###
});

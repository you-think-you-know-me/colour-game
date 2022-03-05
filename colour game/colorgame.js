var numberOfSquares = 6;
var colors = [];
var pickedColor = "";
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
	setUpModeButtons();
	setUpSquares();
	reset();
}


function setUpSquares(){

	for(var i=0; i< squares.length; i++){
		
		//add click listener to squares
		squares[i].addEventListener("click", function(){
			//grab color of clicked square
			var clickedColor = this.style.background;
			//compare color to pickedColor
			if(clickedColor === pickedColor){
				messageDisplay.textContent = "Correct";
				resetButton.textContent = "Play Again";
				changeColors(clickedColor);
				h1.style.background = clickedColor;
			}else{
				this.style.background = "#232323";
				messageDisplay.textContent = "Try again";
			}
		});
	}
}


function setUpModeButtons(){
	//mode buttons event listeners
	for(let i = 0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy"? numberOfSquares = 3:numberOfSquares = 6;
			reset();
		});
	}
}

function reset(){
	colors = generateRandomColors(numberOfSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change color display to match picked color
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";
	//change colors of squuares
	for(var i=0; i< squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
		}else{
			squares[i].style.display = "none";
		}
	};
	h1.style.background = "steelblue";
}


resetButton.addEventListener("click", function(){
	reset();
})


function changeColors(x){
	//loop through all squares
	for(let i = 0; i < squares.length; i++){
		//change each color to match given color
		squares[i].style.background = x;
	}
}

function pickColor(){
	var random = Math.floor(Math.random()*colors.length);
	return colors[random]
}

function generateRandomColors(num){
	//make an array
	var arr = []
	//repeat num times
	for(let i = 0; i < num; i++){
		arr.push(randomColor());
	}

	//return that array
	return arr;
}

function randomColor(){
	//pick a red from 0-255
	 var r = Math.floor(Math.random() * 256);
	//pick a grren from 0-255
	var g = Math.floor(Math.random() * 256);
	//pick a blue from 0-255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")"
}
var colors = generateRandomColors(6);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message"); 
var toph1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");
var numSquares = 6;

init();

function init(){
	//mode buttons events
	setupModeButton();
	setupSquares();
	displaySquares(numSquares);
}

function setupModeButton(){
	for(var i = 0 ; i < modeButtons.length ; i++){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");

			if(this.textContent === "Easy"){
				numSquares = 3;
			}else{
				numSquares = 6;
			}
			displaySquares(numSquares);
		});
	}
}

function setupSquares(){
	resetButton.addEventListener("click", function(){
		displaySquares(numSquares);
		});
	for(var i = 0 ; i < squares.length ; i++){
		//add click listeners to squares
		squares[i].addEventListener("click", function(){
			//grab color of picked square
			var clickedColor = this.style.background
			//compare color to picked color
			if(clickedColor === pickedColor){
				messageDisplay.textContent = "Correct";
				changeColors(clickedColor);
				resetButton.textContent = "Play Again?"
			}
			else{
				this.style.background = "#232323";
				messageDisplay.textContent = "Try Again";
			}
		});
	}
}
//function to change the color of all squares on correct guess
function changeColors(color) {
	//loop through all squares
	for(var i = 0 ; i < squares.length; i++)
	{
		squares[i].style.background = color;
	}
	//change each color to match given color
	toph1.style.background = color;
}

//function to pick the random color
function pickColor(){
	var random = Math.floor(Math.random()*colors.length);
	return colors[random];
}

//function to generate array of random color
function generateRandomColors(num){
	//make an array
	var arr = [];
	//add random color to array
	for(var i = 0 ; i < num ; i++){
		//get random color and push into arr
		arr.push(randomColor());
	}
	//return that array
	return arr;
}

//function to generate random color
function randomColor(){
	//pick a "red" from 0 - 255
	var r = Math.floor(Math.random()*256);
	//pick a "green" from 0 - 255
	var g = Math.floor(Math.random()*256);
	//pick a "blue" from 0 - 255
	var b = Math.floor(Math.random()*256);
	return "rgb("+ r +", "+ g +", "+ b +")";
}

function displaySquares(numSquares){

	messageDisplay.textContent = "";
	colors = generateRandomColors(numSquares);
	//pick random color 
	pickedColor = pickColor();
	// change display to picked color
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors";
	//changing the color of sqaures
	for(var i = 0 ; i < squares.length ; i++)
	{
		if(colors[i]){
			squares[i].style.background = colors[i];
			squares[i].style.display = "block";
		}else{
			squares[i].style.display = "none";
		}
	}
	toph1.style.background = "steelblue";
}

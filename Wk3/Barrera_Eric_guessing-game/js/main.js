/**
 * GUESSING GAME:
 *
 * Created By: Eric Barrera	
 * Date: 3/19/2014
 * 
 * GUESSING GAME
 */

//Game variables
(function () {
//changed to Math.floor insead of keeping Math.round	
var guess = Math.floor(Math.random()*10+1);
console.log(guess);
var guesses = 0;

document.querySelector("button").onclick = function guessGame(){
	//if guess is less than 3 
		if(guesses<3){
			
			var num = document.querySelector("#input").value;
			
			guesses++;

			if(num == ""){
				document.getElementById("output").innerHTML = "Guess my magic number between 1-10 <br/> Guess "+guesses+" - You didn't guess anything!!!!";
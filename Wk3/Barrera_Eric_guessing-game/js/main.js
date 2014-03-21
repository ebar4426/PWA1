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


//Duel Fight Game
//Name - Eric Barrera 
// Date: 03/05/2014
//assignment 1
//part one

//start function
(function(){

    console.log("FIGHT!!!");//for the console print out 

    var playerOneName = "Spiderman";//player one name
    var playerTwoName = "Batman";//player two name
  
    var player1Damage = 20;//player health
    var player2Damage = 20;//player 2 health
    
	var playerOneHealth = 100;//player one health
    var playerTwoHealth = 100;//player two health
    
	var round = 0;//initiate round
	
	function fight(){
		alert(playerOneName + ":" + playerOneHealth + " *START* " + playerTwoName + ":" + playerTwoHealth);
		for (var i = 0; i < 10; i++)
		{
			//random form is = Math.floor(math.random() * (max - min) + min)
			var minDamage1 = player1Damage * .5;
			var minDamage2 = player2Damage * .5;
			var f1 = Math.floor(Math.random() * (player1Damage - minDamage1) + minDamage1);
			var f2 = Math.floor(Math.random() * (player2Damage - minDamage2) + minDamage2);
	}
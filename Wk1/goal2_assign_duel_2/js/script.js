//Duel Fight Game
//Name - Eric Barrera 
// Date: 03/05/2014
//assignment 1
//part one

//start function
(function(){

    console.log("FIGHT!!!");//for the console print out 
	var fighterOne = ["Spiderman", 20, 100];
	var fighterTwo = ["Batman", 20, 100];
    
	var round = 0;//initiate round
	
	function fight(){
		alert(fighterOne[0] + ":" + fighterOne[2] + " *START* " + fighterTwo[0] + ":" + fighterTwo[2]);
		for (var i = 0; i < 10; i++)
		{
			//random formula is = Math.floor(math.random() * (max - min) + min)
			var minDamage1 = fighterOne[1] * .5;
			var minDamage2 = fighterTwo[1] * .5;
			var f1 = Math.floor(Math.random() * (fighterOne[1] - minDamage1) + minDamage1);
			var f2 = Math.floor(Math.random() * (fighterTwo[1] - minDamage2) + minDamage2);
			
			fighterOne[2] -= f1;//how damage gets taken away
            fighterTwo[2] -= f2;//how damage gets taken away
            
            console.log(fighterOne[0] + ": " + fighterOne[2] + " " + fighterTwo[0] + ":" + fighterTwo[2]);
            
            var result = winnerCheck();//check for a winner if none code continues 
            console.log(result);
            if (result==="no winner")
            {
                round++;
                alert(fighterOne[0]+":"+fighterOne[2]+"  *ROUND "+round+" OVER"+"*  "+fighterTwo[0]+":"+fighterTwo[2]);

            } else{
                alert(result);
                break;
            };

          };
    };

    function winnerCheck(){
        var result = "no winner";
        if (fighterOne[2] < 1 && fighterTwo[2] < 1){
            result = "You Both Die";
        } else if(fighterOne[2] < 1){
            result = fighterTwo[0] + " WINS!!!";    
        } else if (fighterTwo[2] < 1){
            result = fighterOne[0] + " WINS!!!";
        };
       return result;
    };
    //program starts below here_____________________________
	fight();
})();

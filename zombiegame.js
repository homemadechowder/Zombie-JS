// INSTRUCTIONS: Build a command-line based zombie fighting game. 
// =========================================================================================================

// In this game, you and a zombie will each be given a certain amount of health. (Perhaps: You 70, Zombie 15).

// For each round, you will be asked to guess a random number between 1 and 5.
// If your guess matches the random number of the Zombie -- you inflict a random amount of damage between 1 and 5. 
// If you guess does not match the random number of the Zombie -- the Zombie inflicts a random amount of damage to you between 1 and 5.
// Each round the zombie is given a new random number and you must guess again. 

// The game ends when you or the zombie gets to 0 health. 

// Note: You should use the inquirer package to take in user commands.
// Major Warning: inquirer's prompt function is "asynchronous", which means that the majority of your game logic will need to be inside the .then() function for your prompt. 

// ===========================================================================================================
var inquirer = require("inquirer");
var myHealth = 50;
var zHealth = 50;

var myArr = [
    {
        type: "list",
        message: "Chooser a number to roll against the zombie",
        choices: ["1", "2", "3", "4", "5"],
        name: "num"
    }
]




askQuestion(myArr);

function askQuestion(arr){
    inquirer
    .prompt(arr)
    .then(function(inquirerResponse) {
        
        //for numbers random 1-5
        var zRoll = Math.floor((Math.random()*5)+1);
        var zAttack = Math.floor((Math.random()*10)+1); 


        
        var myRoll = parseInt(inquirerResponse.num);
        var myAttack = Math.floor((Math.random()*10)+1);

        console.log(myRoll);
        console.log("You rolled " + myRoll + " and the Zombie-Rolled "+ zRoll);

        if (myRoll === zRoll){
            console.log("No damage inflicted");
        }
        else if (myRoll > zRoll){
            zHealth -= myAttack;
            
            console.log("You dealt " + myAttack + " damage to the zombie, the zombie has "+zHealth+" HP left.");
        }
        else if (zRoll > myRoll){
            myHealth -= zAttack;
            console.log("The zombie dealt " + zAttack + " damage to you, you have "+myHealth+" HP left.");
        }

        if (zHealth <= 0){
            console.log("************************");
            console.log("You've beaten the zombie");
            console.log("************************");
        }
        else if (myHealth <= 0){
            console.log("************************");
            console.log("You've been slain");
            console.log("************************");
        }
        else
        {
        askQuestion(arr);
        }
    });


}

//BASE GAME VARIABLES

//create 3 variables to hold ship location data
var location1 = 3;
var location2 = 4;
var location3 = 5;

//variable to track user input
var userGuess = 0;

//variable to track the number of successful hits 
var numOfHits = 0;

//variable to track the total number of user guesses
var totalGuesses = 0;

//variable to track whether the ship has been sunk
var isSunk = false;

//create a stats message - return this to the user at the end of the game, so they can view their stats
var userStats = "You took " + totalGuesses + " guesses to sink the battleship. Your shooting accuracy was " + (3/totalGuesses);

//use a while loop to start the game, and then keep running until the ship has been sunk
while(isSunk == false){
    //ask user to enter a number from 0 to 6
    //assign the input to the userGuess variable
    userGuess = prompt("Ready, Aim, ...Fire! (enter a number 0-6):");

    //verify user input is valid
    if (userGuess < 0 || userGuess > 6){
        //give an error to let the user know the input must be a number between 0 and 6
        alert("Please Enter a Number Between 0 and 6!");
    }
    else {
        //increment the totalGuesses variable by 1
        totalGuesses++;

        //test to see if the user input matches locations 1,2, or 3
        if (userGuess == location1 || userGuess == location2 || userGuess == location3){
            //tell the user they've made a hit
            alert("Hit!");
            //if the input matches one of the locations, add one to the hit variable
            numOfHits++;

            //if the number of hits is 3, tell the user that the ship has been sunk
            if (numOfHits == 3){
                //set isSunk to true
                isSunk = true;
                //return the sunk message to the user
                alert("You Sank My Battleship!");
            }
        }
        //otherwise, tell the user that they missed
        else{
            alert("Miss.");
        }
    }
}

//return the above userStats variable to the screen, so the user can view their game stats
alert(userStats);
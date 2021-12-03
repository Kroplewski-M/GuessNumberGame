let numberOfTries = 0;
let casheTries = numberOfTries;
let gameIsDone = false;
let randomNumber = Math.floor(Math.random()*100);
if (randomNumber === 0){
    randomNumber +=1;
}
console.log("Random Number is: " + randomNumber);

let  guess;

function IsGameFinished(){
    if(gameIsDone == true)
    {
        let GameDoneTag = `
        <div id="finished">
        <h1 id="GameFinished">Congrats!! You got it right!</h1>
        <button onclick="restartGame()" id="doneButton">Restart Game!</button>
        </div>`


        console.log("GAME IS DONE!!!");
        let gameDone = document.getElementById('insert');
        gameDone.insertAdjacentHTML('afterbegin',GameDoneTag);
    }
}

function restartGame(){
    location.reload();
}

//CLEAR POP UP
function clearHTML(){
    var remove = document.getElementById("temp").remove();
}
//ADJUSTS DISPLAY OF NUMBER OF TRIES
function DisplayNumberOfTries(){
    if(casheTries < numberOfTries)
    {
        var remove = document.getElementById("tries").remove();   
        let displayTries = document.getElementById('rules');
        displayTries.insertAdjacentHTML('afterend', '<p id="tries">Number of Tries: '+numberOfTries + '</p>');
        casheTries = numberOfTries;
    }
    return;
}
//DISPLAYS TRIES WHEN YOU FIRST LOAD IN
let displayTries = document.getElementById('rules');
displayTries.insertAdjacentHTML('afterend', '<p id="tries">Number of Tries: '+numberOfTries + '</p>');

//LOGIC OF THE GAME
function getGuess(){
   
    guess = document.getElementById('gNumber').value;
    console.log(guess);

    //TO DO: ADD TIMER TO REMOVE HTML!
    if(guess > randomNumber){
        //alert("Too High!");
        let responce = document.getElementById('insert');
        responce.insertAdjacentHTML('afterbegin', '<h1 id="temp">Too High!</h1>');
    }
    else if(guess < randomNumber){
        //alert("Too Low!");
        let responce = document.getElementById('insert');
        responce.insertAdjacentHTML('afterbegin', '<h1 id="temp">Too Low!</h1>');
        
    }
    else if(guess == randomNumber){
        //alert("Congrats you got it right!");
        gameIsDone = true;
        IsGameFinished();
    }
    numberOfTries++;
    DisplayNumberOfTries();
    setTimeout(clearHTML,2000);
}

//CHANGE CONGRATS TO DIFF IF TO MAKE IT GREEN 


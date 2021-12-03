let numberOfTries = 0;
let casheTries = numberOfTries;
var numberofItems =0;
let gameIsDone = false;
let randomNumber = Math.floor(Math.random()*100);
if (randomNumber === 0){
    randomNumber +=1;
}
console.log("Random Number is: " + randomNumber);

let  guess;

//ONCE PLAYER GETS CORRECT ANSWER
function IsGameFinished(){
    if(gameIsDone == true)
    {
       
        if(numberofItems == 0)
        {
        numberOfTries++;
        let soundeffect = new Audio("correct.mp3");
        soundeffect.play();
        let GameDoneTag = `
        <div id="finished">
        <h1 id="GameFinished">Congrats!! You got it right!</h1>
        <button onclick="restartGame()" id="doneButton">Restart Game!</button>
        </div>`

        console.log("GAME IS DONE!!!");
        let gameDone = document.getElementById('insert');
        gameDone.insertAdjacentHTML('afterbegin',GameDoneTag);
        numberofItems++;
        }
        else
        {
            return;
        }
    }
}
//IF PLAYERS ANSWER IS INCORRECT
function incorrectAnswer(){
    numberOfTries++;
    let soundEffect = new Audio("incorrect.mp3");
    soundEffect.play();

    if(guess > randomNumber){
        let responce = document.getElementById('insert');
        responce.insertAdjacentHTML('afterbegin', '<h1 id="temp">Too High!</h1>');
    }
    else if(guess < randomNumber){
        //alert("Too Low!");
        let responce = document.getElementById('insert');
        responce.insertAdjacentHTML('afterbegin', '<h1 id="temp">Too Low!</h1>');
        
    }
}

//RELOADS WEBSITE TO RESTART THE GAME --SETS EVERYTHING TO DEFAULT
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

    if(guess != randomNumber){
        incorrectAnswer();
    }
    else if(guess == randomNumber){
        gameIsDone = true;
        IsGameFinished();
    }
    DisplayNumberOfTries();
    setTimeout(clearHTML,2000);
}





let randomNumber = Math.floor(Math.random()*100);
if (randomNumber === 0){
    randomNumber +=1;
}
console.log("Random Number is: " + randomNumber);

let  guess;

//CLEAR POP UP
function clearHTML(){
    var remove = document.getElementById("temp").remove();
}

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
        let responce = document.getElementById('insert');
        responce.insertAdjacentHTML('afterbegin', '<h1 id="temp">Congrats!! You got it right!</h1>');

    }
    setTimeout(clearHTML,2000);
}


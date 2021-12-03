
let randomNumber = Math.floor(Math.random()*100);
if (randomNumber === 0){
    randomNumber +=1;
}
console.log("Random Number is: " + randomNumber);

let  guess;

function getGuess(){
    guess = document.getElementById('gNumber').value;
    console.log(guess);

    //TO DO: ADD TIMER TO REMOVE HTML!
    if(guess > randomNumber){
        //alert("Too High!");
        let responce = document.getElementById('insert');
        responce.insertAdjacentHTML('afterbegin', '<h1>Too High</h1>');
    }
    else if(guess < randomNumber){
        alert("Too Low!");
    }
    else if(guess == randomNumber){
        alert("Congrats you got it right!");
    }
}

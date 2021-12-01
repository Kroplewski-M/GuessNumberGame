
let randomNumber = Math.floor(Math.random()*100);
if (randomNumber === 0){
    randomNumber +=1;
}
console.log("Random Number is: " + randomNumber);

let  guess;

function getGuess(){
    guess = document.getElementById("gNumber").value;
    console.log(guess);

    if(guess > randomNumber){
        alert("Too High!");
    }
    else if(guess < randomNumber){
        alert("Too Low!");
    }
    else if(guess == randomNumber){
        alert("Congrats you got it right!");
    }
}

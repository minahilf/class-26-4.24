let guessNum = Math.random()*2
let roundNum = Math.floor(guessNum)
console.log(roundNum);

if(roundNum === 0){
    console.log("WIN");
} else {
    console.log("Lose");
} 
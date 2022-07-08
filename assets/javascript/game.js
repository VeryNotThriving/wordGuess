var answers = [
    {q:"_ _ _ _ _",
    q1:"_", q2:"_", q3:"_", q4:"_", q5:"_", 
    a1:"a", a2:"p", a3:"p", a4:"l", a5:"e"},
    {q:"_ _ _ _ _ _",
    q1:"_", q2:"_", q3:"_", q4:"_", q5:"_", q6:"_",
    a1:"b", a2:"l", a3:"o", a4:"n", a5:"d", a6:"e"}, 
    {q:"_ _ _ _",
    q1:"_", q2:"_", q3:"_", q4:"_",
    a1:"r", a2:"a", a3:"c", a4:"e"}
]
var score = 0;
var question=0;
var questionIndex = 0;
var wins = 0;
var guessesRemain = 10;
var lettersGuessed = []
var directionsText = document.getElementById("directions-text");
var numRemaingText = document.getElementById("numRemaining-text");
var questionText = document.getElementById("question-text");
var lettersGuessedText = document.getElementById("lettersGuessed-text")



function renderQuestion() {
if (questionIndex <= (questions.length - 1)) {
    document.querySelector("#question-text").innerHTML = questions[questionIndex].q;
}
else {
    document.querySelector("#question-text").innerHTML = "Game Over!";
    document.querySelector("#score").innerHTML = "Final Score: " + score + " out of " + questions.length;
}
}

function updateScore() {
    document.querySelector("#score").innerHTML = "Score: " + score;
}

renderQuestion();
updateScore();

document.onkeyup = function(event) {
var userGuess = event.key;

if (questionIndex === questions.length) {
return;
}

console.log(userGuess);
directionsText.textContent = "";



if (questions[i].includes(userGuess)){
    alert("included")
    answers.q[question].push(userGuess)
    question++
    
}
else {
    alert("keep trying")
}

numRemaingText.textContent = "Guesses Left: "+guessesRemain;
lettersGuessedText.textContent = "Letters Already Guessed: "+lettersGuessed[0];
renderQuestion();
}
/* jshint esversion: 8 */
const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const questionAreaElement = document.getElementById("question-area");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");

let shuffledQuestions;
let currentQuestionIndex;
let correctAnswer = 0;
let wrongAnswer = 0;

//let nameBox = document.getElementById("nameBox");
//const question = document.querySelector("#question");
//let nameBox.innerHTML = document.getElementById("name-box");

startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", () => {
    currentQuestionIndex++
    setNewQuestion()
  })




//const scorePoints = 100;
//const maxQuestions = 4;

function startGame() {
    startButton.classList.add("hide");
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    questionAreaElement.classList.remove("hide");
    setNewQuestion();
}

/* function changeText(nameBox){
    var element = document.getElementById("name-box");
    element.innerHTML = "Hello World!";
}
*/
function setNewQuestion() {
    resetQuestions();
    if (currentQuestionIndex <= 9) {
        currentQuestionIndex++;
        showQuestion(shuffledQuestions[currentQuestionIndex]);
    } else {
        endGame();
    }
    console.log = function(message) {
        document.getElementById("correct").innerHTML = message;
    };
    console.log('correct answers: ' + correctAnswer);
    
    console.log = function(message) {
        document.getElementById("wrong").innerHTML = message;
    };
    console.log('wrong answers: ' + wrongAnswer);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    question.choices.forEach(answer => {
        let button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn");
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
        answerButtonsElement.appendChild(button);
    })
}

function resetQuestions() {
    nextButton.classList.add("hide");
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(choice) {
    const correctButton = choice.target;
    const correct = correctButton.dataset.correct;
    setStatusClass(document.body, correct);
    // reuseable array converted
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
    });
    if (shuffledQuestions.length > currentQuestionIndex +1) {
        nextButton.classList.remove("hide");
    } else {
        startButton.innerText = "Restart";
        startButton.classList.remove("hide");
    }

    if (correct) {
        correctAnswer++;
    } else {
        wrongAnswer++;
    }
    
}

function setStatusClass(element, correct) {
    //clear the set status of the element
    clearStatusClass(element);
    if (correct) {
        element.classList.add("correct");
    } else {
        element.classList.add("wrong");
    }
}

function clearStatusClass(element) {
    element.classList.remove("correct");
    element.classList.remove("wrong");
}

function endGame() {
    questionItem.innerText = `Quiz Complete: correct = ${correctAnswer}, wrong = ${wrongAnswer}`;
}
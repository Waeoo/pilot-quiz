/* jshint esversion: 8 */

const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");

const questionAreaElement = document.getElementById("question-area");

//const question = document.querySelector("#question");

const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");

let shuffledQuestions;
let currentQuestionIndex;

startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", () => {
    currentQuestionIndex++
    setNewQuestion()
  })




//const scorePoints = 100;
//const maxQuestions = 4;

function startGame() {
    startButton.classList.add("hide");
    //let randomNumber = Math.floor(Math.random() * 25) + 1;
    //questionCounter = 0;
    //score = 0;
    //availableQuestions = questions.length;
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    questionAreaElement.classList.remove("hide");
    setNewQuestion();
}

function setNewQuestion() {
    resetQuestions();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
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
    })
    if (shuffledQuestions.length > currentQuestionIndex +1) {
        nextButton.classList.remove("hide");
    } else {
        startButton.innerText = "Restart"
        startButton.classList.remove("hide");
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

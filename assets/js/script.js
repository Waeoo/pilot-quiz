const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");

const questionAreaElement = document.getElementById("question-area");

startButton.addEventListener("click", startGame);

const question = document.querySelector("#question");

const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");

let shuffledQuestions;
let currentQuestionIndex;



//const scorePoints = 100;
//const maxQuestions = 4;

function startGame() {

    startButton.classList.add("hide");
    questionAreaElement.classList.remove("hide");
    //let randomNumber = Math.floor(Math.random() * 25) + 1;
    //questionCounter = 0;
    //score = 0;
    availableQuestions = questions.length;
    shuffledQuestions = questions.sort(() => Math.floor(Math.random() * 25) + 1);
    currentQuestionIndex = 0;
    setNewQuestion();
}

function setNewQuestion() {
    resetQuestions()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement("button");
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
        answerButtonsElement.removeChild;
        
    }
}

function selectAnswer(e) {

}

const questions = [
    {
        question: "What does CPL mean?",
        answers: [
            { text: "Commercial Pilot License", correct: true},
            { text: "Can Pilots Land?", correct: false},
            { text: "Clearance Prior Landing", correct: false},
            { text: "Caution Parachute Location", correct: false},
        ]        
    },
]
/**     
    {
        question: "In which of the following weather conditions can you expect the lowest visibility?",
        choice1: "Haze",
        choice2: "Mist?",
        choice3: "Fog",
        choice4: "Moderate rain",
        answer: "Fog",
    },
    {
        question: "You cannot become an airline pilot if your height is less than 1.575 metres.",
        choice1: "True",
        choice2: "False",
        choice3: "Depends on which country",
        choice4: "Depends on which specific aircraft and type license",
        answer: "True",
    },
    {
        question: "Alpha, Bravo, Charlie, Delta, Echo, ...",
        choice1: "Fokker",
        choice2: "Foxtrot",
        choice3: "Facebook",
        choice4: "Flight",
        answer: "Foxtrot",
    },
    {
        question: "How long does it take to train to be a pilot at a Flight Academy?",
        choice1: "4 years",
        choice2: "22 months",
        choice3: "16 months",
        choice4: "3 years",
        answer: "22 months",
    },
    {
        question: "What is the collective name of the 6 instruments that allow you to fly an aircraft even when you cannot see outside?",
        choice1: "Basic six",
        choice2: "Blind instruments",
        choice3: "Instrumental Flight Gauges",
        choice4: "Trust the six",
        answer: "Basic six",
    },
    {
        question: "What is UTC?",
        choice1: "Cordinated Universal Time",
        choice2: "A time standard that doesn't observe daylight",
        choice3: "Saying time or time zones",
        choice4: "All answers are correct",
        answer: "All answers are correct",
    },
    {
        question: "Which statement is correct?",
        choice1: "The higher the speed, the greater the lift on an aircraft",
        choice2: "The lower the speed, the greater the lift on an aircraft",
        choice3: "The higher the speed, the lower the lift on an aircraft",
        choice4: "The lower the speed, the lower the lift on an aircraft",
        answer: "The higher the speed, the greater the lift on an aircraft",
    },
    {
        question: "What does RPM stand for?",
        choice1: "Runtime errors per minute",
        choice2: "Range per minute?",
        choice3: "Revolutions per minute",
        choice4: "Rides per minute",
        answer: "Revolutions per minute",
    },
    {
        question: "Which force does not usually act upon an aircraft during flight?",
        choice1: "Lift",
        choice2: "Gravity",
        choice3: "Drag",
        choice4: "Muscle power",
        answer: "Muscle power",
    }
]

*/
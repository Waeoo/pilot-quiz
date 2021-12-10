/* jshint esversion: 8 */

let startQuiz = document.getElementById("start-quiz");
var nameBox = document.getElementById("name-box");
nameBox.addEventListener("input", validateInput);
var nameB = document.getElementById("name-box").value;

// Name to be entered will show the start quiz button in order to continue
function validateInput() {
    console.log(typeof(nameBox.value));
    if ( nameBox.value != null && nameBox.value != "") {
        startQuiz.classList.remove("hide");
    } else {
        startQuiz.classList.add("hide");
    }
}

function store() {
    localStorage.setItem.value("nameB", nameB);
    location.href = "quiz.html";
}
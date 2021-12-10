/* jshint esversion: 8 */

let startQuiz = document.getElementById("start-quiz");
var nameBox = document.getElementById("name-box");
nameBox.addEventListener("input", validateInput);

// Name to be entered will show the start quiz button in order to continue
function validateInput() {
    if ( nameBox.value != null && nameBox.value != "") {
        startQuiz.classList.remove("hide");
    } else {
        startQuiz.classList.add("hide");
    }
}

// Store name input
function store() {
    var nameB = document.getElementById("name-box").value;
    localStorage.setItem("nameB", nameB);
    location.href = "quiz.html";
}
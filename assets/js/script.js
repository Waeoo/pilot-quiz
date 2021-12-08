/* jshint esversion: 8 */
let startQuiz = document.getElementById("start-quiz");
let nameBox = document.getElementById("name-box");

nameBox.addEventListener("input", validateInput);

function validateInput() {
    console.log(typeof(nameBox.value));
    if ( nameBox.value != null && nameBox.value != "") {
        startQuiz.classList.remove("hide");
    } else {
        startQuiz.classList.add("hide");
    }
}
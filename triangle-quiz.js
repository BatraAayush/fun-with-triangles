const quizForm = document.querySelector("#quiz-form");
const checkBtn = document.querySelector("#check");
const output = document.querySelector("#output");

const answers = ["90°", "right angled", "equilateral", "hypotenuse", "scalene", "3", "180°", "21cm", "8cm","3"];

checkBtn.addEventListener("click", calculateScore);

function calculateScore() {
    let index = 0;
    let score = 0;
    let userAnswer = [];
    const data = new FormData(quizForm);

    for (const value of data) {
        userAnswer[value[0] - 1] = value[1];
    }
    answers.forEach((answer) => {
        if (answer === userAnswer[index]) {
            score++;
        }
        index++;
    });
    output.innerHTML = "SCORE: " + score;
}

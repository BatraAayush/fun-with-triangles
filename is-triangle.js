const input = document.querySelectorAll(".angle");
const checkBtn = document.querySelector("#check");
const output = document.querySelector("#output");

checkBtn.addEventListener("click", () => {
    //validity
    if (input[0].value && input[1].value && input[2].value) {
        checkIfTriangle();
    } else {
        output.innerHTML = "Please Enter Input!";
    }
});

function checkIfTriangle() {
    //sum of angles should be 180
    const sum =
        Number(input[0].value) +
        Number(input[1].value) +
        Number(input[2].value);
    //checking if triangle
    if (sum === 180) {
        output.innerHTML = "Yay! It is a Triangle.";
    } else {
        output.innerHTML = "Opps! Is is not a Triangle.";
    }
}

const side = document.querySelectorAll(".side");
const calculateBtn = document.querySelector("#calculate");
const output = document.querySelector("#output");

calculateBtn.addEventListener("click", () => {
    if (side[0].value > 0 && side[1].value > 0) {
        calculateHypo(Number(side[0].value), Number(side[1].value));
    } else {
        output.innerHTML = "Please Enter Valid Input!";
    }
});

function calculateHypo(side1, side2) {
    //HYPOTENUSE = sqrt(a*a + b*b)
    const sumOfSquares = side1 * side1 + side2 * side2;
    const hypo = Math.sqrt(sumOfSquares);
    output.innerHTML = "Hypotenuse is " + hypo.toFixed(2) + "cm";
}

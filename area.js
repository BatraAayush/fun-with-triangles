const side = document.querySelectorAll(".side");
const calculateBtn = document.querySelector("#calculate");
const output = document.querySelector("#output");

calculateBtn.addEventListener("click", () => {
    if (side[0].value && side[1].value) {
        calculateArea(Number(side[0].value), Number(side[1].value));
    } else {
        output.innerHTML = "Enter Input!";
    }
});

function calculateArea(base, height) {
    //AREA = 1/2 (base * height)
    const area = 0.5 * (base * height);
    output.innerHTML = "Area is " + area.toFixed(2) + "cm";
}

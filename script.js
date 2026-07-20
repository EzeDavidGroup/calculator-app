const historyBtn = document.getElementById("historyBtn");
const historyDrawer = document.getElementById("historyDrawer");

const display = document.getElementById("display");

const buttons = document.querySelectorAll("button");

let expression = "";

function updateDisplay() {

    display.value = expression;

}

buttons.forEach(button => {

    button.addEventListener("click", () => {

        handleButton(button.textContent);

    });

});

historyBtn.addEventListener("click", () => {

    historyDrawer.classList.toggle("show");

});

function handleButton(value) {

    console.log(value);

}

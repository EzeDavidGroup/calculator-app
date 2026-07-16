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

function handleButton(value) {

    console.log(value);

}

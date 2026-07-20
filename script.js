const display = document.getElementById("display");
const buttons = document.querySelectorAll(".buttons button");

let expression = "";

buttons.forEach(button => {

    button.addEventListener("click", () => {

        handleButton(button.textContent);

    });

});

function handleButton(value) {

    if (value === "C") {

        expression = "";

    }

    else if (value === "←") {

        expression = expression.slice(0, -1);

    }

    else if (value === "=") {

        calculate();

        return;

    }

    else {

        const operators = ["+", "-", "*", "/", "%"];
        const lastCharacter = expression.slice(-1);

        if (
            operators.includes(value) &&
            operators.includes(lastCharacter)
        ) {

            return;

        }

        expression += value;

    }

    updateDisplay();

}

function calculate() {

    if (expression === "") return;

    try {

        expression = eval(expression).toString();

        updateDisplay();

    }

    catch {

        expression = "";

        display.value = "Error";

    }

}

function updateDisplay() {

    display.value = expression;

}

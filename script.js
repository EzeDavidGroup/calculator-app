const display = document.getElementById("display");
const buttons = document.querySelectorAll(".buttons button");
const historyList = document.getElementById("historyList");
const clearHistory = document.getElementById("clearHistory");

let expression = "";

let history = JSON.parse(localStorage.getItem("history")) || [];

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

        const originalExpression = expression;

        const result = eval(expression);

        expression = result.toString();

        history.push(`${originalExpression} = ${result}`);
        console.log(history);
        saveHistory();

        updateDisplay();

        renderHistory();

    }

    catch {

        expression = "";

        display.value = "Error";

    }

}

    

function updateDisplay() {

    display.value = expression;

}


function saveHistory() {

    localStorage.setItem("history", JSON.stringify(history));

}

function renderHistory() {

    historyList.innerHTML = "";

    history.forEach(item => {

        const li = document.createElement("li");

        li.textContent = item;

        historyList.prepend(li);

    });

}

clearHistory.addEventListener("click", () => {

    history = [];

    saveHistory();

    renderHistory();

});

renderHistory();

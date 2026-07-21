const display = document.getElementById("display");
const buttons = document.querySelectorAll(".buttons button");
const historyList = document.getElementById("historyList");
const clearHistory = document.getElementById("clearHistory");
const historyBtn = document.getElementById("historyBtn");
const historyDrawer = document.getElementById("historyDrawer");

let expression = "";

let history = JSON.parse(localStorage.getItem("history")) || [];

buttons.forEach(button => {

    button.addEventListener("click", () => {

        handleButton(button.textContent);

    });

});

historyBtn.addEventListener("click", () => {

    historyDrawer.classList.toggle("show");

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

        history.push({

    expression: originalExpression,

    result: result.toString()

});
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


document.addEventListener("keydown", (event) => {

    handleKeyboard(event);

});

function handleKeyboard(event) {

    const key = event.key;

    const validKeys = [
        "0","1","2","3","4",
        "5","6","7","8","9",
        "+","-","*","/","%",
        ".","Enter","Backspace","Escape"
    ];

    if (!validKeys.includes(key)) {

        return;

    }

    let buttonValue = key;

    if (key === "Enter") {

        buttonValue = "=";

    }

    else if (key === "Backspace") {

        buttonValue = "←";

    }

    else if (key === "Escape") {

        buttonValue = "C";

    }

    handleButton(buttonValue);

}

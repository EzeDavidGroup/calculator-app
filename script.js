const display = document.getElementById("display");

const buttons = document.querySelectorAll("button");

buttons.forEach(button => {

    button.addEventListener("click", () => {

        const value = button.textContent;

        if (value === "C") {

            display.value = "";

        } else if (value === "←") {

            display.value = display.value.slice(0, -1);

        } else if (value === "=") {

            try {

                display.value = eval(display.value);

            } catch {

                display.value = "Error";

            }

        } else {

    const operators = ["+", "-", "*", "/", "%"];

    const lastCharacter = display.value.slice(-1);

    if (
        operators.includes(value) &&
        operators.includes(lastCharacter)
    ) {

        return;

    }

    display.value += value;

}

    });

});

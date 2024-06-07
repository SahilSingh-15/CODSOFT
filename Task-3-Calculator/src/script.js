document.addEventListener("DOMContentLoaded", function() {
    const display = document.getElementById('calc-display');
    const buttons = document.getElementsByClassName('btn');
    let currentValue = "";

    function factorial(n) {
        if (n === 0 || n === 1) return 1;
        return n * factorial(n - 1);
    }

    function evaluateResult() {
        try {
            const convertedValue = currentValue
                .replace("×", "*")
                .replace("÷", "/")
                .replace("%", "*0.01")
                .replace("sin", "Math.sin")
                .replace("cos", "Math.cos")
                .replace("ln", "Math.log")
                .replace("π", "Math.PI")
                .replace("log", "Math.log10")
                .replace("e", "Math.E")
                .replace("tan", "Math.tan")
                .replace("√", "Math.sqrt")
                .replace("^", "**");

            // Evaluate factorial
            const factorialRegex = /(\d+)!/g;
            let evalValue = convertedValue.replace(factorialRegex, (match, num) => factorial(parseInt(num)));

            // Evaluate the result
            const result = eval(evalValue);
            currentValue = result.toString();
            display.value = currentValue;
        } catch (error) {
            console.error(error);
            currentValue = "ERROR";
            display.value = currentValue;
        }
    }

    for (let i = 0; i < buttons.length; i++) {
        const button = buttons[i];
        button.addEventListener('click', function() {
            const value = button.innerText;
            if (value === 'AC') {
                currentValue = "";
                display.value = currentValue;
            } else if (value === '=') {
                evaluateResult();
            } else if (value === '←') { // Add functionality for the backspace button
                currentValue = currentValue.slice(0, -1);
                display.value = currentValue;
            } else {
                currentValue += value;
                display.value = currentValue;
            }
        });
    }
    
});
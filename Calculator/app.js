let display = document.getElementById('display');
let currentExpression = '';

function inputNumber(num) {
    currentExpression += num;
    display.textContent = currentExpression;
}

function inputOperation(operation) {
    currentExpression += operation;
    display.textContent = currentExpression;
}

function inputDot() {
    currentExpression += '.';
    display.textContent = currentExpression;
}

function clearDisplay() {
    currentExpression = '';
    display.textContent = '';
}

function deleteLast() {
    currentExpression = currentExpression.slice(0, -1);
    display.textContent = currentExpression;
}

function calculateResult() {
    try {
        const result = eval(currentExpression);
        display.textContent = result;
        currentExpression = result;
    } catch (error) {
        display.textContent = 'Error';
    }
}
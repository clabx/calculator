// Functions
function convertNumber(string){
    switch(string){
        case 'zero':
            return 0;
        case 'one':
            return 1;
        case 'two':
            return 2;
        case 'three':
            return 3;
        case 'four':
            return 4;
        case 'five':
            return 5;
        case 'six':
            return 6;
        case 'seven':
            return 7;
        case 'eight':
            return 8;
        case 'nine':
            return 9;
    }
}

function resetData(){
firstNumber = "";
currentNumber = "";
secondNumber = "";
operator = "";
oldOperator = "";
result = "";
isDecimal = false;
firstNumberToShow = "";
secondNumberToShow = "";
}

function calculate(numberA, numberB, op){
    switch(op){
        case 'plus':
            return Number(numberA)+Number(numberB);
        case 'minus':
            return Number(numberA)-Number(numberB);
        case 'multiply':
            return Number(numberA)*Number(numberB);
        case 'division':
            return Number(numberA)/Number(numberB); 
    }
}

function whichOperator(operator){
    if(operator === 'plus'){
        return '+';
    } else if(operator === 'minus'){
        return '-';
    } else if(operator === 'multiply'){
        return '×';
    } else if(operator === 'division'){
        return '/';
    }
}

let firstNumber = "";
let currentNumber = "";
let secondNumber = "";
let operator = "";
let oldOperator = "";
let result = "";
let isDecimal = false;
let firstNumberToShow = "";
let secondNumberToShow = "";
let resetRequest = false;

// Query selectors and listeners.

const numbersDOM = document.querySelectorAll(".number");
numbersDOM.forEach((button) => {
    button.addEventListener('click', (e) => {
        currentNumber += convertNumber(e.path[0].id);
    })
})

const operandsDOM = document.querySelectorAll(".operand");
operandsDOM.forEach((button) => {
    button.addEventListener('click', (e) => {
        if(operator !== ''){
            oldOperator = operator
        }
        operator = e.path[0].id;
        if(firstNumber === '' && secondNumber === ''){
            firstNumber = currentNumber;
            currentNumber = '';
            isDecimal = false
        } else{
            secondNumber = currentNumber;
            firstNumber = calculate(firstNumber, secondNumber, oldOperator);
            secondNumber = '';
            currentNumber = '';
            isDecimal = false
            }
    })
})

const decimalDOM = document.querySelector("#decimal");
decimalDOM.addEventListener('click', () => {
    if(!isDecimal && currentNumber != ''){
        currentNumber += '.';
        isDecimal = true;
    }
})

const equalDOM = document.querySelector('#equal');
equalDOM.addEventListener('click', () => {
    secondNumber = currentNumber;
    if(firstNumber != '' && secondNumber != ''){
        result = calculate(firstNumber, secondNumber, operator);
    }
})

const displayEquationDOM = document.querySelector('#displayEquation');
const displayResultDOM = document.querySelector('#displayResult');
const buttonsDOM = document.querySelectorAll('button');
buttonsDOM.forEach((button) => {
    button.addEventListener('click', () => {
        let equationText;
        if(firstNumber === ''){
            equationText = currentNumber;
        } else {
            equationText = firstNumber;
            if(operator != ''){
                equationText += " " + whichOperator(operator);
                if(currentNumber != ''){
                    equationText += " " + currentNumber;
                }
            }
        }
        displayEquationDOM.textContent = equationText;

            if(result !== ''){
                displayResultDOM.textContent = parseFloat(result.toPrecision(4));
                resetData();
                displayEquationDOM.textContent = '';
            }
    })    
})

const clearDOM = document.querySelector("#clear");
clearDOM.addEventListener('click', () => {
    resetData();
    displayResultDOM.textContent = '';
    displayEquationDOM.textContent = '';
})
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
    secondNumber = "";
    currentNumber = "";
    operator = "";
    result = "";
}

let firstNumber = "";
let currentNumber = "";
let secondNumber = "";
let operator = "";
let result = "";

// Query selectors and listeners.

const numbersDOM = document.querySelectorAll(".number");
numbersDOM.forEach((button) => {
    button.addEventListener('click', (e) => {
        currentNumber += convertNumber(e.path[0].id);
        console.log(currentNumber); 
    })
})

const operandsDOM = document.querySelectorAll(".operand");
operandsDOM.forEach((button) => {
    button.addEventListener('click', (e) => {
        operator = e.path[0].id;
        if(firstNumber === '' && secondNumber === ''){
            firstNumber = currentNumber;
            currentNumber = '';
        } else if(secondNumber === ''){
            secondNumber = currentNumber;
            currentNumber = '';
        } else{
            firstNumber = operate(firstNumber, secondNumber, operator);
            secondNumber = '';
        }
    })
})



import {getNumbers, isValidNumber} from "./helpers.js";
import {isValidMark} from "./helpers.js";
import {computingNumbers} from "./compute.js";


const buttonList = document.querySelector('ul');
const buttons = buttonList.childNodes
const inputField = document.querySelector('.calculation')
const result = document.querySelector('.result');

const operationIds = ['divide', 'multiply', 'subtract', 'add']

buttonList.addEventListener('click', (event) => {
    const value = event.target.textContent
    if(isValidNumber(value)){
        inputField.value += value
    }
    if(event.target.id === "clear"){
        inputField.value = ''
    }
    if (event.target.id === "equals"){
        let calculation = inputField.value
        let newCalculation = calculation.split('')
        console.log('new', newCalculation)
        const numbers = getNumbers(newCalculation)
        console.log("ready result in main:", numbers)
        result.textContent = computingNumbers(numbers)
        }
    if(operationIds.includes(event.target.id)){
        if (!isValidMark((inputField.value || "") + value)) return;
        inputField.value += value
        }

})
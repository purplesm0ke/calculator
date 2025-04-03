import {isValidNumber} from "./helpers.js";

const buttonList = document.querySelector('ul');
const buttons = buttonList.childNodes
const inputField = document.querySelector('.calculation')

const operationIds = ['divide', 'multiply', 'subtract', 'add']

buttonList.addEventListener('click', (event) => {
    console.log(event.target.textContent)
    const value = event.target.textContent
    if(isValidNumber(value)){
        inputField.value += value
    }
    if(event.target.id === "clear"){
        inputField.value = ''
    }
    if (event.target.id === "equals"){
        console.log("result", inputField.value)
        for (let i = 0; i < inputField.value.length; i++) {
            if(isValidNumber(inputField.value[i]) && event.target.id === "equals"){
                let calculation = inputField.value + inputField.value
                console.log('cal', calculation)
            }
        }
    }
    if(operationIds.includes(event.target.id)){
        inputField.value += value
    }

})
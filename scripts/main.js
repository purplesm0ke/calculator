import {isValidNumber} from "./helpers.js";

const buttonList = document.querySelector('ul');
const buttons = buttonList.childNodes
const inputField = document.querySelector('.calculation')



buttonList.addEventListener('click', (event) => {
    console.log(event.target.textContent)
    const value = event.target.textContent
    if(isValidNumber(value)){
        inputField.value += value
    }
    if(event.target.id === "clear"){
        inputField.value = ''
    }
})
import {isValidNumber} from "./helpers.js";

const buttonList = document.querySelector('ul');
const buttons = buttonList.childNodes
const inputField = document.querySelector('.calculation')

const operationIds = ['divide', 'multiply', 'subtract', 'add']
let num
let mark
let res
let firstNum

// if (isValidNumber(cur)){
//     num = cur
//     console.log('num', num)
// }
// if (!isValidNumber(acc)) {
//     mark = acc
//     console.log('mark', mark)
// }

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

        let calculation = inputField.value
        let newCalculation = calculation.split('')
        console.log('cal', calculation)
        console.log('new', newCalculation)
        newCalculation.map((elem) => {
            if (isValidNumber(elem)){
                num = elem
                console.log('num', num)
            }
            if (!isValidNumber(elem)){
                mark = elem
                console.log('mark', mark)
            }
            return elem
        })
    }
    if(operationIds.includes(event.target.id)){
        inputField.value += value
    }

})
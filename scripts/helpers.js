export const isValidNumber = (value) => {
    return !Number.isNaN(Number(value))
}
export const isValidMark = (value) => {
    let countOfMark = 0;
    for (let i = 0; i < value.length; i++) {
        if (countOfMark >1){
            break;
        }
        if (!isValidNumber(value[i])) {
            countOfMark+=1;
        }
        else{
            countOfMark = 0;
        }
    }
    if(countOfMark > 1) {
        return false
    };
    return true
}
export const getNumbers = (string) => {
    let number = '';
    let result = [];
    for (let i = 0; i < string.length; i++) {
        if (isNaN(string[i])===false) {
            number += string[i];
        }
        if (isNaN(string[i])===true){
            result.push(Number(number));
            number = '';
            result.push(string[i])
        }
        if (string.length-1===i){
            result.push(Number(number));
        }
    }
    console.log('kkk',result);
    return result;
}

// export
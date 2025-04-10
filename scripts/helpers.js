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
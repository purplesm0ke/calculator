export const computingNumbers = (arr = []) => {
    const initialArr = [...arr];
    let compute = initialArr[0];
    while (true) {
        let result
        let operationIndex = initialArr.findIndex((element) => element === '*' || element === '/');
        if (operationIndex === -1) {
            break
        }
        switch (initialArr[operationIndex]) {
            case '*':
                result = initialArr[operationIndex-1]*initialArr[operationIndex+1]
                break
            case '/':
                result = initialArr[operationIndex-1]/initialArr[operationIndex+1]
                break
        }
        initialArr.splice(operationIndex-1, 3, result)
    }
    for (let i = 1; i < initialArr.length-1; i++) {
        switch (initialArr[i]){
            case '+':
                compute += initialArr[i+1];
                break
            case '-':
                compute -= initialArr[i+1];
                break
        }
    }
    return compute
}


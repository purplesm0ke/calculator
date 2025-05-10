export const computingNumbers = (arr) => {
    let compute = arr[0];
    for (let i = 1; i < arr.length; i++) {
        switch (arr[i]){
            case '+':
                compute += arr[i+1];
                break
            case '-':
                compute -= arr[i+1];
                break
            case '*':
                compute *= arr[i+1];
                break
            case '/':
                compute /= arr[i+1];
                break
        }
    }
    console.log('comp',compute)
    return compute
}
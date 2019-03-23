
function sumArray(arr){
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

function fitWithinVal(array, number){
    const result = [];
    let total = 0;
    let index = 0;

    do{
        if (array[index] + total <= number) {
            result.push(array[index]);
            total += array[index];
        }
        index ++;
    } while(index < array.length && total < number);
    return result;
}

function getAllNamesShorterThan(array, numLength){
    const result = array.filter(array => array.length < numLength);
    return result;
}

function makeLabel(info){
    return `${info.greeting} ${info.givenName} ${info.familyName}\n${info["home address"].streetNumber} ${info["home address"].streetName}\n${info["home address"].city}, ${info["home address"].state} ${info["home address"].zip}`
}


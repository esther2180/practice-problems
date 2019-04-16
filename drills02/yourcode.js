

function countOccurences(arr, word){
    let count = 0;

    for (let i in arr) {
        if (word === arr[i]) {
            count++;
        }
    }
    return count;
}

function wordLengths(arr){
    let result = [];

    for (let i in arr) {
        result.push(arr[i].length);
    }
    return result;
}

function getMinMaxMean(){

}

function findMode(){

}

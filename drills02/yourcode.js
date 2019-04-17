

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

function getMinMaxMean(arr){
    let returnObj = {};

    let min = arr[0];
    let max = arr[0];
    let mean = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (min > arr[i]) {
            min = arr[i];
        }
        if (max < arr[i]) {
            max = arr[i];
        }
        mean += arr[i];
    }
    mean /= arr.length;

    returnObj["min"] =  min;
    returnObj["max"] = max;
    returnObj["mean"] = mean;
    return returnObj;
}

function findMode(arr) {
    let mostCount = 1;
    let count = 0;
    let item;

    for (let i = 0 ; i < arr.length; i++) {         // take each element 
        for (let j = i; j < arr.length; j++) {      // set back to [i] element and loop through
            if (arr[i] === arr[j]) {                // if [i] from first loop & [j] from second loop matches
                count++;                            // add to count
            }
            if (mostCount < count) {                // if mostCout < count
                mostCount = count;                  // assign count to mostCount
                item = arr[i]                       // and finally assign that element to item
            }
        }
        count = 0;                                 // reassign count to 0
    }
    return item;
};



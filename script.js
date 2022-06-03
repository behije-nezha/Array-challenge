// Write a function that is given an array and each time the value is "food" it should 
// console log "yummy". If "food" was not present in the array console log "I'm hungry" once.

function alHungry(array) {
    var foodCount = 0;
    for(var i=0;i<arr.length; i++){
        if(arr[i]=="food"){
            console.log("yummy");
            foodCount++;
        }
     }
     
    if (Food == 0) {
        console.log("I'm hungry")
    }
}
 
// Given an array and a value cutoff, return a new array containing only the values larger than cutoff

function highPass(arr, cutoff) {
    var filteredArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > cutoff) {
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
}

// Given an array of numbers return a count of how many of the numbers are larger than the average.

function betterThanAverage(arr) {
    var sum = 0;

    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    var avg = sum / arr.length;
    var count = 0

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > avg) {
            count++;
        }
    }
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);


// Write a function that will reverse the values an array and return them.

function reverse(arr) {
    var left = 0;
    var right = arr.length - 1;
    while (left < right) {
        var temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left++;
        right--;
    }
    return arr;
}
var result = reverse(["a", "b", "c", "d", "e"]);



// Write a function that will return an array of Fibonacci numbers up to a given length n. 
// Fibonacci numbers are calculated by adding the last two values in the sequence together. 
// So if the 4th value is 2 and the 5th value is 3 then the next value in the sequence is 5.

function fibonacciArray(n) {
    
    var fibArr = [0, 1];
    while (fibArr.length < n) {
        var prev = fibArr[fibArr.length - 1];
        var prevprev = fibArr[fibArr.length - 2];
        fibArr.push(prev + prevprev);
    }
    return fibArr;
}

var result = fibonacciArray(10);
console.log(result); 

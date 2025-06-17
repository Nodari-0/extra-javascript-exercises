var sumUpTo = (number) => {
    return number < 0 ? 0 : number + sumUpTo(number - 1);
};
console.log(sumUpTo(5)); // Output: 15
//  ###########################################################
var countEvens = (arr) => {
    return arr.filter((num) => num % 2 === 0).length;
};
console.log(countEvens([1, 2, 3, 4, 5]));
//  ###########################################################
var findMax = (arr) => {
    return Math.max(...arr);
};
console.log(findMax([1, 2, 3, 4, 5]));
//  ###########################################################
var isPalindrome = (word) => {
    const lowerWord = word.toLowerCase();
    let cleanedWord = "";
    for (let i = 0; i < lowerWord.length; i++) {
        const ch = lowerWord[i];
        if ((ch >= "a" && ch <= "z") || (ch >= "0" && ch <= "9")) {
            cleanedWord += ch;
        }
    }
    return cleanedWord === cleanedWord.split("").reverse().join("");
};
console.log(isPalindrome("Was it a car or a cat I saw?"));
//  ###########################################################
var reverseArray = (arr) => {
    let result = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        result.push(arr[i]);
    }
    return result;
};
console.log(reverseArray([1, 2, 3, 4, 5]));
//  ###########################################################
var countLetter = (word, letter) => {
    let count = 0;
    for (let i = 0; i < word.length; i++) {
        if (word[i].toLowerCase() === letter.toLowerCase()) {
            count++;
        }
    }
    return count;
};
console.log(countLetter("Hello World", "o"));
//  ###########################################################
var findDuplicates = (arr) => {
    const seen = new Set();
    const duplicates = new Set();
    for (const item of arr) {
        if (seen.has(item)) {
            duplicates.add(item);
        }
        else {
            seen.add(item);
        }
    }
    return Array.from(duplicates);
};
console.log(findDuplicates([1, 2, 3, 4, 5, 1, 2, 3]));
// #########################
var areAnagrams = (firstWord, secondWord) => {
    // for (let i =0;i<a.length;i++){
    //   if.
    // }
    return (firstWord.split("").sort().join("") === secondWord.split("").sort().join(""));
};
console.log(areAnagrams("listen", "silent"));
// ###########################################################
function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 15 === 0) {
            console.log("FizzBuzz");
        }
        else if (i % 3 === 0) {
            console.log("Fizz");
        }
        else if (i % 5 === 0) {
            console.log("Buzz");
        }
        else {
            console.log(i);
        }
    }
}
fizzBuzz(15);
// ###########################################################
// Write a function `longestIncreasingSubseq(arr)` that returns the length of the longest increasing **consecutive** numbers in an array.
// ```js
// longestIncreasingSubseq([1, 2, 1, 2, 3, 0, 1]); // 3 (2,3,0 doesn't count because not increasing)
// ```
function longestIncreasingSubseq(arr) {
    let maxLen = 0;
    let currentLen = 0;
    for (let i = 0; i < arr.length; i++) {
        // Start counting or continue if current element is greater than previous
        if (i === 0 || arr[i] > arr[i - 1]) {
            currentLen++;
            maxLen = Math.max(maxLen, currentLen);
        }
        else {
            // Reset length if not strictly increasing
            currentLen = 1;
        }
    }
    return maxLen;
}
console.log(longestIncreasingSubseq([1, 2, 1, 2, 3, 0, 1]));

const sumUpTo = (number) => {
  return number < 0 ? 0 : number + sumUpTo(number - 1);
};
console.log(sumUpTo(5)); // Output: 15
//  ###########################################################
const countEvens = (arr) => {
  return arr.filter((num) => num % 2 === 0).length;
};
console.log(countEvens([1, 2, 3, 4, 5]));
//  ###########################################################

const findMax = (arr) => {
  return Math.max(...arr);
};
console.log(findMax([1, 2, 3, 4, 5]));
//  ###########################################################

const isPalindrome = (word) => {
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
const reverseArray = (arr) => {
  let result = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i]);
  }
  return result;
};
console.log(reverseArray([1, 2, 3, 4, 5]));

//  ###########################################################
countLetter = (word, letter) => {
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
findDuplicates = (arr) => {
  const seen = new Set();
  const duplicates = new Set();

  for (const item of arr) {
    if (seen.has(item)) {
      duplicates.add(item);
    } else {
      seen.add(item);
    }
  }

  return Array.from(duplicates);
};
console.log(findDuplicates([1, 2, 3, 4, 5, 1, 2, 3]));


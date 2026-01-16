//Reverse Words in a Sentence
// let sentence = "Java is fun";
// let result=sentence.split(" ").reverse().join(" ");
// console.log(result);

//Given two strings, check if one is a rotation of another
// let str1 = "ABCD";
// let str2 = "DCBA";

// if (str1.split("").reverse().join("") === str2) {
//     console.log(true);
// } else {
//     console.log(false);
// }

//Run-Length Encoding 
let str = "aaabbc";
let result = "";
let count = 1;

for (let i = 1; i <= str.length; i++) {
    if (str[i] === str[i - 1]) {
        count++;
    } else {
        result += str[i - 1] + count;
        count = 1;
    }
}

console.log(result); 

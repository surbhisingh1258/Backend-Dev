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
// let str = "aaabbc";
// let result = "";
// let count = 1;

// for (let i = 1; i <= str.length; i++) {
//     if (str[i] === str[i - 1]) {
//         count++;
//     } else {
//         result += str[i - 1] + count;
//         count = 1;
//     }
// }

// console.log(result); 



//Count Vowels and Consonants
// let str = "Hello World";
// let vowels = 0;
// let consonants = 0;

// let lowerStr = str.toLowerCase();

// for (let i = 0; i < lowerStr.length; i++) {
//     let ch = lowerStr[i];
    
//     if (ch >= 'a' && ch <= 'z') {          // Check if it's a letter
//         if (ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u') {
//             vowels++;
//         } else {
//             consonants++;
//         }
//     }
// }

// console.log("Vowels:", vowels, "Consonants:", consonants);



//First Non-Repeating Character
let str = "swiss";
let result = "";

for (let i = 0; i < str.length; i++) {
    let count = 0;   

    for (let j = 0; j < str.length; j++) {
        if (str[i] === str[j]) {
            count++;
        }
    }

    if (count === 1) {
        result = str[i];
        break;
    }
}

console.log(result); 


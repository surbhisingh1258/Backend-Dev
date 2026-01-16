//Reverse Words in a Sentence
// let sentence = "Java is fun";
// let result=sentence.split(" ").reverse().join(" ");
// console.log(result);

//Given two strings, check if one is a rotation of another
let str1 = "ABCD";
let str2 = "DCBA";

if (str1.split("").reverse().join("") === str2) {
    console.log(true);
} else {
    console.log(false);
}
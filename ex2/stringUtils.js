function capitalize(str){
    return str.charAt(0).toUpperCase();
}

function reverse(str){
    return str.split("").reverse().join("");
}

function countVowel(str){
    const vowels = "aeiouAEIOU";
    count = 0;
    for(let c of str){
        if(vowels.includes(c)){
            count++;
        }
    }
    return count;
}
module.exports = { capitalize, reverse, countVowel};
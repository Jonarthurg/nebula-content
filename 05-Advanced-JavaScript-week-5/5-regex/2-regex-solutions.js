// 1.   Write a function that tests if a string contains the string of '123' within it
/*
function has123(str){
    return !!str.match(/123/)
}
*/

// 2.   Write a function that tests if a string contains the letter 'a' then the letter 'c' at any point afterward
//      ex: 'abc' => true
//      ex: 'aTc' => true
//      ex: 'a113412341234c' => true
//      ex: 'ac'  => true
//      ex: 'abd' => false
//      ex: 'ca'  => false
/*
function aThenC(str){
    return !!str.match(/a.*c/)
}
*/

// 3.   Write a function that reports how many instances of a given string there are 
//      This function should take in a string and a substring to look for 
//      Input: 'this is a test', 't'
//      Output: '3'

/*
function hasSubstr(str, sub){
    let re = new RegExp(sub, 'g');
    return str.match(re)?.length
}
*/

// 4.   Write a function that checks if all characters in a string are lowercase letters
/*
const isLowercaseOnly = (string) => {
    const lowercaseOnly = /^[a-z]+$/g;
    return lowercaseOnly.test(string);
}
*/

// 5.   Write a function that checks if a string has an uppercase letter
/*
function hasUpper(str){
    return !!str.match(/(?=.*[A-Z])/);
}
*/

// 6.   Write a function that checks if a string contains a dash or underscore 
/*
function hasHt(str){
    return Boolean(str.match(/^(http|https):\/\//))
}
*/

// 7.   Write a function that utilizes regex to check if a string contains '.com' at the end
/*
function hasCom(str){
    if(str.match(/\.com$/)){
        return true
    }
}
*/

// 8.   Write a function that utilizes regex to check if a string contains 'http://' or 'https://' at the beginning
/*
function hasHt(str){
    if(str.match(/^(http|https):\/\//)){
        return true
    }
}
*/

// 9.   Write a function that utilizes regex to indicate if a string's first letter is uppercase or not
/*
function test(str){
    let regexp = /^[A-Z]/;
    if (str.match(/^[A-Z]/)){
        console.log("String's first character is uppercase");
    } 
}
*/

// 10.   Write a function that utlizes regex to replicate the functionality of '  string  '.trim()
/*
function trim(str){
    return str.replace(/^\s+|\s+$/g, '').length;
}
*/
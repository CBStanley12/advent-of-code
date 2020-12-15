// Day 2: Password Philosophy


// Puzzle Input
const fs = require('fs');
let input;

try {
    input = fs.readFileSync('../data/02.txt', 'utf8').split(/\n/).map(entry => entry.split(/\W+/));
} catch(e) {
    console.log(`Error: ${e.stack}`);
}


// PART ONE
/*
    Each line gives the password policy and then the password.
    The password policy indicates the lowest and highest number of times a given letter must appear for the password to be valid. For example, 1-3 a means that the password must contain a at least 1 time and at most 3 times.

    Problem: How many passwords are valid according to their policies?
    Solution: 586
*/

function validatePassword([ min, max, char, pass ]) {
    let times = 0;
    pass.split('').forEach(letter => { if (letter === char) times++ });

    return ( times >= min && times <= max );
}

function countValid(data) {
    let count = 0;
    data.forEach(entry => { if (validatePassword(entry)) count++ });

    return count;
}

console.log(countValid(input));


// PART TWO
/* 
    Each policy actually describes two positions in the password, where 1 means the first character, 2 means the second character, and so on. (Be careful; Toboggan Corporate Policies have no concept of "index zero"!) Exactly one of these positions must contain the given letter. Other occurrences of the letter are irrelevant for the purposes of policy enforcement.

    Problem: How many passwords are valid according to the new interpretation of the policies?
    Solution: 352
*/

function validatePasswordOfficial([ first, second, char, pass ]) {
    if ( (pass[first-1] === char && pass[second-1] !== char) || (pass[second-1] === char && pass[first-1] !== char) ) {
        return true;
    } else {
        return false;
    }
}

function countValidOfficial(data) {
    let count = 0;
    data.forEach(entry => { if (validatePasswordOfficial(entry)) count++ });

    return count;
}

console.log(countValidOfficial(input));
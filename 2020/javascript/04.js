// Day 4: Passport Processing


// Puzzle Input
const fs = require('fs');
const INPUT = fs.readFileSync('../data/04.txt', 'utf8').split(/\n^\n/gm).map(entry => entry.split(/\s/gm));


// PART ONE
/*
    The automatic passport scanners are slow because they're having trouble detecting which passports have all required fields.
    The expected fields are as follows:
      - byr (Birth Year)
      - iyr (Issue Year)
      - eyr (Expiration Year)
      - hgt (Height)
      - hcl (Hair Color)
      - ecl (Eye Color)
      - pid (Passport ID)
      - cid (Country ID)
    Passport data is validated in batch files (your puzzle input).
    Each passport is represented as a sequence of key:value pairs separated by spaces or newlines.
    Passports are separated by blank lines.

    Problem: Count the number of valid passports - those that have all required fields. Treat cid as optional. In your batch file, how many passports are valid?
    Solution: 170
*/

function checkForRequiredFields(passport) {
    const requiredFields = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'];
    let passportFields = passport.map(field => field.slice(0,3));

    return requiredFields.every(field => passportFields.includes(field));
}

function validatePassports(batch) {
    let count = 0;

    // Solution One
    // batch.forEach(passport => { if (checkForRequiredFields(passport)) count++ });

    // Solution Two
    batch.forEach(passport => {
        let hasRequiredFields = checkForRequiredFields(passport);

        if (hasRequiredFields) {
            let isValidated = passport.every(field => validateField(field.slice(0,3), field.slice(4)));

            if (isValidated) count++;
        }
    });

    return count;
}

console.log(validatePassports(INPUT));


// PART TWO
/*
    You can continue to ignore the cid field, but each other field has strict rules about what values are valid for automatic validation:
      - byr (Birth Year) - four digits; at least 1920 and at most 2002.
      - iyr (Issue Year) - four digits; at least 2010 and at most 2020.
      - eyr (Expiration Year) - four digits; at least 2020 and at most 2030.
      - hgt (Height) - a number followed by either cm or in:
          - If cm, the number must be at least 150 and at most 193.
          - If in, the number must be at least 59 and at most 76.
      - hcl (Hair Color) - a # followed by exactly six characters 0-9 or a-f.
      - ecl (Eye Color) - exactly one of: amb blu brn gry grn hzl oth.
      - pid (Passport ID) - a nine-digit number, including leading zeroes.
      - cid (Country ID) - ignored, missing or not.
    Your job is to count the passports where all required fields are both present and valid according to the above rules.

    Problem: Count the number of valid passports - those that have all required fields and valid values.
        Continue to treat cid as optional. In your batch file, how many passports are valid?

    Solution: 103
*/

function validateField(name, value) {
    let validation = false;

    if (name === 'byr' || name === 'iyr' || name === 'eyr') {
        let year = parseInt(value);

        if (name === 'byr') {
            validation = validateBirth(year);
        } else if (name === 'iyr') {
            validation = validateIssue(year);
        } else if (name === 'eyr') {
            validation = validateExpiration(year);
        }
    } else if (name === 'hgt') {
        validation = validateHeight(value)
    } else if (name === 'hcl') {
        validation = validateHair(value);
    } else if (name === 'ecl') {
        validation = validateEye(value);
    } else if (name === 'pid') {
        validation = validatePID(value);
    } else if (name === 'cid') {
        validation = true;
    }

    return validation;
}

function validateBirth(year) { return (year >= 1920 && year <= 2002); }

function validateIssue(year) { return (year >= 2010 && year <= 2020); }

function validateExpiration(year) { return (year >= 2020 && year <= 2030); }

function validateHeight(height) {
    let [num, unit] = height.split(/(?<=\d)(?=(cm|in))/);
    if (unit === 'cm') {
        return (num >= 150 && num <= 193);
    } else if (unit === 'in') {
        return (num >= 59 && num <= 76);
    }
}

function validateHair(color) { return (color.length === 7 && (color.search(/\#\w{6}/)) === 0); }

function validateEye(color) { return (color.length === 3 && (color.search(/((amb)|(blu)|(brn)|(gry)|(grn)|(hzl)|(oth))/) === 0)) };

function validatePID(id) { return (id.length === 9 && (id.search(/\d{9}/) === 0)) };

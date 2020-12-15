// Day 2: 1202 Program Alarm

// Puzzle Input
const DATA = [
    1, 12, 2, 3, 1, 1, 2, 3, 1, 3, 4, 3, 1, 5, 0, 3, 2, 1, 13, 19, 1, 9, 19, 23, 2, 13, 23, 27, 2, 27, 13, 31, 2, 31, 10, 35, 1, 6, 35, 39, 1, 5, 39, 43, 1, 10, 43, 47, 1, 5, 47, 51, 1, 13, 51, 55, 2, 55, 9, 59, 1, 6, 59, 63, 1, 13, 63, 67, 1, 6, 67, 71, 1, 71, 10, 75, 2, 13, 75, 79, 1, 5, 79, 83, 2, 83, 6, 87, 1, 6, 87, 91, 1, 91, 13, 95, 1, 95, 13, 99, 2, 99, 13, 103, 1, 103, 5, 107, 2, 107, 10, 111, 1, 5, 111, 115, 1, 2, 115, 119, 1, 119, 6, 0, 99, 2, 0, 14, 0
];

// Solution Setup
function intcodeProgram(data, noun, verb) {
    let intcode = [...data];

    intcode[1] = noun;
    intcode[2] = verb;

    for (let i = 0; i < intcode.length; i += 4) {
        let stop = false;

        let opcode = intcode[i];
        let positionOne = intcode[i + 1];
        let positionTwo = intcode[i + 2];
        let outputPosition = intcode[i + 3];

        switch (opcode) {
            case 1:
                intcode[outputPosition] = intcode[positionOne] + intcode[positionTwo];
                break;
            case 2:
                intcode[outputPosition] = intcode[positionOne] * intcode[positionTwo];
                break;
            case 99:
                stop = true;
        }

        if (stop) { break; }
    }

    return intcode[0];
};

// Part 1 Solution
console.log(intcodeProgram(DATA, 12, 2));

// Part 2 Solution
for (const x of Array(100).keys()) {
    for (const y of Array(100).keys()) {
        if (intcodeProgram(DATA, x, y) == 19690720) { console.log(100 * x + y); }
    }
}
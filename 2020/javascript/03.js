// Day 3: Toboggan Trajectory


// Puzzle Input
const fs = require('fs');
let input;

try {
    input = fs.readFileSync('../data/03.txt', 'utf8').split(/\n/);
} catch(e) {
    console.log(`Error: ${e.stack}`);
}


// PART ONE
/*
    You start on the open square (.) in the top-left corner and need to reach the bottom (below the bottom-most row on your map).
    The toboggan can only follow a few specific slopes (you opted for a cheaper model that prefers rational numbers); start by counting all the trees you would encounter for the slope right 3, down 1:
    From your starting position at the top-left, check the position that is right 3 and down 1. Then, check the position that is right 3 and down 1 from there, and so on until you go past the bottom of the map.

    Problem: Starting at the top-left corner of your map and following a slope of right 3 and down 1, how many trees would you encounter?
    Solution: 262
*/

function detectTree(position) {
    return (position === '#');
}

function traverseMap(slopeX, slopeY, map) {
    let count = 0,
        x = 0,
        y = 0;

    while (y < map.length) {
        if (detectTree(map[y][x])) count++;
        x = ((x + slopeX) > 30) ? (x + slopeX) - 31 : x + slopeX;
        y += slopeY;
    }

    return count;
}

console.log(traverseMap(3, 1, input));


// PART TWO
/*
    Time to check the rest of the slopes - you need to minimize the probability of a sudden arboreal stop, after all.
    Determine the number of trees you would encounter if, for each of the following slopes, you start at the top-left corner and traverse the map all the way to the bottom:
        - Right 1, down 1.
        - Right 3, down 1. (This is the slope you already checked.)
        - Right 5, down 1.
        - Right 7, down 1.
        - Right 1, down 2.

    Problem: What do you get if you multiply together the number of trees encountered on each of the listed slopes?
    Solution: 2698900776
*/

const SLOPES = [
    [1, 1],
    [3, 1],
    [5, 1],
    [7, 1],
    [1, 2]
];

function countTotalTrees(slopes, map) {
    let treeCount = [];
    slopes.forEach(slope => treeCount.push(traverseMap(slope[0], slope[1], map)));

    return treeCount.reduce((a,b) => a * b);
}

console.log(countTotalTrees(SLOPES, input));
<div align="center">
    <h1>2020 Puzzles and Answers</h1>
</div>

<details>
<summary>Table of Contents</summary>

   * [Day 1](#day-1-report-repair)
   * [Day 2](#day-2-password-philosophy)
   * [Day 3](#day-3-toboggan-trajectory)
   * [Day 4](#day-4-passport-processing)

</details>

</br>


## Day 1: Report Repair 

[:globe_with_meridians:](https://adventofcode.com/2020/day/1) Puzzle Details

[:link:](data/01.txt) Puzzle Input

### Part One:
Before you leave, the Elves in accounting just need you to fix your expense report (your puzzle input); apparently, something isn't quite adding up. Specifically, they need you to find the two entries that sum to 2020 and then multiply those two numbers together.

Find the two entries that sum to 2020; what do you get if you multiply them together?

***Answer: 691,771***

### Part Two:
The Elves in accounting are thankful for your help; one of them even offers you a starfish coin they had left over from a past vacation. They offer you a second one if you can find three numbers in your expense report that meet the same criteria.

In your expense report, what is the product of the three entries that sum to 2020?

***Answer: 232,508,760***


## Day 2: Password Philosophy

[:globe_with_meridians:](https://adventofcode.com/2020/day/2) Puzzle Details

[:link:](data/02.txt) Puzzle Input

### Part One:
Each line gives the password policy and then the password. The password policy indicates the lowest and highest number of times a given letter must appear for the password to be valid. For example, 1-3 a means that the password must contain a at least 1 time and at most 3 times.

How many passwords are valid according to their policies?

***Answer: 586***

### Part Two:
Each policy actually describes two positions in the password, where 1 means the first character, 2 means the second character, and so on. (Be careful; Toboggan Corporate Policies have no concept of "index zero"!) Exactly one of these positions must contain the given letter. Other occurrences of the letter are irrelevant for the purposes of policy enforcement.

How many passwords are valid according to the new interpretation of the policies?

***Answer: 352***


## Day 3: Toboggan Trajectory

[:globe_with_meridians:](https://adventofcode.com/2020/day/3) Puzzle Details

[:link:](data/03.txt) Puzzle Input

### Part One:
You start on the open square (.) in the top-left corner and need to reach the bottom (below the bottom-most row on your map).

The toboggan can only follow a few specific slopes (you opted for a cheaper model that prefers rational numbers); start by counting all the trees you would encounter for the slope right 3, down 1:

From your starting position at the top-left, check the position that is right 3 and down 1. Then, check the position that is right 3 and down 1 from there, and so on until you go past the bottom of the map.

Starting at the top-left corner of your map and following a slope of right 3 and down 1, how many trees would you encounter?

***Answer: 262***

### Part Two:
Time to check the rest of the slopes - you need to minimize the probability of a sudden arboreal stop, after all.

Determine the number of trees you would encounter if, for each of the following slopes, you start at the top-left corner and traverse the map all the way to the bottom:
* Right 1, down 1.
* Right 3, down 1. (This is the slope you already checked.)
* Right 5, down 1.
* Right 7, down 1.
* Right 1, down 2.

What do you get if you multiply together the number of trees encountered on each of the listed slopes?

***Answer: 2698900776***


## Day 4: Passport Processing

[:globe_with_meridians:](https://adventofcode.com/2020/day/4) Puzzle Details

[:link:](data/04.txt) Puzzle Input

### Part One:
The automatic passport scanners are slow because they're having trouble detecting which passports have all required fields. The expected fields are as follows:
* byr (Birth Year)
* iyr (Issue Year)
* eyr (Expiration Year)
* hgt (Height)
* hcl (Hair Color)
* ecl (Eye Color)
* pid (Passport ID)
* cid (Country ID)

Passport data is validated in batch files (your puzzle input). Each passport is represented as a sequence of key:value pairs separated by spaces or newlines. Passports are separated by blank lines.

Count the number of valid passports - those that have all required fields. Treat cid as optional. In your batch file, how many passports are valid?

***Answer: 170***

### Part Two:
You can continue to ignore the cid field, but each other field has strict rules about what values are valid for automatic validation:
* byr (Birth Year) - four digits; at least 1920 and at most 2002
* iyr (Issue Year) - four digits; at least 2010 and at most 2020
* eyr (Expiration Year) - four digits; at least 2020 and at most 2030.
* hgt (Height) - a number followed by either cm or in:
    * If cm, the number must be at least 150 and at most 193.
    * If in, the number must be at least 59 and at most 76.
* hcl (Hair Color) - a # followed by exactly six characters 0-9 or a-f.
* ecl (Eye Color) - exactly one of: amb blu brn gry grn hzl oth.
* pid (Passport ID) - a nine-digit number, including leading zeroes.
* cid (Country ID) - ignored, missing or not.

Your job is to count the passports where all required fields are both present and valid according to the above rules.

Count the number of valid passports - those that have all required fields and valid values. Continue to treat cid as optional. In your batch file, how many passports are valid?

***Answer: 103***
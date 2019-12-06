# Day 02: 1202 Program Alarm


# Puzzle Input
puzzle_data = [
  1,12,2,3,1,1,2,3,1,3,4,3,1,5,0,3,2,1,13,19,1,9,19,23,2,13,23,27,2,27,13,31,2,31,10,35,1,6,35,39,1,5,39,43,1,10,43,47,1,5,47,51,1,13,51,55,2,55,9,59,1,6,59,63,1,13,63,67,1,6,67,71,1,71,10,75,2,13,75,79,1,5,79,83,2,83,6,87,1,6,87,91,1,91,13,95,1,95,13,99,2,99,13,103,1,103,5,107,2,107,10,111,1,5,111,115,1,2,115,119,1,119,6,0,99,2,0,14,0
]


# Solution Setup
def intcode_program(data_array, noun, verb):
    data = data_array.copy()

    data[1] = noun
    data[2] = verb

    for i in range(0, len(data), 4):
        opcode = data[i]
        position_one = data[i+1]
        position_two = data[i+2]
        output_position = data[i+3]

        if (opcode == 1):
            data[output_position] = data[position_one] + data[position_two]
        elif (opcode == 2):
            data[output_position] = data[position_one] * data[position_two]
        elif (opcode == 99):
            break

    return data[0]


# Part 1 Solution
print(f"Part 1 Solution = {intcode_program(puzzle_data, 12, 2)}")


# Part 2 Solution
for x in range(100):
    for y in range(100):
        if (intcode_program(puzzle_data, x, y) == 19690720):
            print(f"Part 2 Solution = {100 * x + y}")
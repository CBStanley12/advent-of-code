# Day 1: The Tyranny of the Rocket Equation

import math


# Helper function to calculate fuel requirements
def get_fuel(mass):
    return math.floor(mass / 3) - 2


# Part 1 Solution
def calculate_fuel(data_file):
    fuel = 0
    data = open(data_file, "r")

    for module_mass in data:
        fuel += get_fuel(int(module_mass))

    data.close()

    return fuel


print(f"Part 1 Solution = {calculate_fuel('data.txt')}")


# Part 2 Solution
def calculate_total_fuel(data_file):
    fuel = 0

    data = open(data_file, "r")

    for module_mass in data:
        module_mass = get_fuel(int(module_mass))

        while module_mass > 0:
            fuel += module_mass
            module_mass = get_fuel(int(module_mass))

    data.close()

    return fuel


print(f"Part 2 Solution = {calculate_total_fuel('data.txt')}")

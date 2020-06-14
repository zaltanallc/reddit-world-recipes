########
#
# Goes through the reddit recipe file and converts it into a JSON object
# The text file has the following structure:
# ${country_name}
# ${whitespace}
# * ${recipe_name} x ${count} - ${description} (repeats until whitespace)
# ${whitespace}
#
#########
#
# Resulting JSON file will have the following structure
# [
#   {
#     countryName: ${country_name},
#     recipes: [
#       {
#         name: string,
#         votes: number,
#         description: string
#       },
#       ...
#     ]
#   },
#   ...
# ]
#
# Array of
#   Country objects
#
# Country object
#   countryName
#   recipes (Array of Recipe)
#
# Recipe has
#   name: string
#   vote: number
#   description: string
#
########


import sys


class Recipe():
    def __init__(self, name, vote, description):
        self.name = name
        self.vote = vote
        self.description = description


class Country():
    def __init__(self, name, recipes):
        self.name = name
        self.recipes = recipes


def parse_country_name(name):
    return name


def parse_recipe_line(line):
    """
    Uses regex to pull values from a line
    """
    search_string = "^*"


def run(input_file, output_file):
    """
    Parses the file and converts it into a JSON object
    """
    countries = []

    with open(input_file) as file:
        line = file.readline()
        cnt = 1
        numWhitespace = 0

        while line:
            print("{}: {}".format(cnt, line))
            line = file.readline()
            cnt += 1
            # if line is "":
            #     numWhitespace = numWhitespace + 1
            # if numWhitespace % 2 == 0:
            #     # new country
            #     country = Country()


if __name__ == '__main__':
    """

    """
    if len(sys.argv) != 2:
        raise Exception("Incorrect number of arguments")

    input_file = sys.argv[1]

    file_parts = input_file.split('.')
    file_parts[-1] = 'json'
    output_file = '.'.join(file_parts)

    run(input_file, output_file)

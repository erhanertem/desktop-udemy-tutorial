import random

num_roll = int(input("How many dice you want to roll: "))
sides_dice = int(input("How many sides each die will have: (3-20)"))
while not (sides_dice >= 3 and sides_dice <= 20):
    sides_dice = int(input("How many sides each die will have: (3-20)"))


while True:
    # DICE ROLLS
    roll_output = "|"
    # METHOD#1
    # roll_count = num_roll
    # while roll_count > 0:
    #     curr_roll = random.randint(1, sides_dice)
    #     roll_output = roll_output + str(curr_roll) + "|"
    #     roll_count -= 1
    # METHOD#2
    for roll_count in range(num_roll):
        curr_roll = random.randint(1, sides_dice)
        roll_output += f"{curr_roll} |"
    # PRINT DICE ROLLS
    print(roll_output)
    # ASK IF CONTINUE
    res = input("Roll again? ('q' to quit)").lower()
    if res == "q":
        break

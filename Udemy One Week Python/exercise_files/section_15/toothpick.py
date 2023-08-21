player_1 = input("enter player 1's name: ")
player_2 = input("enter player 2's name: ")

num_toothpicks = 13
curr_player = player_1

while True:
    # DISPLAY GAME FEED FOR THE TURN
    print(("| " * num_toothpicks).strip())
    print(
        f"There are {num_toothpicks} toothpicks left\nHow many do you take, {curr_player} ?"
    )
    take_toothpicks = int(input(""))
    while not (take_toothpicks in range(1, 4)):
        take_toothpicks = int(
            input("Please provide a permissable pick count (1 thru 3)")
        )
    num_toothpicks = num_toothpicks - take_toothpicks

    if num_toothpicks <= 1:
        break

    #  SWITCH TURNS
    if curr_player == player_1:
        curr_player = player_2
    elif curr_player == player_2:
        curr_player = player_1

print(f"Player that won the match is {curr_player}")
print("GAME OVER")

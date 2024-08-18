from random import randint

rock = """
    _______
---'   ____)
      (_____)
      (_____)
      (____)
---.__(___)"""

paper = """
    _______
---'   ____)____
          ______)
          _______)
         _______)
---.__________)
"""

scissors = """
    _______
---'   ____)____
          ______)
       __________)
      (____)
---.__(___)
"""
# Pick a random number from 1 to 3
num = randint(1, 3)
comp_mov = None
# Turn that random number into the computer's RPS move
if num == 1:
    comp_mov = "rock"
elif num == 2:
    comp_mov = "scissors"
elif num == 3:
    comp_mov = "paper"

# Ask a user to enter their move
player_mov = input("Enter your move (paper, rock, scissors):").lower()

# Print the rock, paper, or scissors ASCII art that corresponds to the player's move
print("YOUR MOVE: ")
if player_mov == "rock":
    print(rock)
elif player_mov == "scissors":
    print(scissors)
elif player_mov == "paper":
    print(paper)
# Print the rock, paper, or scissors ASCII art that corresponds to the computer's move
print("COMPUTER MOVE: ")
if comp_mov == "rock":
    print(rock)
elif comp_mov == "scissors":
    print(scissors)
elif comp_mov == "paper":
    print(paper)

# Figure out who wins and print the result!
if comp_mov == player_mov:
    print("IT'S A TIE")
elif player_mov == "rock" and comp_mov == "scissors":
    print("YOU WIN!")
elif player_mov == "paper" and comp_mov == "rock":
    print("YOU WIN!")
elif player_mov == "scissors" and comp_mov == "paper":
    print("YOU WIN!")
else:
    print("YOU LOSE!")

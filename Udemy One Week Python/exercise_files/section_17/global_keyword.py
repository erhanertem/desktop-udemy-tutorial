
# def outer():
#     global animal
#     animal = "Spider Crab"
# outer()

# print(animal)

score = 100


def double_score():
    global score
    score = score * 2


double_score()
print(score)

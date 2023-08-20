# 1st way of import - entire random object
# import random
# rand = random.randint(0, 1)

# 2nd way of import - only randint from random object
from random import randint

rand = randint(0, 1)

if rand == 0:
    print("HEADS!")
else:
    print("TAILS!")

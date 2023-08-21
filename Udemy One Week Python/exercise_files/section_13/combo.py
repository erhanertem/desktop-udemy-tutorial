#Operator Precedence:
#NOT
#AND
#OR

day = "Tuesday"
is_vet = True
age = 56
# Veterans get in free on Tuesdays
# Infants under 2 get in for free always

if age <= 2 or is_vet and day == "Tuesday":
    print("YOU GET IN FOR FREE TODAY!")

if not (age <= 2 or is_vet and day == "Tuesday"):
    print("YOU HAVE TO BUY A TICKET!")


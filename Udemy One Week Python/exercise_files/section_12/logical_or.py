day = input("what day of the week is it? ")

if day == 'saturday' or day == 'sunday':
    print("it's the weekend!")
else:
    print("ugh it's a workday :(")


# Another example:
age = int(input("how old are you? "))
if age < 5 or age >= 65:
    print("you get in for free!")
else: 
    print("that will be $5")

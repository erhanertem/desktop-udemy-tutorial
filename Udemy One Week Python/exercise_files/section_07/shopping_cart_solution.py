print("WELCOME TO THE USELESS STORE")
print("*" * 30)

item = input("What item are you purchasing: ")
price = float(input(f"What is the price of {item}: "))
quantity = float(input(f"How many {item} are you buying: "))

print(f"added {quantity} {item}(s) to shopping cart!")
print(f"Subtotal: ${quantity * price}")


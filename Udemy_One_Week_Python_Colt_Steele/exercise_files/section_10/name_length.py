first_name = input("Enter your first name: ")
last_name = input("Enter your last name: ")
name_length = len(first_name) + len(last_name)

print("*"*25)
if name_length == 12:
    print(f"{first_name} {last_name} is exactly the average length of American names")
elif name_length < 12:
    print(f"{first_name} {last_name} is shorter than the average American name")
else:
    print(f"{first_name} {last_name} is longer than the average American name")
print("*"*25)

# false && println("This won't be printed.")

print("Enter your age:") # Asks user to enter age
age = readline()  # Takes input as a string
(tryparse(Int64, age) === nothing) && (println("Please enter a number!"); exit())
age = parse(Int64, age)
(0 < age < 100) && println("Your age is $age.")
(0 < age < 100) || println("Please enter a number between 0 and 100!")
print("Enter your age:")
age = readline()
age = parse(Int64, age)
(tryparse(Int64, age) === nothing) && (println("Please enter a number!"); exit())
(0 < age < 100) && println("Your age is $age.")
(0 < age < 100) || println("Please enter a number between 0 and 100!")
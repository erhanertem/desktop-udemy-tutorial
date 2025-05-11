pow(a, b=2) = a^b
pow(2) # Calling pow with one argument, defaults to b=2
pow(2, 3) # 2^3

findmin(x, y=x) = x < y ? x : y # Base case
findmin(x, y...) = findmin(x, findmin(y...))
findmin(1, -9, 3, 4, 5) # returns -9
findmin(10) # returns 0
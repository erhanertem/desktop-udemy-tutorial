varfunc(x...) = (map(el -> el * 2, x))
typeof(varfunc(1, 2, 3, 4, 5)) # returns [2, 4, 6, 8, 10]

addall() = 0 # Base case
addall(x, y...) = x + addall(y...)
addall(1, 2, 3, 4, 1)

findmin(x, y) = x < y ? x : y # Base case
findmin(x, y...) = findmin(x, findmin(y...))
findmin(1, -9, 3, 4, 5) # returns 1

function printtype(args...)
  for (index, arg) in enumerate(args)
    println("Argument @ $index: $arg, Type: $(typeof(arg))")
    # for arg in args
    # println("Argument $arg, Type: $(typeof(arg))")
  end
end
printtype(1, 2, 3, 4.1111, -2.1, "hello", true, [1, 2, 3], (1, 2), Dict(:a => 1, :b => 2), nothing)

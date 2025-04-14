i = 1
while i < 5
  println(i^2)
  global i += 1
end

input = nothing
while input != 0
  println("Enter a number (0 to exit):")
  global input = parse(Int, readline())
  if input != 0
    println("You entered: ", input)
  end
end

j = 1
while j < 5
  println(j^2)
  global j += 1
end

arr = [3, 4, 5, 6, 7, 11, 15]
while !isempty(arr)
  print(pop!(arr), " ")
end
println("Array is empty now: $arr")

file = open("conditionals loops/inputFile.txt", "r" # readmode
)
line = readline(file)
while line != ""
  println(line)
  line = readline(file)
end
close(file)

arr = [1, 2, 3, 4]
i = 1

while i <= length(arr)
  arr[i] *= 2
  i += 1
end
println(arr)

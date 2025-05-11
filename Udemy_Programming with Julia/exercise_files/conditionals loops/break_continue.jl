# BREAK
arr = [1, 2, 3, 4]
for i ∈ arr
  if i == 4
    println("Found 4, exiting loop")
    break
  end
end

# CONTINUE
arr = [1, 2, 3, 4, 99, 44, 12, 8, 0, 1111]
for i ∈ arr
  if i == 3
    println("Skipping 3")
    continue
  end
  println(i)
end

for el in arr
  el % 2 == 1 && continue
  println(el) # prints even numbers only
end

numtries = 0
while true
  global numtries += 1
  m, n = rand(1:6), rand(1:6)
  if (m, n) == (6, 6)
    break
  end
end
println("You rolled a 6,6 after $numtries tries")

arr = [1, 2, 3, 4, 5]
i = 1
while i < length(arr)
  println(arr[i])
  global i += 1
end

for i = 1:3, j = 2:5
  if j > 3
    break
  end
  print(i, " ")
end
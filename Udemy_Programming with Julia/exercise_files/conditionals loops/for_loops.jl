# > LOOPING @ KNOWN ITERATOR ARRAYS
for i in 1:4
  println("Iteration number: ", i)
end

for i = 1:4
  println("Iteration number: ", i)
end

for i ∈ 1:4 # \in TAB
  println("Iteration number: ", i)
end

for i ∈ ["Julia", "Python", "R"]
  println("Iteration item: ", i)
end

for (index, value) in enumerate(["Julia", "Python", "R"])
  println("Iteration item: $index with value: $value.")
end


# ITERATE IN GROUPS OF ARRAYS
names = ["Albert", "Bert", "Carl", "Diana"]
surnames = ["Einstein", "Curie", "Newton", "Hawking"]
birthyears = [1879, 1867, 1643, 1942]
for (name, surname, birthyear) in zip(names, surnames, birthyears)
  println("Name: $name $surname, born in $birthyear.")
end

# > LOOPING @ UNKNOWN ITERATOR ARRAYS
arr = rand(5:25, 5)

# ❌ Not recommended!
for i in 1:length(arr)
  println("Iteration item: $i with value: $(arr[i]).")
end

for i in eachindex(arr)
  println("Iteration item: $i with value: $(arr[i]).")
end

for (index, value) in enumerate(arr)
  println("Iteration item: $index with value: $value.")
end

arr = rand(-1_000_000:1_000_000, 100)
maxnum = typemin(Int64) # Assign initiaslly the smallest Int64 value to maxnum
for num in arr
  if num > maxnum
    maxnum = num
  end
end
println(maxnum)

sum_ = 0
n = 0
for num in arr
  sum_ += num
  n += 1
end
average = sum_ / n

# > LOOPING @ 2D MATRIX ARRAYS
for row in 1:6
  for col in 1:4
    print((row, col)) # print a tuple of (row, col)
  end
  println()
end

for row in 1:6, col in 1:4
  print((row, col)) # print a tuple of (row, col)
  if (col == 2)
    println()
  end
end

mat = rand(15:44, (3, 2)) # Create a 3x2 matrix filled with random integers between 15 and 44.
# LONGHAND SYNTAX FOR INNER LOOPS
for row in 1:size(mat, 1)
  for col in 1:size(mat, 2)
    println("Iteration item: $row with value: $(mat[row, col]).")
  end
end
# SHORTHAND SYNTAX FOR IUNNER LOOPA
for row in 1:size(mat, 1), col in 1:size(mat, 2)
  println("Iteration item: $row with value: $(mat[row, col]).")
end

for idx in eachindex(mat)
  println("Iteration index: $idx with value: $(mat[idx])")
end

# > LOOPING @ MULTI-DIMENSIONAL ARRAYS
arr = rand(5:25, 3, 2)  # a 2D array: 3 rows, 2 columns - Creates a 3x2 matrix filled with random integers between 5 and 25.
for i in axes(arr, 1)  # loop over the 1st dimension (rows)
  println("Iteration item: $i with value: $(arr[i, :]).")
end
for i in axes(arr, 2)  # loop over the 1st dimension (rows)
  println("Iteration item: $i with value: $(arr[:, i]).")
end

arr = rand(1:9, 2, 3, 2, 2)  # shape: (2, 3, 2, 2)
# Access 3rd dimension array
for i in axes(arr, 3)
  println("Slice at 3rd dimension index $i:")
  println(arr[:, :, i, :])
end
# Access 4th dimension array
for i in axes(arr, 4)
  println("Time frame $i:")
  println(arr[:, :, :, i])  # all rows, columns, depth at time t
end

# >LOOPING @ DICT
d = Dict("a" => 10, "b" => 20, "c" => 30)
for (key, val) in d
  println("Key: $key, Value: $val")
end
for item in d
  println("🔁Key: $(item.first), Value: $(item.second)")
  println("Key: $(item[1]), Value: $(item[2])")
end

# > LOOPING @ STRINGS
str = "Julia is a funny little language."
for i in str
  println("Iteration item: $i")
end
for i in eachindex(str)
  print("Iteration item: $i with value: $(str[i])")
end

ks = [1, 2, 3];
vs = ["a", "b", "c"];

for (k, v) in zip(ks, vs)
  println("$k $v")
end
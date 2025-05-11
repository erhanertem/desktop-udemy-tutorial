arr = [5, 8, 12, 17, 24, 42]
sqarr = Int64[]
# LONGHAND VERSION
for i in arr
  append!(sqarr, i^2)
end
println(sqarr)

# SHORTHAND VERSION
[el^2 for el in arr]
# Same as:
result = []
for el in arr
  push!(result, el^2)
end


[(i, j) for i in 1:5, j in 1:i] # ❌ , for nested loops is not allowerd in comprehensions

[(i, j) for i in 1:5 for j in 1:i]
# Same as:
result = []
for i in 1:5
  for j in 1:i
    push!(result, (i, j))
  end
end

[x^2 for x in arr if iseven(x)]
# Same as:
result = []
for x in arr
  if iseven(x)
    push!(result, x^2)
  end
end

(x^2 for x in 1:1000)
sum(x^2 for x in 1:1000)

# Standard For loop - 54secs
s = 0
@time for i in 1:1_000_000_000
  s += i^2
end
println(s)
# Array Comprehension - 3.8 secs
@time sum([i^2 for i in 1:1_000_000_000])
# Generator - 0.03 secs
@time sum(i^2 for i in 1:1_000_000_000)

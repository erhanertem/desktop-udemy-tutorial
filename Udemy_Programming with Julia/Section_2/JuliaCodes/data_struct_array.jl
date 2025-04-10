# > ARRAYS
# Creating
arr = [3, "Julia", 2022, 4.12]
arr = [1, "Erhan", [2, 1, 5, "X"], "b"]
arr[3]
arr[30]
arr[end]
arr[begin]
arr[3:4]
arr[3:end]
arrFloat = [2.3, 1.1, 4.2, 11.5]
arrInt = [3, 5, 7, 9]
arrStr = ["Julia", "Python", "R", "Javaαβ"]
typeof(arr)


arrPrime = Int64[2, 3, 5, 7]
arrPrime[1] = 11.1
arrDouble = Float64[3.14, 2.718, 1.6]

# Copies the array arr
arr = [3, "Julia", 2022, 4.12]
newArr = arr[:]
newArr == arr
newArr === arr

arr[1] = 9999
arr

arr = [3, "Julia", 2022, 4.12]
3 ∈ arr
in(3, arr) # true
3 in arr

!in(3, arr)
3 ∉ arr # \notin TAB

issubset([3, 2022], arr)
[3, 2022] ⊆ arr # \subseteq TAB
!issubset([3, 2022], arr)
[3, 2022] ⊊ arr # \subsetneq TAB
arr ⊇ [3, 2022] # \supseteq TAB
arr ⊋ [3, 2022] # \supsetneq TAB

length(arr)

arr = [3, "Julia", 2022, 4.12]
push!(arr, "Python")
arr_add = ["Pineapple", "ʧ"]
append!(arr, arr_add)

deleteat!(arr, [1, 3, 4])

pop!(arr)

popfirst!(arr)

insert!(arr, 2, "Portugal")

str = "Julia, Python, R, Java"
arrstr = split(str, ", ")

arr = [1, 2, 3]
arr[2] = "two"

[rand(0.0:1.0, 3, 3)]
[rand(Float64, 3, 3)]

arr = [3, 5, 2];
insert!(arr, 2, 4);
println(arr)

arr = [1, 2, 3];
println(eltype(arr))
println(typeof(arr))

arr = [1, "Erhan", [2, 1, 5, "X"], "b"]
arr[[true, false, false, true]]
arr[3]

a = [1, 2, 3, 3, 4, 5, 6, 7, 8, 9, 10]
b = [5, 5, 1, 1, 1, 1, 1, 0, 9, 10, 0]

a ∪ b # \cup
union(a, b)

a ∩ b # \cap
intersect(a, b)

setdiff(a, b)
setdiff(b, a)

symdiff(a, b)

issubset([1, 2, 3], [1, 4, 5, 6, 3, 4, 3, 2])
[1, 2, 3] ⊆ [1, 4, 5, 6, 3, 4, 3, 2]
# > DICTIONARIES
# Empty Dictionary
d1 = Dict()  # Creates an empty dictionary

# Adding elements
d1["albert"] = 2
d1["mary"] = 10
println(d1)  # Output: Dict()

# Access elements
d1["albert"]  # Output: 2
d1["alberto"]  # Output: 2

# Access w/ a fallback error value
get(d1, "albert", "not found")
getkey(d1, "isaac", "not found")

get!(d1, "max", 10)


# Dictionary with key-value pairs
d2 = Dict("a" => 1, "b" => 2)
println(d2)  # Output: Dict("a" => 1, "b" => 2)

# Alternate Syntax for Creating a Dictionary
d3 = Dict([("a", 1), ("b", 2)])

# Functions
length(d1)
keys(d1)
values(d1)
"albert" in keys(d1)
"albert" ∈ keys(d1)
in("albert", keys(d1))
haskey(d1, "charlie")

!in(100, values(d1))
100 ∉ values(d1)

"charlie" ∉ keys(d1)
!in("charlie", keys(d1))
!haskey(d1, "charlie")

# Deleting elements
println(d1)  # Output: Dict()
delete!(d1, "albert")
if haskey(d1, "albert")
  delete!(d1, "albert")
else
  println("Key does not exist")
end

dict1 = Dict("d" => 4, "e" => 5,)
dict2 = Dict("a" => 1, "b" => 1)
dict3 = merge(dict1, dict2)
println(dict1)  # Output: Dict()
println(dict2)  # Output: Dict()
println(dict3)  # Output: Dict()

dict1 = Dict("d" => 4, "e" => 5, "a" => 10, "b" => 20)
dict2 = Dict("a" => 1, "b" => 1)
dict4 = mergewith(+, dict1, dict2)

dict1 = Dict("d" => 4, "e" => 5, "a" => 10, "b" => 20)
dict2 = Dict("a" => 1, "b" => 1)
merge!(dict1, dict2)
println(dict1)  # Output: Dict()
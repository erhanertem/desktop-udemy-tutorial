# SETS FROM VECTORS
# VERTICAL VECTOR / ARRAY
z = [3, 4, 6, 1, 9, 5, 2, 9, 0]
Set(z)
# # ❌ HORZ. VECTOR(1D MATRIX) - DOESNT MAKE ANY SENSE
# v = [3 4 6 1 9 5 2 9 0]
# Set(v) # Each column is unique as it only stands one element.


# SETS FROM DICTIONARY
v = ("ali" => 3, "veli" => 3, "deli" => 6, "ali" => 3, "ali" => 20)
Set(v) #   "ali" => 3 "veli" => 3 "deli" => 6 "ali" => 20

# SETS FROM TUPLE
v = (3, 3, 6, 3)
Set(v) # (3,6)


a = Set([1, 2, 3, 3, 4, 5, 6, 7, 8, 9, 10])
b = Set([5, 5, 1, 1, 1, 1, 1, 0, 9, 10, 0])

a ∪ b # \cup
union(a, b)

intersect(a, b)
a ∩ b # \cap

setdiff(a, b)
setdiff(b, a)

symdiff(a, b)

issubset(Set([1, 2, 3]), Set([1, 4, 5, 6, 3, 4, 3, 2]))
Set([1, 2, 3]) ⊆ Set([1, 4, 5, 6, 3, 4, 3, 2])
!issubset(Set([1, 2, 3]), Set([1, 4, 5, 6, 3, 4, 3, 2]))
Set([1, 2, 3]) ⊇ Set([1, 4, 5, 6, 3, 4, 3, 2])

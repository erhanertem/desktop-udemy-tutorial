v = Vector(1:5)
n = 7
# INEFFICIENT WAY OF ADDING n TO EACH ELEMENT OF v
v + repeat([n], size(v, 1)) # repeat - replicates the array. [1 + 5, 2 + 5, 3 + 5]
# EFFICIENT WAY OF ADDING n TO EACH ELEMENT OF v
broadcast(+, v, n)
v .+ n # Broadcasting shorthand

a = [4 7 8 9 11]
b = [3 1 1 1 100]
a == b
broadcast(==, a, b)
a .== b # Broadcasting shorthand for equality check

mat = [1 2 3; 4 5 6]
ℯ .^ mat
exp.(mat)
sqrt.(mat)
.√mat

x = [3 5 7 9 12 15]
3 .* x .^ 2 .+ 2 .* x .+ 5

vec = [7 22 12 13 16 21 18 76]
vec[[true, false, true, false, true, false, true, false]] # Selects elements at odd indices
vec1d = vec[:]  # Flatten to 1D
vec1d[[2, 4]]   # => selects the 2nd and 4th elements

vec .> 20
vec .% 4 .== 0 # Selects elements divisible by 4
vec[vec .% 4 .== 0] # Selects elements divisible by 4

vec[vec.>20]
vec[broadcast(>, vec, 20)]

mat = rand(1:100, 200, 10)
cond1 = mat[:,1] .% 3 .== 0 # Grap the second column of the matrix and select only the ones divisable by 3
cond2 = mat[:,2] .% 4 .== 0 # Grap the second column of the matrix and select only the ones divisable by 3
mat[cond1 .& cond2, :] # Selects rows that satisfy both conditions using Elementwise/Bitwise operator. Because each condition returns only 0s or 1s

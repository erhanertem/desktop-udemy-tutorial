column_vector = [1, 2, 3, 4, 5]
column_vector = [1; 2; 3; 4; 5]
ndims(column_vector) # 1

column_vector = Vector{Int}([1, 2, 3]) # Explicitly typed Vector{Int}

row_vector = [1 2 3 4 5]
ndims(row_vector) # 2
v = Vector{Float64}(undef, 5)
v = Array{Float64,1}(undef, 5)

mat_matrix = [1 2 3 4; 5 6 7 8; 9 10 11 12] # Concatenate row to form a 3x4 matrix
mat_matrix = [1; 2; 3; 4;; 5; 6; 7; 8;; 9; 10; 11; 12] # Concatenate vert columns to form a 4x3 matrix
mat_matrix = [1 2 3 4
  5 6 7 8
  9 10 11 12]



ndims(mat_matrix) # 2
size(mat_matrix) # (3, 4)
size(mat_matrix, 1) # 3
size(mat_matrix, 2) # 4

length(mat_matrix) # 12


mat_matrix[1] # 1
mat_matrix[5] # 6
mat_matrix[6] # 10

mat_matrix[1, 2] # 2
mat_matrix[2, 2] # 6
mat_matrix[end, end] # 12

mat_matrix
mat_matrix[2:3, 2:3]
mat_matrix[2, :]
mat_matrix[:, 2]

cvec1 = [1, 2, 3, 4, 5]
cvec2 = [2, 2, 2, 2, 2]
cvec3 = [3, 3, 3, 3, 3]
vcat(cvec1, cvec2, cvec3)
[cvec1; cvec2; cvec3]
hcat(cvec1, cvec2, cvec3)
[cvec1 cvec2 cvec3]

rv1 = [1 2 3 4 5]
rv2 = [2 2 2 2 2]
rv3 = [3 3 3 3 3]
vcat(rv1, rv2, rv3)
[rv1; rv2; rv3]
hcat(rv1, rv2, rv3)
[rv1 rv2 rv3]

empty_matrix = Matrix{Any}(undef, 2, 3)
empty_matrix = Matrix{Union{Int64,String}}(undef, 2, 3)

empty_matrix = Matrix{Any}(undef, 2, 3)
empty_matrix[2, 2] = 999
empty_matrix[1, 1] = "number"
empty_matrix

empty_matrix = Matrix{Any}(nothing, 2, 3)
# empty_matrix = Matrix{Int64}(nothing, 2, 3)
empty_matrix = Matrix{Union{Int64,Nothing}}(nothing, 2, 3)

empty_matrix = Matrix{Union{Int64,Missing}}(missing, 2, 3)

mat_matrix = [1 2 3 4; 5 6 7 8; 9 10 11 12]
reshape(mat_matrix, 6, 2)

ones(Int32, 2, 3)
zeros(2, 3)

falses(2, 2)
trues(2, 2)

fill(3.12, 2, 3)

rand(1:20, 3, 3)
randn(3, 3)

similar(mat_matrix, 2, 3)

a = [1 2 3; 4 5 6];
a
println(a[2, 2])

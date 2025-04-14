Array{Float64,3}(undef, (5, 4, 3))
Array{Union{Int64,Nothing},4}(nothing, (2, 3, 2, 3))
Array{Union{String,Missing},3}(missing, (4, 3, 2))

v = Vector(1:60)
arr1 = reshape(v, (5, 4, 3))

[1; 1;; 4; 4;; 3; 6;; 2; 5] # Concatenate 1D vert arrays to form a 2x4 matrix
[1; 1;; 4; 4;; 3; 6;; 2; 5;;; 2; 2;; 3; 2;; 5; 1;; 0; 1] # Concatenate 1D vert arrays to form a 3D 2x4 matrix

[1 1; 4 4; 3 6; 2 5] # Concatenate 1D row arrays to form a 4x2 matrix
[1 1; 4 4; 3 6; 2 5;;; 2 2; 3 2; 5 1; 0 1] # Concatenate 1D row arrays to form a 3D 4x2 matrix

arr1[2, 4, 1]
arr1[22]
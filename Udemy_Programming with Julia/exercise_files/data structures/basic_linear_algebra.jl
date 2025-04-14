using LinearAlgebra

mat = [1 4 8; 2 5 9; 3 6 7]

tr(mat) # tr stands for trace - left-to-right up-to-bottom diagonel sum of matrix elements

det(mat) # determinant of a square matrix

transpose(mat)
mat'

mat1 = [1 4 8; 2 5 9; 3 6 7]
mat2 = [4 2 1; 5 0 3; 3 2 1]
# MATRIX-WIDE MULTIPLICATION
mat1 * mat2
# ELEMENT-WISE MULTIPLICATION
mat1 .* mat2

x = 7.6
y = 1 / x

idt = [1 0 0; 0 1 0; 0 0 1]# idt is the identity matrix, which is a square matrix with ones on the diagonal and zeros elsewhere
I # identity matrix shorthand
I(3) # 2x2 identity matrix
idt == I(3)

inversematrix = inv(mat)
mat * inversematrix

A = [1 2; 2 -4]
B = [28; -2]
# A * X = B --> X = B * A(-1)
X = A \ B

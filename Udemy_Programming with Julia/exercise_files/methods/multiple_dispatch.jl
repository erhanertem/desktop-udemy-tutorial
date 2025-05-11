# > BUILT-IN MULTIPLE METHODS
*
methods(*)

*(3, 4)
*(3.3, 4)
*(4, 6.9)

mat1 = reshape(Vector(1:12), (3, 4))
mat2 = reshape(Vector(11:22), (4, 3))
*(mat1, mat2)
*("Julia", "Marry")

# > CUSTOM MULTIPLE METHODS
f(x::Float64, y::Float64) = x^2 + y^3
f(x::Number, y::Number) = x^2 + y^3
f(x, y) = "Invalid input types"
# Sames as:
f(x::Any, y::Any) = "Invalid input types"

methods(f)

f(3.0, 6.1)
f(3, 6)
f(3.0f0, 6.0f1)
f("xyz", 3.1)

g(x::Int64, y::Int64) = x + y # Intersection Case to avoid ambuguity
g(x::Int64, y::Any) = x * y # Case 1
g(x::Any, y::Int64) = x / y # Case 2

g(4, 4.5)
g(4.5, 4)
g(4.5, 4.5)
g(4, 4) # Raises ambiguity unless intersection case is provided

h(x=3, y=4) = x + y
h()

h(x::Int, y::Int) = x - y
h()
# Method with parametric types
test_types(x::T, y::T) where {T} = "Arguments have the same type"
# Fallback method
test_types(x, y) = "Arguments have different types"
# same as:
test_types(x::Any, y::Any) = "Arguments have different types"

test_types(4, 5)
test_types(4.1, 5.1)
test_types(4, "Erhan")

find_type(x::T) where {T} = T
find_type("Chernobil")
find_type(4.1)
find_type(4)

test_types_number(x::T, y::T) where {T<:Number} = "Same type numbers!" # Generic limited type casting
test_types_number(x::Number, y::Number) = "Different type numbers!" # Intersection method
test_types_number(x::Any, y::Any) = "At least one argument is not a number!" # Fallback method

test_types_number(1.1, 2.1)
test_types_number(1, 111)
test_types_number(1, 11.1)
test_types_number(1, "sos")

find_types(x::T, y::P) where {T<:String,P<:Number} = "$x String and $y number!"
find_types("xyz", 5.1)

check_types(a::Array{T}, x::T) where {T} = "$x has the same type with the array"
check_types(Vector(1:15), 200)

abstract type Shape end
struct Circle <: Shape
  radius::Float64
end
struct Rectangle <: Shape
  width::Float64
  height::Float64
end
area(s::Circle) = π * s.radius^2
area(s::Rectangle) = s.width * s.height
rec = Rectangle(5, 10)
cir = Circle(5)
area(rec) # 50.0
area(cir) # 78.53981633974483

two_args(x::Vararg{Number,2}) = maximum(x)
two_args(5, 5.12)
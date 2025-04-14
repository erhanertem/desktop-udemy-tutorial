# PARAMETRIC TYPES @ STRUCTS
# Regular Struct
struct Rectangle
  width::Float64
  height::Float64
end
# Parametric Struct
struct ParametricRectangle{T}
  width::T
  height::T
end
ParametricRectangle{Float64} <: ParametricRectangle
r1 = ParametricRectangle{Int}(3, 8)
r2 = ParametricRectangle{Float32}(2.78, 5.42)

struct NumRectangle{T<:Real}
  widht::T
  height::T
end
# r3 = NumRectangle{String}("three", "one")
r3 = NumRectangle{Rational}(1 // 2, 1 // 3)

# PARAMETRIC TYPES @ FUNCTIONS
function my_identity(x::T)::T where {T}
  return x
end

println(my_identity(10))      # 10 (Int64)
println(my_identity("hello")) # "hello" (String)

function my_identity_next(x::T)::T where {T<:Number}
  return x
end

# PARAMETRIC TYPES @ ABSTRACT TYPES
abstract type Color{T} end
abstract type NewColor{T<:Real} end

struct Rational{T<:Integer} <: Real   # T must be a subtype of Integer
  num::T
  den::T
end
r = Rational(4, 5) # Rational{Int64}(4, 5)

struct NewShape{T<:AbstractString,P<:Number}
  name::T
  color::T
  x_coord::P
  y_coord::P
end

rect = NewShape("Rectangle", "Blue", 3, 4)
# rect = NewShape("Rectangle", "Blue", 3, 4.5) # Error
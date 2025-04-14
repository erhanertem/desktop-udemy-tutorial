x = 42
x + 12
x = 12;
y = 15;
z = 18;
y = x^3 + 3 * x
x = "Programming in Julia"
z = 3.14
typeof(z)
z = "this is a string"
typeof(z)

_abc = 1234
println(_abc)

# Unicode characters
α = 15 # \alpha TAB
β = 23 # \beta TAB
println(α + β)

# Unicode characters with underscore notation
βₒ = 12 # \beta TAB \_o TAB
println(βₒ * α)


# Unicode characters with superscore notation
α¹ = 13 # \alpha TAB \^1 TAB
println(α¹ + βₒ)

π # \pi TAB
π = 2

ℯ # \euler TAB

# This is a single line comment

#= This is a multi-line comment
   This is a multi-line comment
   This is a multi-line comment =#

# Naming convensions
rectangle_width = 3
rectangle_height = 4

rectangleWidth = 3
rectangleHeight = 4

# Multi-variable assigments
a, b, c = 1, 2, 3
println(a, b, c)

# Swapping variable values
a, b = b, a
println(a, b)

# Statically typing
xe::Int64 = "euler"
ye::String = "alpha"

# Catch errors for expected value type
(7 + 8)::Int
(π + ℯ)::Float64
(2.5 * 5)::Int # Error


x = 13
typeof(x)
x = "thirteen"
typeof(x)

# Constants
const MYCONSTANT = 42
MYCONSTANT = 43.1 # Error
MYCONSTANT = 43 # Warning

a = 3.14
println(typeof(a))

x = 10
x += 5

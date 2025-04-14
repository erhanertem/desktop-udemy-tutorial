# Primitive custom types
primitive type Erhan 32 end

# Composite types

# Declare a immutable struct
struct Rectangle
  width::Float64
  height::Float64
end
# Inquire the field names of a struct
fieldnames(Rectangle) # Provides fieldnames for the struct
# Create instances of the struct
r1 = Rectangle(4.0, 7.0)
# Access the fields of the struct
w = r1.width = 4.0 # Error - reassigment of the field data is not possible. Structs are immutable
h = r1.height
supertype(Rectangle)

# Declare a mutable struct
mutable struct Circle
  radius::Float64
end
# Create instances of the struct
c1 = Circle(3.0)
# Access the fields of the struct
c1.radius = 4.0
supertype(Circle)

# Create an abstract type that represents a shape
abstract type Shape end
# Declare a concrete type that represents a rectangle
mutable struct RectangleShape <: Shape
  width::Float64
  height::Float64
end
# Declare a concrete type that represents a circle
mutable struct CircleShape <: Shape
  radius::Float64
end

# Unions @ Primitves
# Assign a variable
x::Union{Int64,Float64} = 5   # x can be Int64 or Float64
x = 3.14                      # Now it's Float64
# Assign a custom primitive
primitive type MyInt32 32 end
Base.convert(::Type{MyInt32}, x::Int32) = reinterpret(MyInt32, x) # Conversion from Int32 to MyInt32
Base.convert(::Type{Int32}, x::MyInt32) = reinterpret(Int32, x) # Conversion from MyInt32 to Int32
val = Int32(42)
custom_val = convert(MyInt32, val)
original_val = convert(Int32, custom_val)
println(original_val)  # Prints: 42




struct Person
  name::String
  age::Union{Int,Nothing}   # Allows age to be missing
end

student = (name="Alice", age=20, gpa=3.8)
println(student.name)  # Output: Alice

mutable struct BankAccount
  owner::String
  balance::Float64
end

# Define behavior (method)
function deposit!(account::BankAccount, amount::Float64)
  account.balance += amount
end


data::Union{Vector{Int},Set{Int}} = [1, 2, 3]  # Can be a Vector or Set
data = Set([1, 2, 3])                           # Now it's a Set

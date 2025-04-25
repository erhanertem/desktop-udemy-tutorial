mutable struct ModelVars
  x₁::Float64
  x₂::Float64
  x₃::Float64
end

fieldnames(ModelVars)

m1 = ModelVars(1.0, 2.0, 3.0)
methods(ModelVars)
ModelVars(3, 5, 5)
m1.x₁
m1.x₂
m1.x₃ = 11111
m1.x₃

# -> OUTER CONSTRUCTOR FUNCTION
# > Standard constructor fn with positional args
abstract type Student end
# Create a mutable struct
mutable struct Undergraduate <: Student
  name::String
  student_id::Int64
  gpa::Float64
  major::String
  programming_language::String
end
methods(Undergraduate)
ug1 = Undergraduate("John Doe", 123456, 3.5, "Computer Science", "Julia")

# > Create a constructor fn with positional args and some dafault values
Undergraduate(name, id, gpa) = Undergraduate(name, id, gpa, "Computer Science", "Julia")
methods(Undergraduate)
ug2 = Undergraduate("John Doe", 123456, 3.5)

# > Create a constructor fn with keyword args and some dafault values
function Undergraduate(; name, student_id, gpa=NaN, major="Computer Science", programming_language="Julia")
  return Undergraduate(name, student_id, gpa, major, programming_language)
end
methods(Undergraduate)
ug3 = Undergraduate(name="John Doe", student_id=123456, gpa=3.5)
ug3.gpa = 5.1

students = Undergraduate[]
push!(students, ug1, ug2, ug3)

# -> INNER CONSTRUCTOR FUNCTION

struct Person
  name::String
  age::Int

  function Person(name::String, age::Int)
    age < 0 && error("Age cannot be negative")
    new(name, age)  # ← you must use `new` in inner constructors
  end
end
Person("Alice", 25)    # ✅ OK
Person("Eve", -5)      # ❌ Error: Age cannot be negative

mutable struct MathStudent <: Student
  name::String
  student_id::Int64
  gpa::Float64
  MathStudent(name, student_id, gpa) = gpa < 0 ? throw("gpa cannot be negative") : new(name, student_id, gpa)
end

m1 = MathStudent("John Doe", 123456, 3.5)
m2 = MathStudent("Jane Doe", 123457, -3.5) # throws an error

mutable struct EconStudent <: Student
  name::String
  student_id::Int64
  gpa::Float64
  function EconStudent(name, student_id, gpa)
    name == "" && throw("Student name cannot be empty")
    (student_id == 0 || isnan(student_id)) && throw("Student ID cannot be empty")
    isnan(gpa) && throw("GPA cannot be NaN")
    gpa < 0 && throw("gpa cannot be negative")
    new(name, student_id, gpa)
  end
end
eco1 = EconStudent("John Doe", 123456, 3.5)
eco2 = EconStudent("", 123456, 3.5)
eco3 = EconStudent("E", 0, 3.5)

mutable struct Course
  name::String
  student::Array{Union{EconStudent,MathStudent,Undergraduate},1} # 1D array consisting all student types
  open::Bool
  Course(name::String) = new(name::String, String[], false)
  Course(name::String, members) = new(name::String, members, length(members) >= 5)
end

# -> OUTER+INNER CONSTRUCTOR FUNCTION

struct User
  name::String
  id::Int

  function User(name::String, id::Int)
    id <= 0 && error("ID must be positive")
    new(name, id)
  end
end

User(name::String) = User(name, 1)  # outer constructor with default ID


# -> PRIVATE CONSTRUCTOR PATTERN

# @kwdef MACRO
@kwdef struct Foo
  a::Int = 1
  b::String
end
methods(Foo)
# is same as:
struct Foo_alt
  a::Int
  b::String
end
function Foo_alt(; a=1, b)
  Foo(a, b)
end

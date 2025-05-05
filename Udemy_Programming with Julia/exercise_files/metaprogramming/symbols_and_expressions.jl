# > SYMBOL
a = 7
b = 8
sum = a + b
s = :sum
eval(s) # :sum

num = 7 + 8
s = :num
typeof(s) # Symbol
supertype(Symbol) # Any
# Symbols are immutable, interned objects that are used to represent names in Julia.
# They are often used as keys in dictionaries or as identifiers for variables, functions, and types.
# Symbols are created using the colon (:) syntax, and they are unique in the Julia language.
# For example, the symbol :x is different from the variable x, even if x is defined as a symbol.
# Symbols are often used in metaprogramming, where they can be used to represent variable names, function names, and other identifiers.
# They are also used in macros, where they can be used to represent code fragments or expressions.
# Symbols are not strings, and they are not interchangeable with strings.
# Strings are mutable, while symbols are immutable.

s
dump(s)
eval(s)

# SYMBOLS USED IN EXPRESSIONS
x = 10
expr = Expr(:call, :+, :x, 5)  # Symbol :x is part of the expression
eval(expr)  # evaluates to 15
# SYMBOLS AS DICT KEYS
d = Dict(:name => "Alice", :age => 30)
d[:name]  # "Alice"
#  ACCESS STRUCT FIELDS
struct Person
  name::String
  age::Int
end
p = Person("Bob", 40)
getfield(p, :name)  # "Bob"
setfield(p, :name, "Alice")
# MACROS
macro sayhello(var1, var2)
  return :(println("Hello, ", $var1, ", ", $var2))
end
@sayhello :world :erhan  # → println("Hello, ", world)
@sayhello :erhan  # → println("Hello, ", erhan)


# > EXPRESSION

# -> SINGLE-LINE MANUAL EXPR CREATION
:(a + b) # Expression

ex = :(a + b)
ex_alt = Meta.parse("a + b")
typeof(ex) # Expr
supertype(Expr) # Any
# Expressions are a fundamental part of the Julia language, and they are used to represent code fragments or expressions.

a = 7;
b = 6.4;
c = 2.3;
eval(ex)

ex = :(3x - 7y + z * t)
dump(ex)
# same as:
ex |> dump

ex.head # :call
ex.args
ex.args[2].args
using GraphRecipes, Plots
plot(ex, fontsize=16)

# -> MULTI-LINE MANUAL EXPR CREATION
multi = :(
  begin
    a + b
    b - c
  end
)
multi.head

funcexp = :(
  function f(x, y)
    x + y
  end
)
funcexp.head

loopexp = :(
  for i in 1:10
    println(i)
  end
)
loopexp.head

ifexp = :(
  if a > b
    println("a is greater than b")
  elseif a < b
    println("a is less than b")
  else
    println("a is equal to b")
  end
)
ifexp.head

strexp = :(
  mutable struct Point
    x::Float64
    y::Float64
  end
)
strexp.head

multi_alt = quote
  a + b
  b - c
end
multi_alt.head

eval(multi_alt)
dump(multi_alt)
propertynames(multi_alt)
multi_alt.head
multi_alt.args

# -> PROGRAMMATIC EXPR CREATION VIA EXPR() FN
ex = Expr(:call, :+, :a, :b) # :(a+b)
ex = Expr(:call, :+, 7, 8) # :(7+8)
eval(ex) # Evaluates the expression

propertynames(ex) # Just lists the property names of the AST
dump(ex) # Evaluates the expression and creates a detailed AST
# same as:
ex |> dump

ex.head # :call
ex.args
using GraphRecipes, Plots # Helper libraries to visualize the expression
plot(ex, fontsize=16)

:(
  mutable struct Point
    x::Float64
    y::Float64
  end
)
Expr(:struct, true, :Point,
  Expr(:block,
    :(x::Float64),
    :(y::Float64)
  )
)
Expr(:struct, true, :Point,
  Expr(:block,
    Expr(:(::), :x, :Float64),
    Expr(:(::), :y, :Float64)
  )
)


# Manual version
:(
  if a > b
    println("a is greater than b")
  elseif a < b
    println("a is less than b")
  else
    println("a is equal to b")
  end
) # head :if

# Programmatic version
ifexp = Expr(:if,
  Expr(:call, :>, :a, :b),
  :(println("a is greater than b")),
  Expr(:elseif,
    Expr(:call, :<, :a, :b),
    :(println("a is less than b")),
    :(println("a is equal to b"))
  )
)

x = 5
:($x - 5y) # :(5-5y)
:(x - 5y) # :(x-5y)

:(:x) |> dump
:(a = :x) |> dump

ref = QuoteNode(:x) # QuoteNode is a special type of expression that represents a quoted expression
ref |> dump
:(var = $ref) |> dump # $ref is a quoted expression that evaluates to the value of ref

ref2 = :var
:(var2 = $ref2)
:(var2 = $ref2) |> dump

a = 1
b = 2
x = a * b

ref = QuoteNode(:x)
:(var = $ref) |> eval

ref = :x
:($ref) |> eval
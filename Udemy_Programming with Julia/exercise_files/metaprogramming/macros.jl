# SINGLE ARG MACRO
macro hello(exp)
  println("Hello ", exp)
end
macro hello(exp)
  :(println("Hello ", $exp))
end

@hello("World!")
@hello "World!"
@hello World!

# MULTI ARG MACRO
macro hello1(exp1, exp2)
  println("Hello ", exp1, " and ", exp2)
end
macro hello1(exp1, exp2)
  :(println("Hello ", $exp1, " and ", $exp2))
end

@hello1("World!", "Universe!")
@hello1 "World!" "Universe!"
@hello1 World! Universe!

function func_hello(exp)
  println("Hello ", $exp)
end
func_hello("World!")

@hello World!
func_hello(World!)
func_hello(:World!)

macro hello3(exp)
  :(
    println("Hello ", $(string(exp)))
  )
end
@hello3 erhan

macro myprint(ex)
  :(
    println($ex)
  )
end
@myprint "Julia"
@macroexpand @myprint x

macro myprint_alt(x)
  :(
    println($(esc(x)))
  )
end
@myprint_alt "Julia"
@macroexpand @myprint_alt x

function _my_print(x)
  @myprint x
end
x = "Pyhton"
_my_print("Julia")
@macroexpand @myprint x

f(x) = x + 8
g(x) = x^3
h(x) = x / 10
f(g(h(4)))
4 |> h |> g |> f
macro chain(x, fns...)
  ex = esc(x)
  for fn in fns
    ex = Expr(:call, fn, ex)
  end
  return ex
end

@chain 4 h g f
@chain 4 x -> x / 10 x -> x^3 x -> x + 8
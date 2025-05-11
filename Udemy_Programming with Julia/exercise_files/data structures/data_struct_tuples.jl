# > TUPLES
tpl = (3, 3, "Julia", 4.12)
tpl_new = 3, 3, "Julia", 4.12
typeof(tpl)
typeof(tpl_new)
tpl == tpl_new
tpl === tpl_new
tpl ⧣ tpl_new

# Tuple creator function
tpl3 = tuple(3, "Julia", 4.123)
tpl3[end]
tpl3[begin]

# Type casting in Tuples
tpl1::Tuple{Int,Int,Int,Int} = (3, 3, 2022, round(Int, 4.12))

t = (6)
typeof(t) # Its not a tuple
t1 = (6,)
typeof(t2) # Its a tuple

new_tpl = (10, tpl[2:3], tpl[4])  # ✅ Creates a new tuple
println(new_tpl)  # (10, (3, "Julia"), 4.12)

tpl = (name="Julia", year=2012, version=1.7)
typeof(tpl)
println(tpl.name)  # Julia
println(tpl[1])  # Julia

x, y, z = (MathConstants.pi, MathConstants.e, MathConstants.φ)
printyln(x, y, z)  # (3.141592653589793, 2.718281828459045, 1.618033988749895)

nt = (1, 2, 3, 4)
typeof(nt)

tp = ntuple(x -> x^3, 5)
println(tp)  # (1, 8, 27, 64, 125)

tpl = ntuple(i -> i * 10, 6)
println(tpl)  # (10, 20, 30, 40, 50, 60)

in(20, tpl)
20 ∈ tpl # \in TAB

!in(20, tpl)
20 ∉ tpl # \notin TAB

t = ("a", "b", "c");
println("x" in t)

Tuple([42])  # Converts from a list (42,)
Tuple(42) # Converts from an integer (42,)
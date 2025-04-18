# SPLATTING @ RANGES
x = (1:10...,)

# SPLATTING @ TUPLES
a, b, c... = (2.1, 3, 0, -1, "nero")
println(c)

# SPLATTING @ ARRAYS
a, b, c... = [1, 2, 4, 5, 6, 11, 1111, 1]
println(c)
typeof(c)

function printargs(a, b, c)
  println(a)
  println(b)
  println(c)
end
tpl = ["math", "physics", "chemistry"]
printargs(tpl...)
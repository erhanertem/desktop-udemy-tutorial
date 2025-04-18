# > FUNCTION DECLARATIONS

function greet(x)
  println("Hello, $x !")
end
greet("Erhan")

greet(x) = println("Hello, $x !")
greet("Erhan")

function mymax(arr)
  maxnum = typemin(Int64)
  for i in arr
    if i > maxnum
      maxnum = i
    end
  end
  return maxnum
end

function greet()
  println("Hello, World!")
  return nothing # Explicit return of nothing
end

function power(x, y)
  x^y
end

p(x, y) = x^y
p(2, 3)
Φ(x, y) = x^y
p = Φ
p(2, 3)


function fact(n::Int)::Int
  f = 1
  for i in 1:n
    f *= i
  end
  return f
end
fact(5)

function absDiff(x, y)
  if x > y
    return x - y
  else
    return y - x
  end
end
absDiff(5, 3)

# Math operators as functions
*(3, 4, 5)
m = *
m(3, 4, 5)

function findmeansd(arr)
  total = 0
  n = 0
  for i in arr
    total += i
    n += 1
  end
  μ = total / n
  σ = 0
  for i in arr
    σ += (i - μ)^2
  end
  σ = sqrt(σ / n)
  return μ, σ
end
arr = [1, 2, 3, 4, 5]
avg, sd = findmeansd(arr) # Assign returned data to variables

res = findmeansd(arr)
res[1] # Access Tuple elements using index
res[2]

# > ARROW FUNCTIONS
x -> 3x^2 + 5x - 4

g = x -> 3x^2 + 5x - 4
g(5)

(x, y, z) -> (x^3 - y^2) / z^3

# A curried-style anonymous function that adds a fixed number
add_n = n -> x -> n + x
add5 = add_n(5)  # Now add5 is a function that adds 5
println(add5(10))  # Output: 15

# A higher-order function that returns a function to filter and transform an array
make_filter_transform = (threshold, func) -> arr -> map(func, filter(x -> x > threshold, arr))
# Create a new function that filters elements > 10, then doubles them
double_if_gt10 = make_filter_transform(10, x -> x * 2)
arr = [4, 8, 11, 15, 2, 22]
println(double_if_gt10(arr))  # Output: [22, 30, 44]

# > ANONYMOUS FUNCTIONS
f = function (x)
  return x^2
end
f(5)

fact(n) = (n == 0) ? 1 : n * fact(n - 1)
fact(5)
fact(0)

fibo(n) = n < 2 ? n : fibo(n - 1) + fibo(n - 2)
fibo(0)
fibo(1)
fibo(2)
fibo(3)
fibo(10)

function volume(l, w, h)
  return l * w
end
volume(1, 2, 1)
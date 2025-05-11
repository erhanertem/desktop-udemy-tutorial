# PIPE OPERATOR
x = rand(-10:10, 20)
square(x) = x .^ 2
x |> square |> sum

f(g(h(x)))
x |> h |> g |> f

# CIRCULAR OPERATOR
x = rand(-10:10, 20)
square(x) = x .^ 2
(sum ∘ square)(x) # \circ TAB

str = "Ali went to school yesterday"
str |> split |> length
str = "Ali went to school yesterday"
str |> split .|> length
str |> split .|> first

# root mean square error
using Statistics
x = [1, 2, 3, 4, 5]
result = x |> (el -> el .- sum(el) / length(el)) .|> square .|> mean .|> sqrt
println(result)  # ≈ 1.5811 (standard deviation)

maximum(abs2, [1, -2, 3])
maximum(square, [1, -2, 3])
mutable struct Layer
  w::Array{Float64,2}
end

Layer(input::Int, output::Int) = Layer(randn(Float64, (output, input)))
(l::Layer)(x) = l.w * x
l1 = Layer(3, 4)
l1.w
l2 = Layer(4, 3)
l2.w
l3 = Layer(3, 1)
l3.w

x = [5, 7, 9]

l1_values = l1(x)
l2_values = l2(l1_values)
ŷ = l3(l2_values)

mutable struct Network
  layers
  # Inner constructor
  Network(layers...) = new(layers)
end

# SHORTHAND VERSION
(n::Network)(x) = (for l in n.layers
  x = l(x)
end; x)
# LONGHAND VERSION
function (n::Network)(x)
  for l in n.layers
    x = l(x)
  end
  return x
end

nn = Network(l1, l2, l3)
nn.layers[1].w
nn.layers[2].w
nn.layers[3].w
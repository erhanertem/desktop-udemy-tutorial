mutable struct model{R}
  coefficients::Vector{R}
end

function (m::model)(x)
  return sum(x .* m.coefficients)  # element-wise multiply + sum
end

lm = model([1, 3, 5])
lm([2, 4, 6])

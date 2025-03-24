typemax(Int8)
typemax(Int16)
typemin(Int16)
typemax(Int64)
typemin(Int64)

typeof(12)

# Float64
3.14e2
12.3e-2
typeof(2.2e-2)
# Float32
2.2f2
typeof(2.2f2)

# Using data types for conversion
typeof(3.1)
Int16(3.0)

α = 253.12
sizeof(α)

# Digit readibility
x = 5_000_000_000

# Infinity
Inf
-Inf
Inf16
Inf32
1 / Inf # 0
1 / 0 # Inf

# NaN
0 / 0
0 * Inf

a = 1;
b = 3;
c = 5;
isinf(a / b)
isnan(b / c)

eps()
eps(Float32)
eps(Float16)

eps(1.0)
eps(1000.0)

typeof(true)
typeof(false)

Bool(1)
Bool(0)
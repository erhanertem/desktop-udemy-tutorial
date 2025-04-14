# > RANGES
1:10
rng = 1:10
collect(rng)
sizeof(1:10)
sizeof(collect(rng))
typeof(rng)
supertype(UnitRange)

rang2 = 1:2:20
range3 = 20:-2:1

range(start=0, step=2, stop=20)
range(2, length=10)
range(2, stop=10)
range(4, step=4, length=10)

LinRange(1, 10, 3)

# rng = 1:2:9;
rng = range(start=5, stop=25, length=9)
length(rng)
collect(rng)
println(rng[1])
println(rng[end])
println(rng[begin])
# println(rng[12])

# Converting a range to an array
arr = collect(rng)
arr = Array(rng)
arr = [x for x in arr]

collect(LinRange(1, 10, 5))
collect(range(1, 10, length=5))

rng = LinRange(0, 10, 6);
collect(rng)
println(rng[4])
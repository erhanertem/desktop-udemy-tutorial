using DataFrames, RDatasets
iris = dataset("datasets", "iris")
iris.SepalLength
iris[iris.SepalLength.>7, :]  # Qualifying rows for all columns
iris[1 .< iris.PetalWidth .< 2, :]  # Qualifying rows for all columns

iris[(iris.SepalLength.>7).&(1 .< iris.PetalWidth .< 2), :]  # Combined qualifation filtering
in(iris.PetalWidth[1], [0.4]) # in(x, collection) Checks if x is in the collection
in(iris.PetalWidth[1], [0.4, 2.0, 2.5]) # in(x, collection) Checks if x is in the collection

in.(iris.PetalWidth, Ref([0.4, 2.0, 2.5]))
iris[in.(iris.PetalWidth, Ref([0.4, 2.0, 2.5])), :]
# same as:
in([0.4, 2.0, 2.5]).(iris.PetalWidth)
iris[in([0.4, 2.0, 2.5]).(iris.PetalWidth), :]

iris[(1 .< iris.PetalWidth).&(iris.PetalWidth.<2), :]
# Same as:
subset(iris, :PetalWidth => x -> (1.4 .< x) .& (x .< 1.8))


iris[in.(iris.PetalWidth, Ref([0.4, 2.0, 2.5])), :]
iris[in([0.4, 2.0, 2.5]).(iris.PetalWidth), :]
# same as:
subset(iris, :PetalWidth => x -> in.(x, Ref([0.4, 2.0, 2.5])))

df = DataFrame(A=[1, 2, missing, 5, 6, missing, missing, 10, 11], B=collect(21:29))
subset(df, :A => x -> iseven.(x))
subset(df, :A => x -> iseven.(x), skipmissing=true)
# same as:
subset(df, :A => x -> coalesce.(iseven.(x), false))
coalesce(iseven(7), false)
coalesce(iseven(3), false)

filter(row -> row.SepalWidth == 3, iris)

df = DataFrame(A=[1, 2, missing, 5, 6, missing, missing, 10, 11], B=collect(21:29))
subset(df, :A => x -> .!ismissing.(x))
using DataFrames, RDatasets
iris = dataset("datasets", "iris")

# > DF MUTATORS
# -> select() - CREATES A NEW DF (SHALLOW COPY)
select(iris, r"Width")
select(iris, r"^Vray.*Length.*bro!$") # Starts with Vray, includes Length anywhere and ends with bro!
select(iris, Not(:Species))
select(iris, :SepalLength => :s1, :SepalWidth => :sw, :PetalLength => :p1, :PetalWidth => :pw, :Species => :sp)

mean(x) = sum(x) / length(x)
absdiff(x) = (x .- mean(x)) .|> abs
select(iris, :SepalLength => (x -> absdiff(x)))
select(iris, :SepalLength => (x -> absdiff(x)) => :s1_diff) # Rename the output DF column name

select(iris, :SepalLength => ByRow(x -> x^2) => :sl_sq)
select(iris, :SepalLength => (x -> x .^ 2) => :sl_sq)

select(iris, :SepalLength => ByRow(x -> sqrt(x)) => :sl_sq)
select(iris, :SepalLength => ByRow(sqrt) => :sl_sq)

select(iris, [:SepalLength, :PetalLength] => ((x1, x2) -> (x1 .+ x2) ./ 2) => :meanLength)
select(iris, [:SepalLength, :PetalLength] => ByRow((x1, x2) -> (x1 + x2) / 2) => :meanLength)

values_fn(x) = minimum(x), mean(x), maximum(x)
values_fn([1, 5, 10])
select(iris, AsTable(Not(:Species)) => ByRow(values_fn) => [:min, :mean, :max])

df = select(iris, :PetalLength)
df.PetalLength === iris.PetalLength

df = select(iris, :PetalLength, copycols=false)
df.PetalLength === iris.PetalLength

df = deepcopy(iris)
df = copy(iris)

copy_df = copy(df[:, :a])
df = DataFrame("a" => [1, 2, 3], "b" => ["a", "b", "c"])
copy_df = df[:, :a]
copy_df = df[:, [:a]]
copy_df .= 10000
copy_df.a[1] = 3000
df
copy_df

df1 = DataFrame(a=[[1, 2], 2], b=["x", "y"])
df2 = copy(df1)
df2.a[1][1] = 999  # This WILL affect df1 because `df2.a` refers to the same array
df2
df1

df1 = DataFrame(a=[[1, 2], 2], b=["x", "y"])
df2 = df1[:, :]
df2.a[1][1] = 999  # This WILL affect df1 because `df2.a` refers to the same array
df2
df1

df1 = DataFrame(a=[[1, 2], 2], b=["x", "y"])
df_col = select(df1, :a)
df_col.a[1][1] = 999
df2 = select(df1, :)
df2.a[1][1] = 2000  # This WILL affect df1 because `df2.a` refers to the same array
df_col
df2
df1
df2 = select(df1, :a => deepcopy, :b => deepcopy)
df2 = deepcopy(df1)

df1 = DataFrame(a=[[1, 2], 2], b=["x", "y"])
df2 = deepcopy(df1)
df2.a[1][1] = 999  # This does NOT affect df1
df2
df1

df1 = DataFrame(a=[[1, 2], 2], b=["x", "y"])
v = view(df1, 1:2, [:a])
v .= 99   # Mutates df1
df1

df1 = DataFrame(a=[[1, 2], 2], b=["x", "y"])
df1[!, :a][1] .= 88  # Mutates the original column
df1

df = deepcopy(iris)
select!(df, r"Sepal")

df = iris[:, Not(:Species)]
select(df, All() => (+) => :rowSums)

select(df, All() => mean)  # Compute the mean of every column
select(df, Not(All()))  # Select nothing (useful in edge logic)

# -> transform() - MUTATES THE EXISTING DF
transform(df, All() => (+) => :rowSums)
df

transform!(df, All() => (+) => :rowSums)
df

using DataFrames, RDatasets, Statistics
iris = dataset("datasets", "iris")
df = deepcopy(iris)
df = iris[:, Not(:Species)]
transform(df, AsTable(:) => ByRow(mean) => :rowMean)
transform(df, AsTable(:) .=> ByRow.([minimum, mean, maximum]) .=> [:min, :mean, :max])

df = DataFrame(x=[1, 2, missing, 3, 4, missing], y=[missing, 6, missing, 7, 8, 9], z=[10, missing, 11, missing, 12, missing])

transform(df, AsTable(:) => ByRow(x -> count(ismissing, x)) => :n)

transform(df, AsTable(:) => ByRow(x -> count(!ismissing, x)) => :n)
transform(df, AsTable(:) .=> ByRow.(x -> (sum ∘ skipmissing)(x)) .=> [:sum])
transform(df, AsTable(:) .=> ByRow.(sum ∘ skipmissing) .=> [:sum])

transform(df, AsTable(:) .=> ByRow.([x -> count(!ismissing, x), minimum, mean, maximum]) .=> [:n, :min, :mean, :max])
transform(df, AsTable(:) .=> ByRow.([sum ∘ skipmissing, minimum, mean, maximum]) .=> [:n, :min, :mean, :max])

describe(df)

iris[!, [:SepalLength, :PetalLength]] |> describe

# combine(df, transformations...) creates a new DF
DataFrames.combine(iris, DataFrames.names(iris, Not(:Species)) .=> mean)

DataFrames.combine(iris, :SepalLength => mean)



vec = [1, missing, 2, missing, 3]
sum(vec)
sum(skipmissing(vec))
vec |> skipmissing |> sum
(sum ∘ skipmissing)(vec)

A = [1 missing;
  2 3;
  missing 4]
# Flatten and skip `missing`
iter = skipmissing(A)
# Now you can use aggregation functions
sum(iter)         # 10
mean(iter)        # 10 / 4 = 2.5
collect(iter)     # [1, 2, 3, 4]


df = DataFrame(a=1:3, b=4:6, c=7:9)
select(df, AsTable(:) => ByRow(x -> sum(values(x))) => :row_sum)
select(df, AsTable(:) => ByRow(x -> sum(x)) => :row_sum)
select(df, AsTable(:) => ByRow(sum) => :row_sum)

using DataFrames

# Create a DataFrame with a column of arrays (mutable!)
df = DataFrame(a=[[1, 2], [3, 4], [5, 6]])
df2 = transform(df, :a => ByRow(x -> (x[1] = 999; x)) => :a)
df2 = transform(df, :a => ByRow(x -> (x2 = copy(x); x2[1] = 999; x2)) => :a)

df = DataFrame(a=[1, 2, 3, 4, 5, 6], b=[0, 4, 99, 2, 33, 12])
df2 = transform(df, [:a, :b] => ByRow((x, y) -> sum((x, y))) => :c)
df2 = transform(df, [:a, :b] => ByRow((x, y) -> x + y) => :c)
df2 = transform(df, All() => ByRow((x...) -> sum(values(x))) => :c)
df2 = transform(df, AsTable(:) => ByRow(x -> sum(values(x))) => :c)

df2 = transform(df, :a => (sum) => :c)
df2 = transform(df, :a => (+) => :c)
df2 = transform(df, :a => ByRow(x -> (x = 999)) => :c)

println(df)
println(df2)

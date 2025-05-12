import Pkg
Pkg.add("DataFrames")

using DataFrames
# DataFrame()
df = DataFrame(x=[3, 4, 5, 6], y=[3.2, 4.5, 6.7, 8.5], z1=["AAA", "BBB", "CCC", "DDD"], z2=true)
df.x
df."x"
df[!, :z1] #  Returns the actual column vector from the DataFrame.
df[!, "z1"]
df[!, 1]
df[1, :z1]
df[1:2, :z1]
using DataFrames

df = DataFrame(x=[1, 2, 3])
df.x[1] = 100      # modifies df
# OR
df[!, :x][1] = 200 # also modifies df


df.x .= 10
df[!, :z2] .= false
df

df_copy1 = df[!, :x]
df_copy2 = df[:, :x]
df_copy1 == df_copy2
df_copy1 === df_copy2

df_copy = df[:, :x]  # Returns a copy of the column (safe to modify; doesn't affect original).
df_copy .= 20
df_copy
df.x

copy_col = copy(df[:, :x])
copy_col .= 10000
df.x
df_copy
copy_col

df_copy == copy_col

df
names(df)
names(df, r"z")
names(df, Not(r"z"))
names(df, Float64)
names(df, Not(:z2))

propertynames(df)

df = DataFrame()
df.x = [3, 4, 5, 6, 7, 8, 9, 10]
df.y = [3, 4, 5, 6, 7, 8, 9, 10]
df[!, :y] = [3.1, 4.2, 5.3, 6.4, 7.5, 8.6, 9.7, 10.8]
df[!, "z"] .= true
df[:, "z"] .= true
df

size(df) # measure of rows and columns
size(df, 1) # measure of rows
size(df, 2) # measure of columns

df = DataFrame(x=Int64[], y=Float64[], z=String[])
push!(df, [1, 2.78, "e"]) # Add as a Vector/Arrayx1D
push!(df, (10, 1.18, "pi")) # Add as a Tuple
push!(df, Dict(:x => 111, :y => 5.138, :z => "d")) # Add as a Dictionary
pushfirst!(df, [66, 6.6, "prima"]) # Add as a Vector/Arrayx1D

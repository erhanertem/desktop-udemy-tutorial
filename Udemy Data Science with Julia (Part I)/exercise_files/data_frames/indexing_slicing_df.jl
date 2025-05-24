import Pkg;
Pkg.add("RDatasets");
Pkg.add("DataFrames");

using DataFrames, RDatasets

iris = dataset("datasets", "iris")
maximum(iris.SepalLength)
# READ DATAFRAME
iris
show(iris) # same as iris
show(iris, allrows=true) # Uncropped full-list version

# PARTIAL DATA EXTRACT
# SINGLE EXTRACT
iris[1, :SepalLength] # 1st row, SepalLength columns
iris[1, "SepalLength"] # 1st row, SepalLength columns
iris[1, 2] # 1st row, 2nd column single value extract
# MULTIPLE EXTRACT
iris[[3, 7, 9], [1, 2, 5]] # 3rd, 7th, and 9th row, 1st, 2nd, and 5th column multiple value EXTRACT
iris[1:5, 2:3] # 1st to 5th row, 2nd to 3rd column multiple value EXTRACT
iris[1:5, [:SepalLength, :SepalWidth]] # 1st to 5th row, SepalLength and SepalWidth columns
iris[1:5, ["SepalLength", "SepalWidth"]] # 1st to 5th row, SepalLength and SepalWidth columns
iris[:, 2] # 2nd column all rows
iris[:, :SepalLength] # All rows, SepalLength column - returns a vector
iris[:, [:SepalLength]] # All rows, SepalLength column - returns a df
iris[:, [:SepalLength, :SepalWidth]] # All rows, SepalLength and SepalWidth columns
iris[:, ["SepalLength", "SepalWidth"]] # All rows, SepalLength and SepalWidth columns
iris[:, 2:end] # 2nd column to last column all rows
iris[end-9:end, 1:2] # last 10 rows, 1st and 2nd column

iris[!, r"Width"] # All rows, columns with "Width" in the name
iris[!, Not(r"Width")] # All rows, columns without "Width" in the name

iris[:, Between(:SepalWidth, :PetalLength)] # All rows, columns between SepalWidth and PetalLength

iris[!, All()] == iris[!, :]# All rows, all columns

iris[:, Cols(col -> endswith(col, "Length"))]

iris[:, Cols("Species", "SepalLength", "PetalLength", "SepalWidth")]

# Specify selected column names in order
selected = ["Species", "SepalLength", "PetalLength"]
# Compute remaining columns
remaining = setdiff(names(iris), selected)
# Reorder DataFrame columns
iris[:, [selected..., remaining...]] # All rows, selected columns first, remaining columns last
iris[:, Cols("Species", "SepalLength", "PetalLength", :)] # All rows, selected columns first, remaining columns last
iris[:, Cols("Species", "SepalLength", "PetalLength", Not(:SepalWidth))] # All rows, selected columns first, remaining columns last
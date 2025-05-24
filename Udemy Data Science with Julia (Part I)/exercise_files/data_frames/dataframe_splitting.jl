using DataFrames, CSV, Statistics

hflights = CSV.read("data_frames/hflights.csv", DataFrame)
names(hflights)

unique([1, 1, 4, 5, 2, 1, 2, 0.1])

hflights.Origin |> unique
unique(hflights.Origin)

hflights.Dest |> unique
hflights.UniqueCarrier |> unique

origin_grp = groupby(hflights, :Origin)

combine(origin_grp, :DepDelay => mean)
combine(origin_grp, :DepDelay => (x -> x |> skipmissing |> mean) => :mean_DepDelay)
combine(origin_grp, :DepDelay => (mean ∘ skipmissing) => :mean_DepDelay)
combine(origin_grp, :DepDelay)

combine(origin_grp, :ArrDelay => mean ∘ skipmissing => :mean_ArrDelay, :DepDelay => mean ∘ skipmissing => :mean_DepDelay)

combine(origin_grp, :Distance => (x -> [Base.extrema(x)]) => [:minDist, :maxDist])

combine(origin_grp, AsTable([:ArrDelay, :DepDelay]) => (df -> (df.ArrDelay + df.DepDelay) |> skipmissing |> mean) => :mean_ArrDepDelay)
combine(origin_grp, [:ArrDelay, :DepDelay] => ((x, y) -> mean(skipmissing(x + y))) => :mean_ArrDepDelay)

combine(df -> (; mean_ArrDepDelay=mean(skipmissing(df.ArrDelay + df.DepDelay))), origin_grp)
combine(df -> (; mean_ArrDepDelay=mean(skipmissing(df.ArrDelay + df.DepDelay)),
    std_ArrDepDelay=std(skipmissing(df.ArrDelay + df.DepDelay))),
  origin_grp)

combine(origin_grp, df -> (; mean_ArrDepDelay=mean(skipmissing(df.ArrDelay + df.DepDelay))))
combine(df -> ((df.ArrDelay + df.DepDelay) |> mean ∘ skipmissing), origin_grp)
combine(origin_grp, :Distance => (df -> (minDist=minimum(df), maxDist=maximum(df))) => AsTable)

# tpl = (name="Julia", year=2012, version=1.7)
# tpl = (; name="Julia", year=2012, version=1.7)
# NamedTuple{(:name, :year, :version)}(("Julia", 2012, 1.7))

combine(origin_grp, nrow, proprow)

using DataFrames, Statistics
df = DataFrame(team=["A", "A", "B", "B"], score=[1, 2, 3, 4])
gdf = groupby(df, :team)
combine(gdf, :score => mean)
combine(gdf, :score)


df = DataFrame(a=1:5, b=['a', 'b', 'c', 'd', 'e'])
nrow(df)  # returns 5

using DataFrames, Statistics
df = DataFrame(team=["A", "A", "B", "B"], score=[1, 2, 3, 4])
gdf = groupby(df, :team)
combine(gdf, :score => mean)  # group-wise mean of :score

df = DataFrame(a=1:5, b=6:10)
combine(df, :a => sum, :b => mean)  # computes aggregate results
select(df, :a => sum, :b => mean)

insertcols!(df, 2, :NewCol => [missing, 1, 2, 3])      # Insert column

sort(df, :NewCol, rev=true) # Descending Sort by column A
sort(df, :NewCol, rev=false) # Ascending Sort by column A

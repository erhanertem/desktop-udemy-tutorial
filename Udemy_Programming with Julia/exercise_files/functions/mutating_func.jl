x = [35, 76, -43, 12, 1 - 45]
sort(x, rev=true)
println(x) # x is unchanged
# The function sort! mutates the array x
sort!(x, rev=true)
println(x) # x is changed
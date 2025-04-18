arr = [5, 8, 12, 17, 24, 42]
sqarr = Int64[]

for i in arr
  append!(sqarr, i^2)
end
sqarr = map(i -> i^2, arr)

println(sqarr)

arr = [5, 8, 12, 17, 24, 42]
sum_ = reduce(+, arr)

sqarr = map(i -> i^2, arr)
sumsqr = reduce(+, sqarr)
# same as:
mapreduce(i -> i^2, +, arr)

x = [1, 2, 3, 4];
y = [4, 5, 6, 7];
mapreduce(*, +, x, y)

filter(i -> i % 4 == 0, arr)

struct Course
  subject::Symbol
  field::Symbol
  ncourses::Int
  nstudents::Int
end
coursedata = [Course(:CS, :AI, 5, 100), Course(:CS, :ML, 3, 50), Course(:CS, :DL, 4, 75), Course(:MATH, :CALC, 2, 30), Course(:MATH, :ALGEBRA, 1, 20)]
nprog = filter(x -> x.field == :AI, coursedata)

function nfield(data, subject)
  filteredarr = filter(i -> i.subject == Symbol(subject), data)
  return mapreduce(x -> x.ncourses * x.nstudents, +, filteredarr)
end
println(nfield(coursedata, "CS"))

map(arr) do x
  if (x % 2 == 0) && (x % 3 != 0)
    return "Div2"
  elseif (x % 3 == 0) && (x % 2 != 0)
    return "Div3"
  else
    return "DivNone"
  end
end

arr = [1, 2, 3, 4, 5];
filter(iseven, arr)
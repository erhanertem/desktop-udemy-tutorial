using Dates

function gettime(myfunction)
  t0 = Dates.now()
  result = myfunction()
  t1 = Dates.now()
  duration = t1 - t0
  println("Time taken: ", duration)
  return result
end

# ❌ This will not work as the function is called before being passed
gettime(rand(1_000_000))
gettime(println("Hello, World!"))

# ✅ Correctly passed as a function argument
gettime(() -> println("Hello, World!"))
gettime(() -> rand(1_000_000))

# ✅ Correctly passed as a function argument
func() = rand(1_000_000)
gettime(func)

# ✅ Using Julia macros to measure time
@time begin
  sleep(1)
  println("Hello, World!")
end
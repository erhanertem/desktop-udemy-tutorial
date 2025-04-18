function positionalargs(x, y=1, z=1)
  println("x: ", x)
  println("y: ", y)
  println("z: ", z)
end
positionalargs(1, 1, 1) # ✅ Provide all args
positionalargs(1) # ✅ Use provided default values
positionalargs(1, z=5) # ❌ Can't skip arg



function keywordargs(x; y=1, z=1)
  println("x: ", x)
  println("y: ", y)
  println("z: ", z)
end
keywordargs(1, z=10)
keywordargs(1, z=10, y=3)

function keywordargs(x; y=1, z=1, t)
  println("x: ", x)
  println("y: ", y)
  println("z: ", z)
  println("t: ", t)
end
keywordargs(1, z=10, t=1)

function keywordargs(; y=1, z=1, t)
  println("y: ", y)
  println("z: ", z)
  println("t: ", t)
end
keywordargs(t=0)

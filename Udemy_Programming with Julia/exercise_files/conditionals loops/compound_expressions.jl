volume = begin
  a = 12
  b = 9
  c = 5
  a * b * c
end

# Its similar to IIEF functions in JS - Creates a local scope and executes and assigns the output to the volume variable.

area = begin
  a = 12
  b = 9
  c = 5
  2 * (a * b + a * c + b * c)
end
newRes = a + b

area = (a = 12; b = 9; c = 5; 2 * (a * b + a * c + b * c))

x = (a = 10; b = 5; a + b);
begin
  a = 20
  b = 15
  println(a + b)
end
println(x)
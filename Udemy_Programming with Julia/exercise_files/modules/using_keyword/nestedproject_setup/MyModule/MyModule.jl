module MyModule

export greet, add

greet() = println("Hello from MyModule!")
add(x, y) = x + y
sub(x, y) = x - y  # Not exported

end

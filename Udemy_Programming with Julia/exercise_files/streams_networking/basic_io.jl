read(stdin, Char)
write(stdout, "Julia is cool")

println("Enter your name:")
name = readline(stdin)
println("Hello, $name !")

for line in eachline(stdin)
  if (line == "exit")
    break
  end
end

while !eof(stdin)             # keep looping until EOF (end of input)
  c = read(stdin, Char)       # read one character
  if c ∈ ['q', 'Q']           # if it's 'q' or 'Q', exit loop
    break
  elseif c == '\n' || !isprint(c)  # skip newline or unreadable chars
    continue
  end
  println("Read character: $c")   # print visible char
end

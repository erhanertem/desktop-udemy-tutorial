# > MANUAL I/O HANDLING
f = open(file) # Open file stream
readlines(f) # Readd file content
close(f) # Must manually close file stream

f = open(file, "r+")
write(f, "XYZ")        # Overwrites 'abc' with 'XYZ'
seekstart(f)
println(read(f, String))  # Output: "XYZdef"
close(f)

f = open(file, "w") # Open file stream for writing
write(f, "This is a new line...\n")
close(f)

f = open(file, "w+")
write(f, "Hello\n")
seekstart(f)
println(read(f, String))  # "Hello"
close(f)


f = open(file, "a") # Open file stream for appending
write(f, "This is a second new line...\n")
close(f)

f = open(file, "a+")  # Open for reading and appending
# Move the file pointer to the beginning to read existing content
seekstart(f)
println("Current contents:")
println(read(f, String))  # Read existing file contents
# Append new content
write(f, "This is a second new line...\n")
close(f)  # Close the file

# > AUTOMATIC I/O HANDLING
fname = joinpath(dirname(@__FILE__), "basic_io.txt")
open(fname) do file
  readlines(file) # Read file content
end # Close file stream automatically

open(fname) do file
  for line in eachline(file) # Read file line by line
    println(line)
  end
end # Close file stream automatically

# Read all lines first
lines = readlines("file.txt") # readlines is a one liner auto-open auto-close convinient IO function
# Modify or insert content at line 3 (index 3)
lines[3] = lines[3] * " <-- appended content"  # or assign new content
# Write everything back
open("file.txt", "w") do f
  for line in lines
    write(f, line, "\n")
  end
end

open("file.txt", "w+") do f
  # File is now empty because of "w+"

  # Write new content
  write(f, "Line 1\nLine 2\n")

  # Move back to start to read what we just wrote
  seekstart(f)
  println("Updated contents:")
  println(read(f, String))
end  # File is automatically closed


# Step 1: Read all lines
lines = readlines("file.txt")  # Automatically opens in read mode and closes
# Step 2: Modify the 3rd line (indexing starts at 1)
if length(lines) >= 3
  lines[3] = lines[3] * " <-- appended content"
else
  push!(lines, "New line for 3rd entry")
end
# Step 3: Reopen the file in "r+" mode and overwrite contents
open("file.txt", "r+") do f
  seekstart(f)  # Move to the beginning
  for line in lines
    write(f, line * "\n")
  end
  truncate(f, position(f))  # Remove leftover old content if file shrank
end

open("file.txt", "a") do f
  # ⚠️ Cannot read in "a" mode — reading is not allowed

  # Append new content
  write(f, "This is a second new line...\n")
end  # File is automatically closed here

open("file.txt", "a+") do f
  # Move the file pointer to the beginning to read existing content
  seekstart(f)
  println("Current contents:")
  println(read(f, String))  # Read existing file contents

  # Append new content
  write(f, "This is a second new line...\n")
end  # File is automatically closed here

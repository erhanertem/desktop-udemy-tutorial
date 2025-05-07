dirlist = readdir()
mkdir("trash_me")


file = joinpath(dirname(@__FILE__), "basic_io.txt")

file = "C:\\ERH\\basic_io.txt"
# Ensure directory exists
mkpath(dirname(file))
# Now it's safe to create the file
touch(file)

# REMOVE THE FOLDER
rm("C:\\ERH\\basic_io.txt")
# RENAME A FOLDER
mv("C:\\old_folder", "C:\\new_folder"; force=true)

for file in ["sales", "employees", "products"]
  path = "streams_networking\\Data_files"
  mkpath(path)
  touch("$path\\$file.txt")
end
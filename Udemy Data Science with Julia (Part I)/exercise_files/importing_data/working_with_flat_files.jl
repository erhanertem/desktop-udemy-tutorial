pwd()
cd()
readdir()

mkdir("03ImportData")
mkdir("03ImportData/newfolder")

mkpath("03ImportData/newfolder")

touch("03ImportData/newfolder/newfile.txt")

file = open("03ImportData/newfolder/newfile.txt")
readlines(file)
close(file)


fname = "03ImportData/newfolder/newfile.txt"
open(fname) do file
  lines = readlines(file)
  println(lines)
end

file = open(fname, "a")
write(file, "This is my new line...\n")
close(file)

file = open(fname, "w")
write(file, "This is my new line...\n")
close(file)

rm("03ImportData/newfolder")
rm("03ImportData")
rm("03ImportData", recursive=true)
rm("03ImportData/newfolder/newfile.txt")
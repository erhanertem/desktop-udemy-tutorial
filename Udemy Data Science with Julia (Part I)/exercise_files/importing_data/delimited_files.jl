using CSV, DataFrames
currPath = dirname(@__FILE__)
cd(currPath)
readdir()
cd("03ImportData")

student_data = CSV.read("student_data.csv", DataFrame)
student_data = CSV.read("student_data.csv", DataFrame;
  delim=';',
  header=true,
  missingstring="N/A",
  dateformat="dd/mm/yyyy")

input_data = select(student_data, 1:12) # Select 1thru12 columns on student_data DF

CSV.write("input_data.csv", input_data)
CSV.write("input_data.csv", input_data; delim="|")
CSV.read("input_data.csv", DataFrame; delim="|")

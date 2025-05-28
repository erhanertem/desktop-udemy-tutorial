using XLSX, DataFrames

pwd()

xfile = XLSX.readxlsx("03ImportData/data/student_data.xlsx")

sheet1 = xfile["student_data"] # Access shet by name
sheet1 = xfile[1] # Access sheet by sheet index

datatable = XLSX.gettable(sheet1)
typeof(datatable) #XLSX.DataTable
datatable = DataFrame(datatable)

datamatrix = XLSX.getdata(sheet1)
DataFrame(
  datamatrix[2:end, :],  # 2nd to last rows as data
  datamatrix[1, :] # 1st row as column names
)

xfile = XLSX.readxlsx("03ImportData/data/student_data.xlsx")
sheet1 = xfile[1] # Access sheet by sheet index
datarangeMatrix = sheet1["A1:AK1000"] # Access a range of cells
DataFrame(datarangeMatrix[2:end, :], datarangeMatrix[1, :])

student_data = XLSX.readtable("03ImportData/data/student_data.xlsx", "student_data")
typeof(student_data) #XLSX.DataTable
student_data = XLSX.readtable("03ImportData/data/student_data.xlsx", "student_data") |> DataFrame # XLSX.readtable(file, sheet)

mat_matrix = [1 2 3 4; 5 6 7 8; 9 10 11 12]
reshape(mat_matrix, 6, 2)


datamtx = Matrix{Any}(undef, 0, 37)
fname = "03ImportData/data/student_data.xlsx"
XLSX.openxlsx(fname,
  enable_cache=false # Tells Julia not to cache the sheet content in memory - Used to reduce memory usage for very large Excel files
) do xfile
  sheet = xfile[1] # dial into the first sheet of Excel file - sheet is a XLSX.Sheet object which could be read row-by-row or cell-by-cell
  for r in XLSX.eachrow(sheet) # r is a XLSX.Row object
    XLSX.row_number(r) % 1_000 == 0 && println("Processing row $(XLSX.row_number(r))") # print progress every 1000th row
    row = Any[r[i] for i in 1:37] # Reads the first 37 cells of the row into a Vector{Any}. Any allows for mixed types (Strings, Numbers, Dates, etc.).
    row = reshape(row, 1, 37) # Converts the 1D vector to a 1×37 matrix.
    global datamtx = vcat(datamtx, row) # Appends the row to your existing data matrix (datamtx). vcat (vertical concatenation) stacks the new row below the existing ones.
    # Note: Using global here is necessary because datamtx is defined outside the do block.
  end
end

DataFrame(datamtx, :auto) # convert to DataFrame with automatic column names
DataFrame(datamtx[2:end, :], datamtx[1, :]) # convert to DataFrame with original column names

data_lite = select(student_data, 1:12) # Select first 12 columns
XLSX.writetable("03ImportData/data/student_lite_data.xlsx", data_lite)

using DataFrames
df = DataFrame(A=1:3, B=["x", "y", "z"])
XLSX.writetable("output.xlsx", df)

mat = [1 "A"; 2 "B"; 3 "C"]
XLSX.writetable("output.xlsx", mat)

mat = [1 2; 3 4]
headers = ["X", "Y"]
XLSX.writetable("out.xlsx", mat; header=headers)

rows = [(A=1, B="x"), (A=2, B="y")]
XLSX.writetable("output.xlsx", rows)

data1 = select(student_data, 1:12) # Select first 12 columns
data2 = select(student_data, 13:24) # Select next 12 columns
XLSX.openxlsx("new_data.xlsx", mode="w") do xfile
  XLSX.addsheet!(xfile, "data1") # Create first sheet on the xlsx file
  XLSX.writetable!(xfile["data1"], data1) # Write data to first sheet
  XLSX.addsheet!(xfile, "data2") # Create second sheet on the xlsx file
  XLSX.writetable!(xfile["data2"], data2) # Write data to second sheet
end

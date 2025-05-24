df1 = DataFrame(ID=[1, 2], X=["a", "b"])
df2 = DataFrame(ID=[2, 3], Y=["y", "z"])

innerjoin(df1, df2, on=:ID)
leftjoin(df1, df2, on=:ID)
rightjoin(df1, df2, on=:ID)
outerjoin(df1, df2, on=:ID)
semijoin(df1, df2, on=:ID)
antijoin(df1, df2, on=:ID)
crossjoin(df1, df2, makeunique=true)

df1 = DataFrame(A=[1, 2])
df2 = DataFrame(B=["x", "y"])
crossjoin(df1, df2)

using CSV, DataFrames
books = CSV.read("data_frames/data_join/books.csv", DataFrame)
books_lent = CSV.read("data_frames/data_join/bookslent.csv", DataFrame)
members = CSV.read("data_frames/data_join/members.csv", DataFrame)
publishers = CSV.read("data_frames/data_join/publishers.csv", DataFrame)

innerjoin(books, books_lent, on=:Book_No)
innerjoin(books, books_lent, on=[:Book_No, :Book_Name])
innerjoin(books, books_lent, on=:Book_No, makeunique=true) # “For each book that has been lent, what are its details and the corresponding lending information?”

books
publishers
leftjoin(books, publishers, on=:Publisher => :Publisher_Name) # “What are the details of each book and its publisher?”
leftjoin(books, publishers, on=:Publisher => :Publisher_Name) |> df -> subset(df, :Publisher_No => x -> ismissing.(x))
rightjoin(books_lent, members, on=:Member_No) # “What are the details of each book that has been lent and the corresponding member information?”
leftjoin(books_lent, members, on=:Member_No)
outerjoin(publishers, books, on=:Publisher_Name => :Publisher)
outerjoin(publishers, books, on=:Publisher_Name => :Publisher, validate=(true, false))
outerjoin(publishers, books, on=:Publisher_Name => :Publisher, source=:source)
semijoin(members, books_lent, on=:Member_No) # “Which members have borrowed books?” - We are not interested in books_lent info, just the members.
antijoin(members, books_lent, on=:Member_No) # “Which members have NOT borrowed books?” - We are not interested in books_lent info, just the members.
crossjoin(members, books)

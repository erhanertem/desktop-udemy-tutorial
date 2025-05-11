# main.jl
include("BankModule.jl")
include("CustomerModule.jl")
include("Transactions.jl")

using .BankModule, .CustomerModule, .Transaction

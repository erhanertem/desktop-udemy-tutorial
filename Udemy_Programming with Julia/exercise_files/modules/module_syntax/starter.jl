
# Lists paths
LOAD_PATH
# Reset paths
empty!(LOAD_PATH)
append!(LOAD_PATH, ["@", "@v#.#", "@stdlib"])
# or similarly:
LOAD_PATH[:] = ["@", "@v#.#", "@stdlib"]

# > EDITING LOAD_PATH TO LOAD MODULE W/OUT DOT NOTATION
pwd() # Full path to root directory
@__FILE__ # Full path to the current file
dirname(@__FILE__) # Full path to the current file's directory
push!(LOAD_PATH, dirname(@__FILE__))

using BankModule
bank1 = Bank("Bank1")
BankModule.defaultBank(bank1)
bank1

# > NO EDITING LOAD_PATH, LOADING W/ DOT NOTATION TO MAIN MODULE
using .BankModule # Same as using Main.BankModule
bank1 = Bank("Bank1")
BankModule.defaultBank(bank1)
bank1

# > NAMED IMPORTS WITH USING KEYWORD
using BankModule: Bank, defaultBank

import ..CustomerModule
customer1 = CustomerModule.Customer("Customer1")
CustomerModule.defaultCustomer(customer1)
customer1

# > NAMED IMPORTS WITH IMPORT KEYWORD
import CustomerModule: Customer, defaultCustomer

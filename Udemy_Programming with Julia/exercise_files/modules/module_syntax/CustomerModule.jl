module CustomerModule

export Customer

mutable struct Customer
  name::String
  cash::Float64
  bankDeposit::Float64
  Customer(name) = new(name, 50.0, 0.0)
end

function defaultCustomer(customer::Customer)
  customer.name = "DEFAULT-" * customer.name
  customer.cash = 0
  customer.bankDeposit = 0
end

end # end of the module

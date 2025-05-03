module Transaction

using ..BankModule, ..CustomerModule
# using Main.BankModule, Main.CustomerModule
# using BankModule, CustomerModule

function deposit(cust::Customer, bank::Bank, amount::Float64)
  if cust.cash >= amount
    cust.cash -= amount
    bank.cash += amount
    bank.totalDeposit += amount
    cust.bankDeposit += amount
  else
    println("Insufficient funds in customer's cash account.")
  end
end

function withdraw(cust::Customer, bank::Bank, amount::Float64)
  if bank.cash >= amount
    if cust.bankDeposit >= amount
      bank.cash -= amount
      bank.totalDeposit -= amount
      cust.cash += amount
      cust.bankDeposit -= amount
    else
      println("Insufficient funds in customer's bank deposit account.")
    end
  else
    println("Insufficient funds in bank's cash account.")
  end
end

end # end of the module

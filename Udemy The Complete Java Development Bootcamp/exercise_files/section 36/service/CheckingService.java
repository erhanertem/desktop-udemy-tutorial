package service;

import java.math.BigDecimal;
import pojo.Account;
import pojo.Checking;
import repository.AccountRepository;

public class CheckingService implements AccountService {

  AccountRepository accountRepository;


  public CheckingService(AccountRepository accountRepository) {
    this.accountRepository = accountRepository;
  }

  public void createAccount(Checking account) {
    // this.datastore.put(account.getId(), account.clone());
    this.accountRepository.createAccount(account);
  }

  public Checking retrieveAccount(String id) {
    // return this.datastore.get(id).clone();
    return (Checking) this.accountRepository.retrieveAccount(id);
  }

  public void updateAccount(Checking account) {
    // this.datastore.put(account.getId(), account.clone());
    this.accountRepository.updateAccount(account);
  }

  public void deleteAccount(String id) {
    // this.datastore.remove(id);
    this.deleteAccount(id);
  }

  @Override
  public void deposit(String id, BigDecimal amount) {
    Checking checking = retrieveAccount(id);
    checking.setBalance(checking.getBalance().add(amount));
    updateAccount(checking);
  };

  @Override
  public void withdraw(String id, BigDecimal amount) {
    Checking checking = retrieveAccount(id);
    checking.setBalance(checking.getBalance().subtract(amount));
    updateAccount(checking);
  };
}

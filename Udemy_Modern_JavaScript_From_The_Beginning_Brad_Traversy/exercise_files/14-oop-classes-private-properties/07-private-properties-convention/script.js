class Wallet {
	constructor() {
		this._balance = 0;
		this._transactions = [];
	}

	_processDeposit(amount) {
		console.log(`Depositing ${amount}`);
		this._transactions.push({
			type: 'deposit',
			amount: amount,
		});
	}
	deposit(amount) {
		this._processDeposit(amount);
		this._balance += amount;
	}

	_processWithdraw(amount) {
		console.log(`Withdrawing ${amount}`);
		this._transactions.push({
			type: 'withdraw',
			amount: amount,
		});
	}
	withdraw(amount) {
		if (amount > this._balance) {
			console.log('Not enough balance');
			return;
		}
		this._balance -= amount;
	}

	get balance() {
		return this._balance;
	}

	get transactions() {
		return this._transactions;
	}
}

const wallet = new Wallet();
wallet.deposit(300);
wallet.withdraw(50);
console.log(wallet.balance);
console.log(wallet.transactions);

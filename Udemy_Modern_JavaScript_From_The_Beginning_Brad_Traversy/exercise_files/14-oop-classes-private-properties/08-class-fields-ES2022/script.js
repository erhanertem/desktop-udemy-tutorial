class Wallet {
	#balance = 0;
	#transactions = [];

	// constructor() {
	// 	this._balance = 0;
	// 	this._transactions = [];
	// }

	// _processDeposit(amount) {
	#processDeposit(amount) {
		console.log(`Depositing ${amount}`);
		// this._transactions.push({
		this.#transactions.push({
			type: 'deposit',
			amount: amount,
		});
	}
	deposit(amount) {
		// this._processDeposit(amount);
		// this._balance += amount;
		this.#processDeposit(amount);
		this.#balance += amount;
	}

	// _processWithdraw(amount) {
	#processWithdraw(amount) {
		console.log(`Withdrawing ${amount}`);
		// this._transactions.push({
		this.#transactions.push({
			type: 'withdraw',
			amount: amount,
		});
	}
	withdraw(amount) {
		// if (amount > this._balance) {
		if (amount > this.#balance) {
			console.log('Not enough balance');
			return;
		}
		// this._balance -= amount;
		this.#balance -= amount;
	}

	get balance() {
		// return this._balance;
		return this.#balance;
	}

	get transactions() {
		// return this._transactions;
		return this.#transactions;
	}
}

const wallet = new Wallet();
wallet.deposit(300);
wallet.withdraw(50);
console.log(wallet.balance);
console.log(wallet.transactions);

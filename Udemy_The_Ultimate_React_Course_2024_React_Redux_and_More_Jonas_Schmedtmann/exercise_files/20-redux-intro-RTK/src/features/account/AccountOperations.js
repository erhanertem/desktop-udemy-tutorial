import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deposit, payLoan, requestLoan, withdraw } from './accountSlice';

function AccountOperations() {
	const [depositAmount, setDepositAmount] = useState('');
	const [withdrawalAmount, setWithdrawalAmount] = useState('');
	const [loanAmount, setLoanAmount] = useState('');
	const [loanPurpose, setLoanPurpose] = useState('');
	const [currency, setCurrency] = useState('USD');

	const dispatch = useDispatch();
	const {
		loan: currLoan,
		loanPurpose: currLoanPurpose,
		// balance,
		isLoading,
	} = useSelector((store) => store.account);

	// console.log(balance);

	function handleDeposit() {
		// GUARD CLAUSE
		if (!depositAmount) return;

		dispatch(deposit(depositAmount, currency));
		// CLEAR-UP FIELD
		setDepositAmount('');
		setCurrency('USD');
	}

	function handleWithdrawal() {
		// GUARD CLAUSE
		if (!withdrawalAmount) return;

		dispatch(withdraw(withdrawalAmount));
		// CLEAR-UP FIELD
		setWithdrawalAmount('');
	}

	function handleRequestLoan() {
		// GUARD CLAUSE
		if (!loanAmount && !loanPurpose) return;

		dispatch(requestLoan(loanAmount, loanPurpose));
		// CLEAR-UP FIELDS
		setLoanAmount('');
		setLoanPurpose('');
	}

	function handlePayLoan() {
		dispatch(payLoan());
	}

	return (
		<div>
			<h2>Your account operations</h2>
			<div className="inputs">
				<div>
					<label>Deposit</label>
					<input
						type="number"
						value={depositAmount}
						onChange={(e) => setDepositAmount(+e.target.value)}
					/>
					<select value={currency} onChange={(e) => setCurrency(e.target.value)}>
						<option value="USD">US Dollar</option>
						<option value="EUR">Euro</option>
						<option value="GBP">British Pound</option>
					</select>

					<button onClick={handleDeposit} disabled={isLoading}>
						{isLoading ? 'Converting...' : `Deposit ${depositAmount}`}
					</button>
				</div>

				<div>
					<label>Withdraw</label>
					<input
						type="number"
						value={withdrawalAmount}
						onChange={(e) => setWithdrawalAmount(+e.target.value)}
					/>
					<button onClick={handleWithdrawal} disabled={isLoading}>
						Withdraw {withdrawalAmount}
					</button>
				</div>

				<div>
					<label>Request loan</label>
					<input
						type="number"
						value={loanAmount}
						onChange={(e) => setLoanAmount(+e.target.value)}
						placeholder="Loan amount"
					/>
					<input
						value={loanPurpose}
						onChange={(e) => setLoanPurpose(e.target.value)}
						placeholder="Loan purpose"
					/>
					<button onClick={handleRequestLoan} disabled={isLoading}>
						Request loan
					</button>
				</div>

				{currLoan > 0 && (
					<div>
						<span>
							Pay back ${currLoan} ({currLoanPurpose})
						</span>
						<button onClick={handlePayLoan} disabled={isLoading}>
							Pay loan
						</button>
					</div>
				)}
			</div>
		</div>
	);
}

export default AccountOperations;

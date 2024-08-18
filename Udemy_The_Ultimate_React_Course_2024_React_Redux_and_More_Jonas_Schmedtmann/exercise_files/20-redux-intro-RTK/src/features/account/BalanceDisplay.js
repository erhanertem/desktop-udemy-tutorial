// > OLD REDUX WITH REACT-REDUX THUNKS
// import { connect } from 'react-redux';

// function formatCurrency(value) {
// 	return new Intl.NumberFormat('en', {
// 		style: 'currency',
// 		currency: 'USD',
// 	}).format(value);
// }

// function mapStateToProps(store) {
// 	return {
// 		balance: store.account.balance,
// 	};
// }

// function BalanceDisplay({ balance }) {
// 	return <div className="balance">{formatCurrency(balance)}</div>;
// }

// export default connect(mapStateToProps)(BalanceDisplay);

// > MODERN REDUX W/ REACT-REDUX HOOKS
import { useSelector } from 'react-redux';

function formatCurrency(value) {
	return new Intl.NumberFormat('en', {
		style: 'currency',
		currency: 'USD',
	}).format(value);
}

function BalanceDisplay() {
	const balance = useSelector((store) => store.account.balance);

	return <div className="balance">{formatCurrency(balance)}</div>;
}

export default BalanceDisplay;

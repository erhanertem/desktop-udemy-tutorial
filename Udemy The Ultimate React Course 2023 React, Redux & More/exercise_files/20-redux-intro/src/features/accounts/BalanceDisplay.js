import { connect } from 'react-redux'

function formatCurrency(value) {
	return new Intl.NumberFormat('en', {
		style: 'currency',
		currency: 'USD',
	}).format(value)
}

function BalanceDisplay({ balance }) {
	return <div className="balance">{formatCurrency(balance)}</div>
}

//LEGACY WAY OF CONNECTING COMPONENTS TO REDUX....NOWADAYS NOT USED!!!!

function mapStateToProps(state) {
	return {
		balance: state.account.balance,
	}
}

export default connect(mapStateToProps)(BalanceDisplay)

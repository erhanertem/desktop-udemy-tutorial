import { useState } from 'react';
import BillCost from './BillCost';
import DropDown from './DropDown';
import Output from './Output';
import ResetButton from './ResetButton';

export default function App() {
	//SHARED APP STATE
	const [billCost, setBillCost] = useState('');
	const [diner1, setDiner1] = useState(0);
	const [diner2, setDiner2] = useState(0);
	//DERIVED STATE
	const tip = (billCost * (diner1 + diner2)) / 2 / 100;
	//RESET HANDLER
	function handleResetBill() {
		setBillCost('');
		setDiner1(0);
		setDiner2(0);
	}

	return (
		<div className="noarrow">
			<BillCost billCost={billCost} onSetBill={setBillCost} />
			<DropDown
				rating={diner1}
				onRate={setDiner1}
				options={[
					{ 0: 'Dissatisfied (0%)' },
					{ 5: 'It was okay (5%)' },
					{ 10: 'Fair pricing (10%)' },
					{ 20: 'Excellente! (20%)' },
				]}
			>
				How did you like the service ?
			</DropDown>
			<DropDown
				rating={diner2}
				onRate={setDiner2}
				options={[
					{ 0: 'Dissatisfied (0%)' },
					{ 5: 'It was okay (5%)' },
					{ 10: 'Fair pricing (10%)' },
					{ 20: 'Excellente! (20%)' },
				]}
			>
				How did your friend like the service ?
			</DropDown>
			<br />
			<Output billCost={billCost} tip={tip} />
			<br />
			<ResetButton onResetBill={handleResetBill} />
		</div>
	);
}

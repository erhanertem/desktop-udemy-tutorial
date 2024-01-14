export default function DropDown({ rating, onRate, options, children }) {
	return (
		<div>
			<label>{children}</label>
			<select value={rating} onChange={(event) => onRate(+event.target.value)}>
				{options.map((optionObj, index) => (
					<option key={index} value={Object.entries(optionObj)[0][0]}>
						{Object.entries(optionObj)[0][1]}
					</option>
				))}
			</select>
		</div>
	);
}

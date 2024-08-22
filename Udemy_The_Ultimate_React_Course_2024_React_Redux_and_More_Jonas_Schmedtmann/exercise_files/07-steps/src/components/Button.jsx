export default function Button({ bgColor, textColor, btnHandler, children }) {
	return (
		<button
			style={{ backgroundColor: bgColor, color: textColor }}
			onClick={btnHandler}
		>
			{children}
		</button>
	);
}

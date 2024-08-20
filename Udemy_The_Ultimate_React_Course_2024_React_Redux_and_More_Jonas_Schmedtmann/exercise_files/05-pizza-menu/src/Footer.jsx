import { pizzaData } from './Menu';
import Order from './Order';

function Footer() {
	const hour = new Date().getHours();
	const openHour = 12;
	const closeHour = 22;
	const isOpen = hour >= openHour && hour <= closeHour;

	return (
		<footer className="footer">
			{isOpen && pizzaData.length > 0 ? (
				<Order closeHour={closeHour} openHour={openHour} />
			) : (
				pizzaData.length > 0 && (
					<p>
						We're happy to welcome you between {openHour}:00 and{' '}
						{closeHour}
						:00
					</p>
				)
			)}
		</footer>
	);
}
export default Footer;

import { type ReactNode } from 'react';

interface HeaderImage {
	image: { src: string; alt: string };
	children: ReactNode;
}

function Header({ image, children }: HeaderImage) {
	return (
		<header>
			{/* Long version */}
			{/* <img src={image.src} alt={image.alt} /> */}
			{/* Shorthand version */}
			<img {...image} />
			{children}
		</header>
	);
}

export default Header;

import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

import StarRating from './StarRating';

function Test() {
	const [movieRating, setMovieRating] = useState(0);

	return (
		<div>
			<StarRating color="blue" maxRating={10} onSet={setMovieRating} />
			<p>This movie is rated {movieRating} stars</p>
		</div>
	);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		{/* <App /> */}
		<StarRating
			maxRating={5}
			colorStroke="#0087e9"
			messages={['Terrible', 'Bad', 'Okay', 'Good', 'Excellent']}
		/>
		<StarRating size={16} maxRating={16} className="test" defaultRating={8} />
		<Test />
	</React.StrictMode>
);

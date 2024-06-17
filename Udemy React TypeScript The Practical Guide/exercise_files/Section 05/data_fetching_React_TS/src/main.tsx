import React from 'react';
import ReactDOM from 'react-dom/client';
import AppZod from './App_no_zod';
import AppNoZod from './App_with_zod';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		{/* <AppZod /> */}
		<AppNoZod />
	</React.StrictMode>
);

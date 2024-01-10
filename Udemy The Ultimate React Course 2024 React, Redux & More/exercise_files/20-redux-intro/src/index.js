import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux' // Provider wraps App component to transfer the states to the component and its children
import store from './store'

import './index.css'
import App from './App'

// store.dispatch({ type: 'account/deposit', payload: 250 })
// console.log(store.getState())

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
)

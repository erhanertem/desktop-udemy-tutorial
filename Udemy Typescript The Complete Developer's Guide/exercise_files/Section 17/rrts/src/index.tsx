import React from 'react';

// // > Older Syntax
// import ReactDOM from 'react-dom';

// interface AppProps {
// 	color: string;
// }

// class App_ extends React.Component<AppProps> {
// 	render() {
// 		return <div>Hi there. {this.props.color}</div>;
// 	}
// }
// ReactDOM.render(<App_ color="red" />, document.querySelector('#root'));

// > Newer Syntax
import ReactDOM from 'react-dom/client';

// NOTE: An interface has to accompany a React Component
interface AppProps {
	color?: string;
}
// React Component
function App({ color }: AppProps) {
	return <div>Hi there. {color}</div>;
}

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
	<React.StrictMode>
		<App color="red" />
	</React.StrictMode>,
);

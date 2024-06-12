import { ReactNode } from 'react';

// Discriminated Union
type HintBoxProps = {
	mode: 'hint';
	children: ReactNode;
};
type WarningBoxProps = {
	mode: 'warning';
	severity: 'low' | 'medium' | 'high';
	children: ReactNode;
};

type InfoBoxProps = HintBoxProps | WarningBoxProps;

// VERY IMPORTANT!! interface with optional chaining or undefined @ severity doesn't give the ultimate security for handling InfoBox. In order to avoid UI related issues like mishandling the props, its better to provide proper type for each scenarios for the props which is thru discriminated unions.
// interface InfoBoxProps {
// 	mode: 'hint' | 'warning';
// 	severity?: 'low' | 'medium' | 'high';
// 	// severity: 'low' | 'medium' | 'high' | undefined;
// 	children: ReactNode;
// }

// VERY IMPORTANT!! Since the received props changes per the type received, props shouldn't be {...} destuctured
function InfoBox(props: InfoBoxProps) {
	if (props.mode === 'hint') {
		return (
			<aside className="infobox infobox-hint">
				<p>{props.children}</p>
			</aside>
		);
	}
	if (props.mode === 'warning') {
		return (
			<aside className={`infobox infobox-warning warning--${props.severity}`}>
				<h2>Warning</h2>
				<p>{props.children}</p>
			</aside>
		);
	}
}

export default InfoBox;

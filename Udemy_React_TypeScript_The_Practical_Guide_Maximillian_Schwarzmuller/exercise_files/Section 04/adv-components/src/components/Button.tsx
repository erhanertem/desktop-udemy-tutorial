import { ComponentPropsWithoutRef } from 'react';

type ButtonProps = { el: 'button' } & ComponentPropsWithoutRef<'button'>;
type AnchorProps = { el: 'anchor' } & ComponentPropsWithoutRef<'a'>;

function Button(props: AnchorProps | ButtonProps) {
	if (props.el === 'anchor') {
		return <a className="button" {...props}></a>;
	}
	return <button className="button" {...props}></button>;
}

export default Button;

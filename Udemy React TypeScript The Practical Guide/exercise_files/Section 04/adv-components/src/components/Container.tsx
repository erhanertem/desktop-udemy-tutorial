import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';

type ContainerProps<T extends ElementType> = {
	as?: T;
	children: ReactNode;
} & ComponentPropsWithoutRef<T>;

function Container<U extends ElementType>({ as, children, ...props }: ContainerProps<U>) {
	const Component = as || 'div';
	return <Component {...props}>{children}</Component>;
}

export default Container;

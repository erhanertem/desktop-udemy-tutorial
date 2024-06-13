import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';

// ElementType is <div>....</div> or <a>....</a>
// We are also using T generics to extend the ElementType. For instance <a></a> or <image></image> have different tag properties.
type ContainerProps<T extends ElementType> = {
	as?: T;
	children: ReactNode;
} & ComponentPropsWithoutRef<T>;

function Container<U extends ElementType>({ as, children, ...props }: ContainerProps<U>) {
	const Component = as || 'div';
	return <Component {...props}>{children}</Component>;
}

export default Container;

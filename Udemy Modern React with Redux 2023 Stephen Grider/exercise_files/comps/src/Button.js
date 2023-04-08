// import PropTypes from 'prop-types';
import className from 'classnames';
import { twMerge } from 'tailwind-merge'; //deals with overriden css properties and privides the finall CSS

function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  onClick,
}) {
  // const classes = className('px-3', 'py-1.5', 'border'); //Same as below
  let classes = className('flex items-center px-3 py-1.5 border', {
    'border-blue-500 bg-blue-500 text-white': primary,
    'border-gray-900 bg-gray-900 text-white': secondary,
    'border-green-500 bg-green-500 text-white': success,
    'border-yellow-400 bg-yellow-400 text-white': warning,
    'border-red-500 bg-red-500 text-white': danger,
    'rounded-full': rounded,
    'bg-white': outline,
    'text-blue-500': outline && primary,
    'text-gray-900': outline && secondary,
    'text-green-500': outline && success,
    'text-yellow-400': outline && warning,
    'text-red-500': outline && danger,
  });

  classes = twMerge(classes);

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
    // <button className="px-3 py-1.5 border-2 border-blue-500 bg-blue-500 text-white">
    //   {children}
    // </button>
  ); //underlying element - actual jsx element
}

Button.propTypes = {
  checkButtonVariation: ({ primary, secondary, success, warning, danger }) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!warning) +
      Number(!!success) +
      Number(!!danger);
    if (count > 1) {
      return new Error('Only one of could be used');
    }
  },
};

export default Button;

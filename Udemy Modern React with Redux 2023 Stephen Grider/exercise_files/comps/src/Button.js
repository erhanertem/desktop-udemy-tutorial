import PropTypes from 'prop-types';

function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
}) {
  return (
    <button className="px-3 py-1.5 border-2 border-blue-500 bg-blue-500 text-white">
      {children}
    </button>
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

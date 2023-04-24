// import PropTypes from 'prop-types'; //Library for prop type check
import className from 'classnames'; //Library for creating customized classnames strings
import { twMerge } from 'tailwind-merge'; //deals with overriden css properties and provides the final CSS

function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  ...rest //VERY IMPORTANT!! all the event handlers irrelavant to the button CSS property is segragated via rest operator and passed thru button
}) {
  // console.log(rest);
  // const classes = className('px-3', 'py-1.5', 'border'); //Same as below
  // USING CLASSNAMES LIBRARY FOR CREATING CUSTOM CLASSNAME STRINGS
  let classes = className(
    rest.className, //IMPORTANT!! grap className additionally passed on top of the below className properties typed below so it doesnt get overwritten
    // 'flex', 'items-center', 'px-3', 'py-1.5' //same as relaying in one string
    'flex items-center px-3 py-1.5 border', //STANDARD CSS WE PROVIDE
    {
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
    } //OPTIONAL CSS BASED ON SELECTION
  );

  classes = twMerge(classes); //IMPORTANT!! Due to problem with TWCSS a property overriding the subsequent properties we use twMerge to clean the classnames string

  return (
    <button
      {...rest} //IMPORTANT!! EVENTHANDLERS FROM THE REST IS EXTRACTED HERE
      className={classes}
    >
      {children}
    </button>
    // <button className="px-3 py-1.5 border-2 border-blue-500 bg-blue-500 text-white">
    //   {children}
    // </button>
  ); //underlying element - actual jsx element
}

//prop-types library to conduct validation checking
Button.propTypes = {
  checkButtonVariation: ({ primary, secondary, success, warning, danger }) =>
    // destructure props
    {
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

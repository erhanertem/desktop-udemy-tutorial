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
  return <button>{children}</button>; //underlying element - actual jsx element
}

export default Button;

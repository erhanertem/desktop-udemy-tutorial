import classNames from 'classnames';
import useNavigation from '../hooks/use-navigation';

function Link({ to, children, className, activeClassName }) {
  const { navigate, currentPath } = useNavigation();

  const classes = classNames(
    'text-blue-500',
    className,
    currentPath === to && activeClassName //IF url matches the currentpath state activate activeclassname for tailwind
  );

  const handleClick = event => {
    console.log(event);
    if (
      event.ctrlKey || //windowsOS ctrl pressed
      event.metaKey //macOS ctrl pressed
    ) {
      return;
    } // fix CTRL+link click to open a new tab
    event.preventDefault();
    navigate(to);
  };

  return (
    <a
      className={classes}
      href={to} // fix CTRL+link click to open a new tab
      onClick={handleClick}
    >
      {children}
    </a>
  );
}

export default Link;

import Link from './Link';

function Sidebar() {
  const links = [
    { labelText: 'Dropdown', path: '/' },
    { labelText: 'Accordion', path: '/accordion' },
    { labelText: 'Buttons', path: '/buttons' },
  ];

  const renderedLinks = links.map(link => {
    return (
      <Link
        key={link.labelText}
        to={link.path}
        className="mb-3"
        activeClassName="font-bold border-l-4 border-blue-500 pl-2"
      >
        {link.labelText}
      </Link>
    );
  });

  return (
    <div className="sticky top-0 overflow-y-auto flex flex-col items-start">
      {renderedLinks}
    </div>
  );
}

export default Sidebar;

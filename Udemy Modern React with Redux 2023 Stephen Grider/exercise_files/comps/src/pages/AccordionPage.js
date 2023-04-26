import Accordion from '../components/Accordion';

function AccordionPage() {
  const items = [
    {
      id: '1',
      label: 'Can I use React on this project?',
      content:
        'You can use React on any project!You can use React on any project!You can use React on any project!You can use React on any project!',
    },
    {
      id: '2',
      label: 'Can I use JS on this project?',
      content:
        'You can use JS on any project!You can use React on any project!You can use React on any project!',
    },
    {
      id: '3',
      label: 'Can I use SASS on this project?',
      content:
        'You can use SASS on any project!You can use React on any project!You can use React on any project!',
    },
  ];
  return <Accordion items={items} />;
}

export default AccordionPage;

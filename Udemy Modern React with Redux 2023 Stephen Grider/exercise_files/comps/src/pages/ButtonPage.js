import { GoBell, GoCloudDownload, GoDatabase } from 'react-icons/go';
import Button from '../components/Button';

function ButtonPage() {
  const handleClick = () => {
    console.log('Click!!');
  };

  return (
    <div>
      <div>
        <Button
          success
          rounded
          outline
          className="mb-3" //Add extra external tailwind CSS
          onMouseEnter={handleClick}
        >
          <GoCloudDownload />
          {/* ICONS FROM REACT-ICONS IMPORTED JUST LIKE ANY OTHER COMPONENT */}
          Buy Now!
        </Button>
      </div>
      <div>
        <Button danger outline onClick={handleClick}>
          <GoBell />
          {/* ICONS FROM REACT-ICONS IMPORTED JUST LIKE ANY OTHER COMPONENT */}
          Click Me!
        </Button>
      </div>
      <div>
        <Button warning onMouseLeave={handleClick}>
          <GoDatabase />
          {/* ICONS FROM REACT-ICONS IMPORTED JUST LIKE ANY OTHER COMPONENT */}
          See Deals!
        </Button>
      </div>
      <div>
        <Button secondary outline>
          Hide Ads!
        </Button>
      </div>
      <div>
        <Button primary rounded>
          Something?
        </Button>
      </div>
    </div>
  );
}

export default ButtonPage;

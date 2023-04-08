import { GoBell, GoCloudDownload, GoDatabase } from 'react-icons/go';
import Button from './Button';

function App() {
  const handleClick = () => {
    console.log('Click!!');
  };

  return (
    <div>
      <div>
        <Button primary rounded outline onClick={handleClick}>
          <GoBell />
          Click Me!
        </Button>
      </div>
      <div>
        <Button secondary rounded outline>
          <GoCloudDownload />
          Buy Now!
        </Button>
      </div>
      <div>
        <Button success>
          <GoDatabase />
          See Deals!
        </Button>
      </div>
      <div>
        <Button warning outline>
          Hide Ads!
        </Button>
      </div>
      <div>
        <Button danger rounded outline>
          Something?
        </Button>
      </div>
    </div>
  );
}

export default App;

import { useState } from 'react';
import Modal from '../components/Modal';
import Button from '../components/Button';

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div>
      <Button onClick={handleClose} primary>
        I Accept
      </Button>
    </div>
  );
  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>Here is an important aggrement for you to accept</p>
    </Modal>
  );

  return (
    <div>
      <Button onClick={handleClick} primary>
        Open Modal
      </Button>
      {showModal && modal}
      {/* Present showmodal isshowmodal state is true */}
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus
        reprehenderit corrupti consectetur animi magnam voluptatibus molestiae
        sunt similique rerum quod velit facere eum nemo porro iusto, perferendis
        dolor! Fugit, sed?
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus
        reprehenderit corrupti consectetur animi magnam voluptatibus molestiae
        sunt similique rerum quod velit facere eum nemo porro iusto, perferendis
        dolor! Fugit, sed?
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus
        reprehenderit corrupti consectetur animi magnam voluptatibus molestiae
        sunt similique rerum quod velit facere eum nemo porro iusto, perferendis
        dolor! Fugit, sed?
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus
        reprehenderit corrupti consectetur animi magnam voluptatibus molestiae
        sunt similique rerum quod velit facere eum nemo porro iusto, perferendis
        dolor! Fugit, sed?
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus
        reprehenderit corrupti consectetur animi magnam voluptatibus molestiae
        sunt similique rerum quod velit facere eum nemo porro iusto, perferendis
        dolor! Fugit, sed?
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus
        reprehenderit corrupti consectetur animi magnam voluptatibus molestiae
        sunt similique rerum quod velit facere eum nemo porro iusto, perferendis
        dolor! Fugit, sed?
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus
        reprehenderit corrupti consectetur animi magnam voluptatibus molestiae
        sunt similique rerum quod velit facere eum nemo porro iusto, perferendis
        dolor! Fugit, sed?
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus
        reprehenderit corrupti consectetur animi magnam voluptatibus molestiae
        sunt similique rerum quod velit facere eum nemo porro iusto, perferendis
        dolor! Fugit, sed?
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus
        reprehenderit corrupti consectetur animi magnam voluptatibus molestiae
        sunt similique rerum quod velit facere eum nemo porro iusto, perferendis
        dolor! Fugit, sed?
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus
        reprehenderit corrupti consectetur animi magnam voluptatibus molestiae
        sunt similique rerum quod velit facere eum nemo porro iusto, perferendis
        dolor! Fugit, sed?
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus
        reprehenderit corrupti consectetur animi magnam voluptatibus molestiae
        sunt similique rerum quod velit facere eum nemo porro iusto, perferendis
        dolor! Fugit, sed?
      </p>
    </div>
  );
}

export default ModalPage;

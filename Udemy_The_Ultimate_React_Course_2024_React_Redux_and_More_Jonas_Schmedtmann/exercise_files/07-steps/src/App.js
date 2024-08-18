import { useState } from 'react';

const messages = [
  'Learn React ✅',
  'Apply for jobs 💼',
  'Invest your new income 💵',
];

export default function App() {
  return (
    <div>
      <Steps />
      {/* <Steps /> */}
      <StepMessage step={1}>
        <p>Pass in some content</p>
        <p>🌴🌴🌴🌴🌴</p>
      </StepMessage>
      <StepMessage step={2}>
        <p>Read my book</p>
        <p>🌴🌴🌴🌴🌴</p>
      </StepMessage>
    </div>
  );
}

function Steps() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  // const [test, setTest] = useState({ name: 'Jonas' });

  function handlePrevious() {
    if (step > 1) setStep((s) => s - 1);
  }
  function handleNext() {
    if (step < 3) {
      setStep((s) => s + 1);
      //   setStep((s) => s + 1);
    }
    //BAD PRACTICE
    // test.name = 'Fred';
    // setTest({ name: 'Fred' });
  }

  return (
    <>
      <button className="close" onClick={() => setIsOpen((isOpen) => !isOpen)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? 'active' : ''}>1</div>
            <div className={step >= 2 ? 'active' : ''}>2</div>
            <div className={step >= 3 ? 'active' : ''}>3</div>
          </div>

          <StepMessage step={step}>
            {messages[step - 1]}
            <Button
              bgColor="#e7e7e7"
              textColor="#333"
              onClick={() => alert('Learn how')}
            >
              Learn How
            </Button>
          </StepMessage>

          <div className="buttons">
            <Button
              bgColor="#7950f2"
              textColor="#fff"
              onClick={handlePrevious}
              // text="Previous"
              // emoji="👈"
              // emojiSide="left"
            >
              <span>👈</span>Previous
            </Button>
            <Button
              bgColor="#7950f2"
              textColor="#fff"
              onClick={handleNext}
              // text="Next"
              // emoji="👉"
              // emojiSide="right"
            >
              Next <span>👉</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

function StepMessage({ step, children }) {
  return (
    <div className="message">
      <h3>Step {step}</h3>
      {children}
    </div>
  );
}

function Button({
  textColor,
  bgColor,
  onClick,
  children,
  // text,
  // emoji,
  // emojiSide,
}) {
  return (
    <button
      style={{
        backgroundColor: bgColor,
        color: textColor,
      }}
      onClick={onClick}
    >
      {children}
      {/* <span>{emojiSide === 'left' && emoji}</span> {text}{' '}
      <span>{emojiSide === 'right' && emoji}</span> */}
    </button>
  );
}

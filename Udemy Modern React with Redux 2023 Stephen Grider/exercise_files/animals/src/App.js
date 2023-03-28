function App() {
  // const handleClick = () => {
  //   console.log('Button was clicked');
  // };

  // console.log(handleClick);
  // console.log(handleClick());

  return (
    <div>
      <button
        onClick={() => {
          console.log('Button was clicked');
        }}
      >
        Add Animal
      </button>
    </div>
  );
}

export default App;

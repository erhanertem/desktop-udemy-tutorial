interface GreeterProps {
  el: string;
}

// Older way (not depracated) of writing functional component
// const Greeter: React.FC = () => {
//   return <h1>HELLO WORLD!!</h1>;
// };
//Newer way of writing functional component
// function Greeter(): JSX.Element {
//   return <h1>HELLO WORLD!!</h1>;
// }
//Newer way of writing functional component with props
// function Greeter(props: { el: string }): JSX.Element {
//   return <h1>HELLO WORLD!! {props.el}</h1>;
// }
// Writing functional component with type interface for props
// function Greeter(props: GreeterProps): JSX.Element {
//   return <h1>HELLO WORLD!! {props.el}</h1>;
// }
// Writing functional component with type interface for props via destructuring
function Greeter({ el }: GreeterProps): JSX.Element {
  return <h1>HELLO WORLD!! {el}</h1>;
}

export default Greeter;

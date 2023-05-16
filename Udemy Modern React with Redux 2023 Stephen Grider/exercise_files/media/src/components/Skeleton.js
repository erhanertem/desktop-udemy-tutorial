import classNames from 'classnames';

function Skeleton({ times, className }) {
  //#1 if loop way
  // const boxes = [];
  // for (let i = 0; i < times; i++) {
  //   boxes.push(<div key={i}></div>);
  // }
  // return boxes;

  //#2 Fancier way
  const outerClassNames = classNames(
    'relative',
    'overflow-hidden',
    'bg-gray-200',
    'rounded',
    'mb-2.5',
    className
  );
  const innerClassNames = classNames(
    'absolute',
    'animate-shimmer',
    'inset-0',
    '-translate-x-full',
    'bg-gradient-to-r',
    'from-gray-200',
    'via-white',
    'to-gray-200'
  );

  const boxes = Array(times) //create an array length of # times
    .fill(0) //Fill all array entries with 0
    .map((_, i) => {
      //map thru each element and replace with a div and corresponding index
      return (
        <div key={i} className={outerClassNames}>
          <div className={innerClassNames} />
        </div>
      );
    });
  return boxes;
}

export default Skeleton;

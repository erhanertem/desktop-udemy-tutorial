import { useSelector } from 'react-redux';

function CarValue() {
  const totalCost = useSelector(({ cars: { data, searchTerm } }) =>
    data
      .filter(car => {
        return car.name.toLowerCase().includes(searchTerm.toLowerCase());
      })
      // // #1 Basic Approach for calc total cost
      // let cost = 0;
      // for (let car of filteredCars) {
      //   cost += car.cost;
      // }
      // return cost;
      // #2 Advanced JS approach for calc total cost
      .reduce((acc, car) => acc + car.cost, 0)
  );

  return <div className="car-value">Total Cost: ${totalCost}</div>;
}

export default CarValue;

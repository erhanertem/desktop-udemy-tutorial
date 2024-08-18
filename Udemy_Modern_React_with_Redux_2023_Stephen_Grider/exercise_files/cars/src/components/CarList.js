import { useSelector, useDispatch } from 'react-redux';
import { removeCar } from '../store';

function CarList() {
  const dispatch = useDispatch();

  // // #1 Former state requiring
  // const cars = useSelector(state => {
  //   console.log(state);
  //   return state.cars.data;
  // });
  // console.log(cars);
  // #2 New state requiring including the search term - derived state
  // state is being {cars: {searchTerm:'', data: []}, form: {name:'', cost:0}}
  // we extract out data and searchTerm and show filtered one
  const { cars, name } = useSelector(({ form, cars: { data, searchTerm } }) => {
    // !!searchTerm === true && console.log(searchTerm);
    const filteredCars = data.filter(car =>
      car.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return {
      cars: filteredCars,
      name: form.name,
    };
  });

  const handleCarDelete = car => {
    dispatch(removeCar(car.id));
  };

  const renderedCars = cars.map(car => {
    //DECIDE IF THIS CAR SHOULD BE BOLD FACED
    // Need access to state.form.name
    const bold = name && car.name.toLowerCase().includes(name.toLowerCase());

    return (
      // <div key={car.id} className="panel">
      <div key={car.id} className={`panel ${bold && 'bold'}`}>
        <p>
          {car.name} - ${car.cost}
        </p>
        <button
          className="button is-danger"
          onClick={() => handleCarDelete(car)}
        >
          Delete
        </button>
      </div>
    );
  });

  return (
    <div className="car-list">
      {renderedCars}
      <hr />
    </div>
  );
}

export default CarList;

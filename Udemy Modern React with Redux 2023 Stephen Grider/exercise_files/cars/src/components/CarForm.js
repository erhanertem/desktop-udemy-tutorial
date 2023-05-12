import { useDispatch, useSelector } from 'react-redux';
import { changeName, changeCost, addCar } from '../store';

function CarForm() {
  const dispatch = useDispatch();
  // const name = useSelector(state => {
  //   return state.form.name;
  // }); //IMPORTANT! Instead of returning values individually for name and cost we return an object that could be used by both as shown in the below code
  const { name, cost } = useSelector(state => {
    return {
      name: state.form.name,
      cost: state.form.cost,
    };
  });

  const handleNameChange = event => {
    dispatch(changeName(event.target.value));
  };
  const handleCostChange = event => {
    const carCost = parseInt(event.target.value) || 0; // Either a number or zero
    dispatch(changeCost(carCost));
  };
  const handleSubmit = event => {
    event.preventDefault(); //Prevent defualt browser behaviour of submitting form on behalf of us
    if (name === '' || cost === 0) {
      console.log('No material to submit');
      return;
    }
    dispatch(addCar({ name: name, cost: cost })); //Refer to addcar @ carsslice for payload configuration assumption

    //VERY IMPORTANT!!
    // #1.Classically resetting form after adding car to the list - Not favored way of doing it
    // dispatch(changeCost(0));
    // dispatch(changeName(''));
    // #2.Clever way of handling form resetting
    // We make use of the fact that actions are dispatched to every reducer form. Only the matching reducer accepts this action and the rest ignores it. In this case while we dispatch an addCar action, we want to reset the state @ formSlice. So we undertake extraReducer synced state reducer @ formSlice to change the micro state.
  };

  return (
    <div className="car-form panel">
      <h4 className="subtitle is-3">Add Car</h4>
      <form onSubmit={handleSubmit}>
        <div className="field-group">
          <div className="field">
            <label className="label">Name</label>
            <input
              className="input in-expanded"
              value={name}
              onChange={handleNameChange}
            />
          </div>
          <div className="field">
            <label className="label">Cost</label>
            <input
              className="input in-expanded"
              value={cost || ''} //NOTE: We do zero if the input is not a number @ handleCost, so we replace zero to '' if there is no number
              onChange={handleCostChange}
              type="number"
            />
          </div>
        </div>
        <div className="field">
          <button className="button is-link">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default CarForm;

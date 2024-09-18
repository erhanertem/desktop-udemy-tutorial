import { connect } from 'react-redux';
// import { useSelector } from 'react-redux';

function Customer({ customer }) {
  // #5. READ FROM STORE FEATURE/SLICER/DOMAIN
  // const customer = useSelector((store) => store.customer.fullName);
  // console.log(customer);

  return <h2>👋 Welcome, {customer}</h2>;
}

// #5. READ FROM STORE FEATURE/SLICER/DOMAIN
function mapStateToProps(state) {
  return {
    customer: state.customer.fullName,
  };
}

// export default Customer;
export default connect(mapStateToProps)(Customer);

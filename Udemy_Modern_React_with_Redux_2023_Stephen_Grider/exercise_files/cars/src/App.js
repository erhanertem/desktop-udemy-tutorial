import CarForm from './components/CarForm';
import CarValue from './components/CarValue';
import CarList from './components/CarList';
import CarSearch from './components/CarSearch';

function App() {
  return (
    <div className="container is-fluid">
      <CarForm />
      <CarSearch />
      <CarList />
      <CarValue />
    </div>
  );
}

export default App;

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Filter from './Components/Filter';
import MyTable from './Components/Table';

function App() {
  return (
    <div className="App">
      <Filter/>
      <MyTable/>
    </div>
  );
}

export default App;

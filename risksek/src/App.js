import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './Components/Navbar';
import Filter from './Components/Filter';
import MyTable from './Components/Table';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Filter/>
      <MyTable/>
    </div>
  );
}

export default App;

import './App.css';
import customers from "./data/customers.json"; 
import Customer from './components/Customer';

function App() {
  return (
    <div className="container-fluid m-5">
     <h1>Customer Loyality Program</h1>
    <Customer data={customers} /> 
    </div>
  );
}

export default App;

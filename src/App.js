import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductsList from './components/ProductsList';
import NewProduct from './components/NewProduct';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<ProductsList />} />
        <Route path='/products' element={<NewProduct />} />
      </Routes>
    </Router>
  );
}

export default App;

import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductsList from './components/ProductsList';
import NewProduct from './components/NewProduct';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<ProductsList />} />
        <Route path='/products' element={<NewProduct />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

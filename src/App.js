import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductsList from './components/ProductsList';
import NewProduct from './components/NewProduct';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<ProductsList />} />
        <Route path='/products' element={<NewProduct />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout' element={<Checkout />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

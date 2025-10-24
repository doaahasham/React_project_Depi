import { useState } from 'react'
import { Route , Routes } from "react-router-dom";
import Products from './pages/products/Products';
import ProductDetails from './pages/product-details/ProductDetails';
import Signup from './pages/signup/Signup';
import Notfound from './pages/notfound/Notfound';
import Login from './pages/login/Login';
import Home from './pages/Home/Home';
import Checkout from './pages/checkout/Checkout';
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
<Routes>
  <Route path='/' element={<Home />} />
  <Route path='/login' element={<Login />} />
  <Route path='/notfound' element={<Notfound />} />
  <Route path='/products' element={<Products />} />
<Route path='/products/:stockId' element={<ProductDetails />} />
  <Route path='/signup' element={<Signup />} />
  <Route path='/checkout' element={<Checkout />} />
</Routes>

    </div>
  );
};

export default App;

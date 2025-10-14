import { useState } from 'react'
import { Route , Routes } from "react-router-dom";
import Products from './pages/products/Products';
import Signup from './pages/signup/Signup';
import Notfound from './pages/notfound/Notfound';
import Login from './pages/login/Login';
import Home from './pages/Home/Home';
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
<Routes>
  <Route path='/' element={<Home />} />
  <Route path='/login' element={<Login />} />
  <Route path='/notfound' element={<Notfound />} />
  <Route path='/products' element={<Products />} />
  <Route path='/signup' element={<Signup />} />
</Routes>

    </div>
  );
};

export default App;

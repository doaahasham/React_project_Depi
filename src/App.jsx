import { useState } from 'react'
import { Route , Routes } from "react-router-dom";
import Products from './pages/products/Products';
import Signup from './pages/signup/Signup';
import Notfound from './pages/notfound/Notfound';
import Login from './pages/login/Login';
import Home from './pages/Home/Home';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
<Routes>
  <Route path='/' element={<Home />} />
   <Route path='/products' element={<Products />} />
    <Route path='/about' element={<About />} />
     <Route path='/contact' element={<Contact />} />
  <Route path='/login' element={<Login />} />
  <Route path='/*' element={<Notfound />} />
  <Route path='/signup' element={<Signup />} />
</Routes>

    </div>
  );
};

export default App;

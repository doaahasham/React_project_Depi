import { useState } from 'react'
import { Route , Routes } from "react-router-dom";
import Products from './pages/products/Products';
import Signup from './pages/signup/Signup';
import Notfound from './pages/notfound/Notfound';
import Login from './pages/login/Login';
import Home from './pages/Home/Home';
import UserProfile from './pages/userProfile/UserProfile';
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
<Routes>
  <Route path='/' element={<Home />} />
  <Route path='/login' element={<Login />} />
  <Route path='/*' element={<Notfound />} />
  <Route path='/products' element={<Products />} />
  <Route path='/signup' element={<Signup />} />
  <Route path='/profile' element={<UserProfile />} />
</Routes>
    </div>
  );
};

export default App;

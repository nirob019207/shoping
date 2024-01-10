import React from 'react';

import './App.css';
import Navbar from './components/nav/Navbar';
import Shop from './components/product/Shop';
import './style.css'
import { Route, Routes } from 'react-router-dom';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <div>
      
      <Navbar/>
   
  <main class="py-16">
   
  <Routes>
  <Route path='/'element={<Shop/>}></Route>
    <Route path='/home'element={<Shop/>}></Route>
    <Route path='/cart'element={<Cart/>}></Route>
    {/* <Route path='/cart'element={<Shop/>}></Route> */}
  </Routes>
  </main>

 
    </div>
  );
}

export default App;

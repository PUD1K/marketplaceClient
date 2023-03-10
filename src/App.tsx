import React, {useMemo, useEffect, useRef} from 'react';
import axios from 'axios'
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { userSlice } from './store/reducers/users/UserSlice';
import { getUserInfo } from './store/reducers/ActionCreators';
import Footer from './components/customElements/MyFooter';
import Slider from './components/customElements/MySlider';
import Navbar from './components/customElements/MyNavbar';

import {Routes, Route, Link, useLocation} from 'react-router-dom' 
import Login from './pages/Login'
import Home from './pages/Home';
import Layout from './components/customElements/MyLayout';
import Register from './pages/Register';
import Basket from './pages/Basket';
import Categories from './pages/Categories';
import Subcategories from './pages/Subcategories';
import Products from './pages/Products';


function App() {
  const {isLoggedIn, token} = useAppSelector(state => state.userReducer)
  
  const dispatch = useAppDispatch();
  
  useEffect(() => {
    dispatch(userSlice.actions.setLoggedIn())
  }, [token])


  return (
    <div className="App">

      <Routes>
        <Route path ='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='categories' element={<Categories/>}/>
          <Route path='categories/:categoryslug' element={<Subcategories/>}/>
          <Route path='categories/:categoryslug/:subcategoryslug' element={<Products key={window.location.pathname}/>}/>
          <Route path='registration' element={<Register/>}/>
          <Route path='login' element={<Login/>}/>
          <Route path='basket' element={<Basket/>}/>
        </Route>
      </Routes>

    </div>
  );
}

export default App;
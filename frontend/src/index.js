import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import './index.css';

// Import page =========>
import App from './App';
import Home from './page/home/Home';
import Menu from './page/menu/Menu';
import About from './page/about/About';
import Contact from './page/contact/Contact';
import NewProduct from './page/newProduct/NewProduct';
import Login from './page/login/Login';
import Signup from './page/signup/Signup';

const router =createBrowserRouter (
  createRoutesFromElements (
    <Route path='/' element={<App />}>
        <Route index element={<Home />} />
        <Route path='menu' element={<Menu />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='newProduct' element={<NewProduct />} />

        {/* Auth */}
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<Signup />} />
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

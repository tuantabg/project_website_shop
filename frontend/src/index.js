import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import './index.css';

// Import page =========>
import App from './App';
import Home from './page/Home';
import Menu from './page/Menu';
import About from './page/About';
import Contact from './page/Contact';

const router =createBrowserRouter (
  createRoutesFromElements (
    <Route path='/' element={<App />}>
        <Route index element={<Home />} />
        <Route path='menu' element={<Menu />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

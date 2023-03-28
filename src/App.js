import './App.css';
import React from 'react';
import {Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Header2 from './components/Header2/Header2';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Footer from './components/Footer/Footer';
import ContactUs from './pages/Contact Us/ContactUs';
import Home from './pages/Home/Home';
import AboutUs from './pages/About Us/AboutUs';
import OurWork from './pages/Our Work/OurWork';
import WhyWater from './pages/Why Water/WhyWater';
import Donate from './pages/Donate/Donate';
import Events from './pages/Events/Events';
import NotFound from './pages/Not Found/NotFound';
import ContextProvider from './components/Context/Context';

function App() {
  return (
    <ContextProvider>
      <Header />
      <Header2 />
      <div className="App">
        <div className='routes'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/why-water' element={<WhyWater />} />
            <Route path='/our-work' element={<OurWork />} />
            <Route path='/events' element={<Events />} />
            <Route path='/about-us' element={<AboutUs />} />
            <Route path='/contact-us' element={<ContactUs />} />
            <Route path='/donate' element={<Donate />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </ContextProvider>
  )
}

export default App;
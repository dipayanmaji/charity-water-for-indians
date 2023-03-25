import './App.css';
import React from 'react';
import {Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Header from './components/Header/Header';
import Header2 from './components/Header2/Header2';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Footer from './components/Footer/Footer';

function App() {
  const [fixedHeader, setFixedHeader] = useState(false);
  window.addEventListener('scroll', ()=>{
    console.log(window.pageYOffset);
    if(window.pageYOffset>80){
      setFixedHeader(true);
    }else{
      setFixedHeader(false);
    }
  })
  return (
    <>
      {
        fixedHeader ? <Header2 /> : <Header />
      }
      <div className="App">
        <div className='routes'>
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App;
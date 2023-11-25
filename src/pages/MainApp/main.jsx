// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Beranda from '../Beranda/main';
import BuatEvent from '../BuatEvent/main';
import Event from '../Event/main';
import Tiket from '../Tiket/main';
import Profile from '../Profile/main';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import './mainApp.scss';
import Login from '../Login/main';
import Register from '../Register/main';
import PaymentPage from '../Event/Payment';  // Sesuaikan dengan path yang benar

function MainApp() {
  return (
    <div className='mainApp'>
      <Navbar />
      <div className="content">
        <Routes>
          <Route path='/' element={<Beranda />} />
          <Route path='/buatevent' element={<BuatEvent />} />
          <Route
            path='/event/*'
            element={
              <Routes>
                <Route path='/' element={<Event />} />
                <Route path='/payment' element={<PaymentPage />} />
              </Routes>
            }
          />
          <Route path='/profile' element={<Profile />} />
          <Route path='/tiketku' element={<Tiket />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default MainApp;

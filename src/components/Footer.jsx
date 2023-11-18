
// eslint-disable-next-line no-unused-vars
import React from 'react';
import './main.scss'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import { Facebook, Twitter } from 'react-bootstrap-icons';


const Footer = () => {
  return (
    <footer className="footer-container">
       <hr className="footer-line" />

      <div className="left-section">
        <div className="logo">Logo</div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, officia quo quibusdam in optio inventore architecto eaque laboriosam expedita accusamus mollitia distinctio deserunt cumque laborum tempore debitis, obcaecati, earum doloribus?.</p>
        <div className="social-media-icons">
          <Facebook size={24} color="#3F475A"/>
          <Twitter size={24} color="#3F475A"/>
        </div>
      </div>

      <div className="middle-section">
        <div className="event-plans">
          <h3>Rencana Event</h3>
          <ul>
            <li>Membuat dan Mengatur</li>
            <li>Jual Tiket</li>
            <li>Online RSVP</li>
            <li>Online Events</li>
          </ul>
        </div>

        <div className="festifun">
          <h3>Festifun</h3>
          <ul>
            <li>Tentang Kami</li>
            <li>Lihat Event</li>
            <li>Kontak Kami</li>
            <li>Pusat Bantuan</li>
            <li>FAQ</li>
            <li>Privacy</li>
            <li>Sistem</li>
          </ul>
        </div>
      

      <div className="right-section">
        <div className="stay-connected">
          <h3>Hubungi Kami</h3>
          
          <div className="email-input">
            <input type="email" placeholder="Masukkan email Anda" />
            <button>Kirim</button>
          </div>
        </div>
      </div>
      </div>
      <hr className="footer-line" />

      <div className="copyright">Copyright © 2023 Magnum Opus</div>
    </footer>
  );
};

export default Footer;

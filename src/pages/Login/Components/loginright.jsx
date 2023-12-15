
import { Button, Form } from "react-bootstrap";

import { Person, LockFill, Google, Facebook, Apple } from "react-bootstrap-icons";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, { useState } from 'react';



function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:4000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        throw new Error('Server response is not in JSON format');
      }

      const data = await response.json();

      if (response.ok) {
        console.log('Login successful:', data);
        // Lakukan navigasi atau tindakan lain setelah login berhasil
      } else {
        console.error('Login failed:', data);
        setError('Invalid email or password'); // Set pesan kesalahan
      }
    } catch (error) {
      console.error('Error during login:', error.message);
      setError('Internal server error'); // Set pesan kesalahan
    }
  };

  return (
    <>
      <div className="login-container">
        <img
          src="https://raw.githubusercontent.com/Magnum-Opus-Festifun/punyabima/d3f45d3e38e2ff56a54fe071a65802c96fffaaab/aset/logo%20biru.png"
          height="50"
          alt="Navbar Logo"
        />
        <form onSubmit={handleLogin} className="login-form">
          <label>
            Email:
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
          <label>
            Password:
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </label>
          <button type="submit">Login</button>
        </form>
        {error && <div className="error-alert">{error}</div>} {/* Tampilkan alert jika ada pesan kesalahan */}
      </div>
    </>
  );
}

        export default Login;
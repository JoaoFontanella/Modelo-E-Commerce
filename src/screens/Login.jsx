import React, { useState } from 'react';
import '../styles/Login.css';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { useUser } from '../context/UserContext';

function Login() {
  const { loginUser, errorMessage } = useUser();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    loginUser(email, password);
  };

  return (
    <div className="name-input-container">
      <Header />
      <form onSubmit={handleLogin}>
        <h2>Login</h2>
        <input
          id="email"
          type="email"
          placeholder="Digite seu Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          id="password"
          type="password"
          placeholder="Digite sua Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Link to="/">
          <button id="next" onClick={handleLogin}>
            Login
          </button>
        </Link>
        <br></br>
        {errorMessage && <p>{errorMessage}</p>}
        <Link to="/Createaccount" id="createaccount">
          Criar uma conta
        </Link>
      </form>
      <Footer />
    </div>
  );
}

export default Login;

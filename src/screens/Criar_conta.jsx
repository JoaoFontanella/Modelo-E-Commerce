import React, { useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { useUser } from '../context/UserContext';
import { Link } from 'react-router-dom';

function Criar_conta() {
  const { registerUser, errorMessage } = useUser();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    registerUser(email, password);
  };

  return (
    <div className="name-input-container">
      <Header />
      <form onSubmit={handleSubmit}>
        <h2>Criar Conta</h2>
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
        <button id="create" type="submit">
          Criar
        </button>
        <Link to="/Login" id="login">
          Já tenho uma conta
        </Link>
      </form>
      <Footer />
    </div>
  );
}

export default Criar_conta;

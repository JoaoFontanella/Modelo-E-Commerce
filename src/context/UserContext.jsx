// UserContext.js
import React, { createContext, useState, useContext } from 'react';

const UserContext = createContext();

const initialUsers = [
  { id: 1, email: 'user1@example.com', password: 'password1' },
  { id: 2, email: 'user2@example.com', password: 'password2' },
];

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState(initialUsers);
  const [currentUser, setCurrentUser] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const loginUser = (email, password) => {
    const user = users.find(
      (user) => user.email === email && user.password === password
    );
    if (user) {
      setCurrentUser(user);
      setErrorMessage('');
    } else {
      setCurrentUser(null);
      setErrorMessage('Credenciais inválidas. Verifique seu e-mail e senha.');
    }
  };

  const logoutUser = () => {
    setCurrentUser(null);
    setErrorMessage('');
  };

  const registerUser = (email, password) => {
    // Geração de ID
    const newUser = {
      id: users.length + 1,
      email,
      password,
    };

    setUsers([...users, newUser]);
    setCurrentUser(newUser);
    setErrorMessage('');
  };

  return (
    <UserContext.Provider
      value={{
        users,
        currentUser,
        errorMessage,
        loginUser,
        logoutUser,
        registerUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);

export default UserContext;

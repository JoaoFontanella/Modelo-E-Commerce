import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './screens/Home';
import Checkout from './screens/Checkout';
import Login from './screens/Login';
import Criar_conta from './screens/Criar_conta';
import Cart from './screens/Cart';
import CartProvider from './context/CartContext';
import { UserProvider } from './context/UserContext';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/Login',
    element: <Login />,
  },
  {
    path: '/Createaccount',
    element: <Criar_conta />,
  },
  {
    path: '/Cart',
    element: <Cart />,
  },
  {
    path: '/Checkout',
    element: <Checkout />,
  },
]);

function App() {
  return (
    <CartProvider>
      <UserProvider>
        <RouterProvider router={router} />
      </UserProvider>
    </CartProvider>
  );
}

export default App;

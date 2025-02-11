import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Cart from './components/Cart.jsx';
import CartContextProvider from './contexts/CartContextProvider.jsx';

const router  = createBrowserRouter([

    {
      path: '/',
      element: <App />
    },
    {
      path: '/cart',
      element: <Cart />
    }

]);

createRoot(document.getElementById('root')).render(

  <StrictMode>
    <CartContextProvider>
      <RouterProvider router={router} >
        <App />
      </RouterProvider>
  </CartContextProvider>
  </StrictMode>,
)

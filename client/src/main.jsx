import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import 'vite/modulepreload-polyfill';
import {createHashRouter, Navigate, RouterProvider} from 'react-router-dom';

const router = createHashRouter([
  {
    path: "/home",
    element: <App page="home"/>
  },
  {
    path: "/",
    element: <Navigate to="/home" />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

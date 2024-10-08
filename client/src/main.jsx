import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import 'vite/modulepreload-polyfill';
import {createHashRouter, Navigate, RouterProvider} from 'react-router-dom';
import Home from './Home/Home.jsx';
import YourLibrary from './YourLibrary/YourLibrary.jsx';

const router = createHashRouter([
  {
    path: "/home",
    element: <App page="home" contents={<Home />}/>
  },
  {
    path: "/",
    element: <Navigate to="/home" />,
  },
  {
    path: "/yourLibrary",
    element: <App page="your library" contents={<YourLibrary />}/>
  },
  // TODO: create the study guides page
  // {
  //   path: "studyGuides",
  //   element: <App page="study guides" contents={<StudyGuides />}/>
  // }
  // TODO: create the practice tests page
  // {
  //   path: "practiceTests",
  //   element: <App page="practice tests" contents={<PracticeTests />}/>
  // }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

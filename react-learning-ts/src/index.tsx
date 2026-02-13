import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
};



root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="login">
      <Route path="home" element={<Home />} />
 </Route>
    </Routes>
 </ BrowserRouter>
  </React.StrictMode>
);

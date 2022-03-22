
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './global.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App';
import MovieDetails from './pages/MovieDetails';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}/>
      <Route path="/movie-details/:id" element={<MovieDetails/>}/>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);


import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppRoutes } from '../AppRoutes';
import Index from './Pages/Index';

import '../styles/App.css';
const App = () => {

  return (
    <BrowserRouter>
      <AppRoutes/>
      <Routes>
      <Route exact path = '/' element = {<Index/>} />
      </Routes>
    </BrowserRouter>

  )
}


export default App;

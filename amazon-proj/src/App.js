import './App.css';
import React, { Component, useState }  from 'react';

import Header from './components/header/Header.jsx';
import Navbar from './components/navbar/Navbar.jsx';
import Main from './components/main/Main.jsx';
//import Personal from './components/personal/Personal.jsx';
import Login from './components/login/Login.jsx';
import Footer from './components/footer/Footer.jsx';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { UserProvider } from "./UserContextComponent";

export const UserContext = React.createContext()

function App() {
  return (
    <div className="a_wrapper">
      <Router>
        <a id="top"></a>
        <UserProvider>
          <Header />
          <Navbar />
          <Routes>
            <Route path='/' exact element={<Login/>} />
            <Route path='/explore' reloadDocument exact element={<Main/>} />
          </Routes>
          <Footer />
        </UserProvider>
      </Router>
    </div>
  );
}

export default App;

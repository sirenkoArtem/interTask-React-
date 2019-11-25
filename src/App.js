import React from 'react'
import './App.css'
import { Route } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header'
import Navbar from './components/Navbar'
import News from './components/componentsForNavbar/news'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className="app-wrapper">
      <BrowserRouter>
        <Header />
        <Navbar />
        <Route path="/news" render={ () => <News /> } />
        {/* <Route path="/city" render={ () => <City /> } />
        <Route path="/business" render={ () => <Business /> } />
        <Route path="/style" render={ () => <Style /> } />
        <Route path="/culture" render={ () => <Culture /> } />
        <Route path="/food" render={ () => <Food /> } />
        <Route path="/knowledge" render={ () => <Knowledge /> } />
        <Route path="/children" render={ () => <Children /> } />
        <Route path="/kyiv" render={ () => <Kyiv /> } /> */}
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;

import React from 'react'
import './header.css';
const Header = () => {
  return (
    <div>       
 <header id="header" className="header fixed-top">
  <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
    <a href="/" className="logo d-flex align-items-center">
    <img src={require('../../assets/img/logo.png')} alt />
      
      <span>Unified Security Master</span>
    </a>
    <nav id="navbar" className="navbar">
      <ul>
        <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
        <li><a className="nav-link scrollto" href="#about">About</a></li>
        {/* <li><a className="nav-link scrollto" href="#team">Team</a></li> */}
        <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
        <li><a className="getstarted scrollto" href="/securities">Securities</a></li>
      </ul>
      <i className="bi bi-list mobile-nav-toggle" />
    </nav>
    
  </div>
</header>
    </div>
  )
}
export default Header
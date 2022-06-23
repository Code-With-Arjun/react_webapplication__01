import React from 'react'
import { Link } from 'react-router-dom'
import './css/Header.css'
export default function Header() {
  return (
  <>
  <header className="header">
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container">
      <a className="navbar-brand" href="#">Coder</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="courses">Courses</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="contact">contact</Link>
          </li>
          <div className="header-btn">
            <button className="btn login-btn">Log in</button>
            <button className="btn signup-btn"> Sign up</button>
          </div>
         
        </ul>
      </div>
    </div>
  </nav>
</header>
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  </>
  )
}

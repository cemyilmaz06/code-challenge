import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
const Navbar = () => {
  const navigate=useNavigate()
  return (
    <nav className="navbar navbar-expand-lg bg-secondary">
  <div className="container-fluid">
    <a className="navbar-brand text-white" onClick={()=>navigate("/")}>Shoppinng Card</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ">
        <li className="nav-item">
          <NavLink className='nav-link' to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className='nav-link' to="/New Product">New Product</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className='nav-link' to="/Product List">Product List</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className='nav-link' to="/About">About</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar
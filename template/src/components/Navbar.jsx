import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-secondary">
  <div class="container-fluid">
    <a class="navbar-brand text-white" href="#">Shoppinng Card</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ">
        <li class="nav-item">
          <Link className='nav-link' to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link className='nav-link' to="/New Product">New Product</Link>
        </li>
        <li class="nav-item">
          <Link className='nav-link' to="/Product List">Product List</Link>
        </li>
        <li class="nav-item">
          <Link className='nav-link' to="/About">About</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar
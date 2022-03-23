import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-4">
        <div class="container-fluid">
          <Link to="/" class="navbar-brand" >Home</Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" 
              data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
          <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav me-auto mb-2 mb-md-0">
            <li class="nav-item">
              <Link to="/login" class="nav-link active" aria-current="page" >Login</Link>
            </li>
            <li class="nav-item">
              <Link to="/register" class="nav-link" >Register</Link>
            </li>
          </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

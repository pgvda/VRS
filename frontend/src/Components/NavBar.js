import React from 'react'
import '../Css/NavBar.css'

function Navbar() {

    

  return (
    <div class="navbar-container justify-content-around" >
        <nav class="navbar navbar-expand color">
  <div class="container-fluid content">
    <a class="navbar-brand logo" href="#"></a>
    
    <div class="d-flex align-items-start flex-column mb-3">
      <div >
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active color2" 
          aria-current="page" href="#" style={{ color: '#ffffff' ,fontWeight: '60' }}>FACULTY VEHICLE RESERVATIONS</a>
        </li>
        </ul>
        </div>
    </div>
    <div> 
            <ul class="navbar-nav"> 
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown link
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav><div className='line'>
</div>

    </div>
  )
}

export default Navbar
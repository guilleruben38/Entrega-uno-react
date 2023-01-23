import React from 'react'
import CartWidget from '../Cardwidget/CartWidget'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-success">
  <div className="container-fluid ">
    <a className="navbar-brand" href="#">Anden Sport</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item ">
          <a className="nav-link " aria-current="page" href="#">Inicio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " href="#">Items</a>
        </li>       
        <li className="nav-item">
        <a className="nav-link" href="#">Ayuda</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <CartWidget/>
      </form>
    </div>
  </div>
</nav>
  )
}

export default Navbar
import React from 'react'
import { Link } from 'react-router-dom'
import "../index.css"


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context


const Navbar = () => {

  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <div class="collapse navbar-collapse" id="navbarNav">
<ul class="navbar-nav">
  <li class="nav-item">
    <a class="nav-link"href="/home">Home</a>
  </li>
  <li class="nav-item">
    <a class="nav-link"href="/favs">Favoritos</a>
  </li>
  <li class="nav-item">
    <a class="nav-link "href="contact">Contacto</a>
  </li>
</ul>
</div>
</div>
      <button>Change theme</button>
    </nav>

  )
}

export default Navbar

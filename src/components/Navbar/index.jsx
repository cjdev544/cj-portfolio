import React from 'react'
import Toggle from '../Toggle'
import './Navbar.scss'

const Navbar = ({ setIsDarkMode }) => {
  return (
    <nav className='navbar'>
      <div className='navbar-left'>
        <div className='navbar-left__name'>{`<CjDev544 />`}</div>
        <Toggle setIsDarkMode={setIsDarkMode} />
      </div>
      <div className='navbar-right'>
        <div className='navbar-right__list'>
          <ul>
            <li className='navbar-right__list-item'>Inicio</li>
            <li className='navbar-right__list-item'>Tecnologías</li>
            <li className='navbar-right__list-item'>Servicios</li>
            <li className='navbar-right__list-item'>Proyectos</li>
            <li className='navbar-right__list-item'>Contacto</li>
          </ul>
        </div>
        <button className='button navbar-button'>Contactame</button>
      </div>
    </nav>
  )
}

export default Navbar

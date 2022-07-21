import React from 'react'
import Toggle from '../Toggle'
import { Link } from 'react-scroll'
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
            <li className='navbar-right__list-item'>
              <Link to='servicios' spy={true} smooth={true}>
                Servicios
              </Link>
            </li>
            <li className='navbar-right__list-item'>
              <Link to='tecnologias' spy={true} smooth={true}>
                Tecnologías
              </Link>
            </li>
            <li className='navbar-right__list-item'>
              <Link to='proyectos' spy={true} smooth={true}>
                Proyectos
              </Link>
            </li>
            <li className='navbar-right__list-item'>
              <Link to='contacto' spy={true} smooth={true}>
                Contacto
              </Link>
            </li>
          </ul>
        </div>
        <Link
          to='contacto'
          spy={true}
          smooth={true}
          className='button navbar-button'
        >
          Contactame
        </Link>
      </div>
    </nav>
  )
}

export default Navbar

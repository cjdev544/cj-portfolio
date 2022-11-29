import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import './Projects.scss'

const Projects = ({ isDarkMode }) => {
  return (
    <section id='proyectos' className='projects container'>
      <span style={{ color: isDarkMode && '#fff' }}>Algunos de mis</span>
      <h2>Proyectos</h2>
      <p>Puedes dar click sobre un proyecto y verlo mas en profundidad.</p>
      <div className='projects-items'>
        <div className='projects-items__card'>
          <StaticImage
            src='../../images/sidebar.png'
            placeholder='tracedSVG'
            alt='sidebar project'
            className='projects-img'
          />
        </div>
        <div className='projects-items__card'>
          <StaticImage
            src='../../images/ecommerce.png'
            placeholder='tracedSVG'
            alt='ecomers project'
            className='projects-img'
          />
        </div>
        <div className='projects-items__card'>
          <StaticImage
            src='../../images/musicapp.png'
            placeholder='tracedSVG'
            alt='musicapp project'
            className='projects-img'
          />
        </div>
        <div className='projects-items__card'>
          <StaticImage
            src='../../images/hoc.png'
            placeholder='tracedSVG'
            alt='hoc project'
            className='projects-img'
          />
        </div>
      </div>
    </section>
  )
}

export default Projects

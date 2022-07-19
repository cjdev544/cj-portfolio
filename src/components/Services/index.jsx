import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import './Services.scss'

const Services = () => {
  return (
    <section className='services'>
      <div className='services-left'>
        <span>Conoce mis</span>
        <h2>Servicios</h2>
        <span>
          En esta sección podras ver los servicios que ofrezco como
          desarrollador. <br /> Si buscas algo especifico, no dudes en
          contactarme.
        </span>
        <button className='button services-left__button'>Contactame</button>
        <div
          className='blur services-blur1'
          style={{ background: '#abf1ff94' }}
        />
      </div>
      <div className='services-right'>
        <div style={{ left: '14rem' }}>
          <div className='services-card'>
            <StaticImage
              src='../../images/heartemoji.png'
              placeholder='tracedSVG'
              alt='emoji diseño UI UX'
              className='services-card__img'
            />
            <h3>UI / UX</h3>
            <p>
              Diseños atracivos enfocados en la usabilidad y experencia de
              usuario
            </p>
          </div>
        </div>
        <div style={{ top: '12rem', left: '-4rem' }}>
          <div className='services-card'>
            <StaticImage
              src='../../images/glasses.png'
              placeholder='tracedSVG'
              alt='emoji Programación'
              className='services-card__img'
            />
            <h3>Programación</h3>
            <p>
              Desarrollo de sitios web, Apps web y Apps de escritorio con
              tecnologías web
            </p>
          </div>
        </div>
        <div style={{ top: '19rem', left: '12rem' }}>
          <div className='services-card'>
            <StaticImage
              src='../../images/humble.png'
              placeholder='tracedSVG'
              alt='emoji diseño renponsivo'
              className='services-card__img'
            />
            <h3>Diseño responsivo</h3>
            <p>
              Diseño adaptable a dispositivos, mobil, tablet y de escritorio.
            </p>
          </div>
        </div>
        <div
          className='blur services-blur2'
          style={{ background: 'rgb(238 210 255)' }}
        />
      </div>
    </section>
  )
}

export default Services

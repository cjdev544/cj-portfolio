import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import Resume from './resume.pdf'
import './About.scss'

const About = () => {
  return (
    <section className='about'>
      <div className='about-left'>
        <div className='about-left__info'>
          <span>¡Hola!, yo soy</span>
          <h1>Jefferson Campos</h1>
          <span>
            Un gusto poder saludarte, vivo en Caracas Venezuela, soy electrónico
            de profesión y gran entusiasta de la tecnología. Programador,
            guitarrista afisionado y amante de los animales. Contactame y
            llevemos tus ideas a codigo.
          </span>
        </div>
        <a href={Resume} download>
          <button className='button about-left__button'>Descargar CV</button>
        </a>
        <div className='about-left__icons'>
          <a href='#' rel='noopener noreferrer nofollow' target='_blank'>
            <StaticImage
              src='../../images/github.png'
              placeholder='tracedSVG'
              alt='Github'
            />
          </a>
          <a href='#' rel='noopener noreferrer nofollow' target='_blank'>
            <StaticImage
              src='../../images/linkedin.png'
              placeholder='tracedSVG'
              alt='Linkedin'
            />
          </a>
          <a href='#' rel='noopener noreferrer nofollow' target='_blank'>
            <StaticImage
              src='../../images/twitter 1.png'
              placeholder='tracedSVG'
              alt='Twitter'
            />
          </a>
        </div>
      </div>
      <div className='about-right'>
        <StaticImage
          src='../../images/Vector1.png'
          placeholder='tracedSVG'
          alt='vector 1'
        />
        <StaticImage
          src='../../images/Vector2.png'
          placeholder='tracedSVG'
          alt='vector 2'
        />
        <StaticImage
          src='../../images/boy.png'
          placeholder='tracedSVG'
          alt='Foto CjDev544'
        />
        <StaticImage
          src='../../images/glassesimoji.png'
          placeholder='tracedSVG'
          alt='emiji con lentes'
        />
        <div style={{ top: '-4%', left: '60%' }}>
          <div className='about-right__floting'>
            <StaticImage
              src='../../images/crown.png'
              placeholder='tracedSVG'
              className='floting-image'
              alt='Corona'
            />
            <span>
              Desarrollador
              <br />
              Web
            </span>
          </div>
        </div>
        <div style={{ top: '21rem', left: '0' }}>
          <div className='about-right__floting'>
            <StaticImage
              src='../../images/thumbup.png'
              placeholder='tracedSVG'
              className='floting-image'
              alt='Mano arriba'
            />
            <span>
              Desarrollos
              <br />
              FullStack
            </span>
          </div>
        </div>
        <div className='blur' style={{ background: 'rgb(238 210 255)' }} />
        <div
          className='blur'
          style={{
            background: '#c1f5ff',
            top: '17rem',
            left: '-9rem',
            width: '21rem',
            height: '11rem',
          }}
        />
      </div>
    </section>
  )
}

export default About

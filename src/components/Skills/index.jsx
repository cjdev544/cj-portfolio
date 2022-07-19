import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import './Skills.scss'

const Skills = () => {
  return (
    <section className='skills'>
      <div className='services-left'>
        <span>Conoce que manejo</span>
        <h2>Tecnologías</h2>
        <span>
          En esta sección podras ver las tegnologías con las que he trabajado.{' '}
          <br /> Poco a poco conociendolas mejor y sumando nuevas, con la
          finalidad <br /> de expandir las posibilidades y divertirme en el
          proceso.
        </span>
        <div
          className='blur skills-blur1'
          style={{ background: '#abf1ff94' }}
        />
      </div>
      <div className='skills-right'>
        <div className='skills-right__circle'>
          <div className='skills-right__circle-item'>
            <StaticImage
              src='../../images/javascript 1.png'
              placeholder='tracedSVG'
              alt='JavaScript'
              className='skills-right__circle-img'
            />
            <span>JavaScript</span>
          </div>
          <div className='skills-right__circle-item'>
            <StaticImage
              src='../../images/react 1.png'
              placeholder='tracedSVG'
              alt='React'
              className='skills-right__circle-img'
            />
            <span>React</span>
          </div>
          <div className='skills-right__circle-item'>
            <StaticImage
              src='../../images/nextJs.png'
              placeholder='tracedSVG'
              alt='NextJs'
              className='skills-right__circle-img'
            />
            <span>NextJs</span>
          </div>
          <div className='skills-right__circle-item'>
            <StaticImage
              src='../../images/gatsby 1.png'
              placeholder='tracedSVG'
              alt='Gatsby'
              className='skills-right__circle-img'
            />
            <span>Gatsby</span>
          </div>
          <div className='skills-right__circle-item'>
            <StaticImage
              src='../../images/nodedotjs 1.png'
              placeholder='tracedSVG'
              alt='NodeJs'
              className='skills-right__circle-img'
            />
            <span>NodeJs</span>
          </div>
          <div className='skills-right__circle-item'>
            <StaticImage
              src='../../images/express 1.png'
              placeholder='tracedSVG'
              alt='Express'
              className='skills-right__circle-img'
            />
            <span>Express</span>
          </div>
        </div>
        <div className='skills-right__circle2'>
          <div className='skills-right__circle2-item'>
            <StaticImage
              src='../../images/html5 1.png'
              placeholder='tracedSVG'
              alt='HTML'
              className='skills-right__circle2-img'
            />
            <span>HTML</span>
          </div>
          <div className='skills-right__circle2-item'>
            <StaticImage
              src='../../images/css3 1.png'
              placeholder='tracedSVG'
              alt='CSS'
              className='skills-right__circle2-img'
            />
            <span>CSS</span>
          </div>
          <div className='skills-right__circle2-item'>
            <StaticImage
              src='../../images/sass 1.png'
              placeholder='tracedSVG'
              alt='Sass'
              className='skills-right__circle2-img'
            />
            <span>Sass</span>
          </div>
          <div className='skills-right__circle2-item'>
            <StaticImage
              src='../../images/apollographql 1.png'
              placeholder='tracedSVG'
              alt='Apollo'
              className='skills-right__circle2-img'
            />
            <span>Apollo</span>
          </div>
          <div className='skills-right__circle2-item'>
            <StaticImage
              src='../../images/mongodb 1.png'
              placeholder='tracedSVG'
              alt='MongoDB'
              className='skills-right__circle2-img'
            />
            <span>MongoDB</span>
          </div>
          <div className='skills-right__circle2-item'>
            <StaticImage
              src='../../images/electron 1.png'
              placeholder='tracedSVG'
              alt='Electron'
              className='skills-right__circle2-img'
            />
            <span>Electron</span>
          </div>
        </div>
        <div className='skills-backgrouncircle blue' />
        <div className='skills-backgrouncircle yellow' />
        <div className='skills-backgrouncircle blue2' />
        <div className='skills-backgrouncircle yellow2' />
      </div>
    </section>
  )
}

export default Skills

/**
 * JS
 * 1 JavaScript #f7df1e
 * 2 React #61dafb
 * 3 NextJs #000
 * 4 GatsbyJs #663399
 * 5 Node #339933
 * 6 Express #000
 *
 * 1 html #e34f26
 * 2 css #1572b6
 * 3 Apollo #311c87
 * 4 MongoDB #47a248
 * 5 Sass #cc6699
 * 6 Electron #47848f
 *
 * Twitter
 */
import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import Twitter from '@iconscout/react-unicons/icons/uil-twitter'
import Linkedin from '@iconscout/react-unicons/icons/uil-linkedin'
import Gitub from '@iconscout/react-unicons/icons/uil-github'
import './Footer.scss'

const Footer = () => {
  return (
    <footer className='footer'>
      <StaticImage
        src='../../images/wave.png'
        placeholder='tracedSVG'
        alt='footer'
        className='footer-background'
      />
      <div className='footer-content'>
        <span>CjDev544</span>
        <div className='footer-icons'>
          <Gitub color='white' size={'3rem'} />
          <Linkedin color='white' size={'3rem'} />
          <Twitter color='white' size={'3rem'} />
        </div>
      </div>
    </footer>
  )
}

export default Footer

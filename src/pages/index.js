import React from 'react'
import Navbar from '../components/Navbar'
import About from '../components/About'
import Services from '../components/Services'
import Skills from '../components/Skills'
import Portfolio from '../components/Portfolio'
import Contact from '../components/Contact'
import '../scss/index.scss'

const IndexPage = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <About />
        <Services />
        <Skills />
        <Portfolio />
        <Contact />
      </main>
    </>
  )
}

export default IndexPage

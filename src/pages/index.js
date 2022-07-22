import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import About from '../components/About'
import Services from '../components/Services'
import Skills from '../components/Skills'
import Portfolio from '../components/Portfolio'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import '../scss/index.scss'

const IndexPage = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  return (
    <div
      style={{ background: isDarkMode && '#000', color: isDarkMode && '#fff' }}
    >
      <header>
        <Navbar setIsDarkMode={setIsDarkMode} />
      </header>
      <main>
        <About isDarkMode={isDarkMode} />
        <Services isDarkMode={isDarkMode} />
        <Skills isDarkMode={isDarkMode} />
        <Portfolio isDarkMode={isDarkMode} />
        <Contact isDarkMode={isDarkMode} />
      </main>
      <Footer isDarkMode={isDarkMode} />
    </div>
  )
}

export default IndexPage

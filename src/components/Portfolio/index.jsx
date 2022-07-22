import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { Pagination, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css'
import './Portfolio.scss'

const Portfolio = ({ isDarkMode }) => {
  return (
    <section className='portfolio container' id='proyectos'>
      <span style={{ color: isDarkMode && '#fff' }}>Deslisar para ver más</span>
      <h2>Proyectos</h2>
      <p>Puedes dar click sobre un proyecto y verlo mas a profundidad.</p>
      <Swiper
        modules={[Pagination, A11y]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        className='portfolio-slider'
      >
        <SwiperSlide>
          <StaticImage
            src='../../images/sidebar.png'
            placeholder='tracedSVG'
            alt='sidebar project'
            className='portfolio-img'
          />
        </SwiperSlide>
        <SwiperSlide>
          <StaticImage
            src='../../images/ecommerce.png'
            placeholder='tracedSVG'
            alt='ecomers project'
            className='portfolio-img'
          />
        </SwiperSlide>
        <SwiperSlide>
          <StaticImage
            src='../../images/musicapp.png'
            placeholder='tracedSVG'
            alt='musicapp project'
            className='portfolio-img'
          />
        </SwiperSlide>
        <SwiperSlide>
          <StaticImage
            src='../../images/hoc.png'
            placeholder='tracedSVG'
            alt='hoc project'
            className='portfolio-img'
          />
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Portfolio

import React, { useCallback, useEffect } from 'react'
import FAQ from '@containers/FAQ'
import AboutUs from '@containers/AboutUs'
import ContactUs from '@containers/ContactUs'
import ProjectShowcase from '@containers/ProjectShowcase'
import ImageShowcase from '@containers/ImageShowcase'
import Service from '@containers/Service'

const Home = () => {
  return (
    <div className='flex flex-col'>
      <AboutUs />
      <Service />
      <ImageShowcase />
      <ProjectShowcase />
      {/*<FAQ />*/}
      <ContactUs />
    </div>
  )
}
export default Home

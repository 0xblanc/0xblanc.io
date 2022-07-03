import React, { useEffect, useState } from 'react'
import Header from '../shared/Header/Header'
import Footer from '../shared/Footer'
import Hero from '../../containers/Hero'
import MobileMenu from '../shared/Header/MobileMenu'

type DesktopFrameProps = {
  children: React.ReactNode
}

const DesktopFrame = (props: DesktopFrameProps) => {
  const { children } = props

  const [menuOpen, setMenuOpen] = useState(false)

  const menuToggleHandler = () => {
    const body = document.body as any
    console.log(body)
    if (menuOpen) {
      body.classList.remove('overflow-hidden')
    } else {
      body.classList.add('overflow-hidden')
    }
    setMenuOpen(prev => !prev)
  }


  return (
    <div className='h-full'>
      <Hero />
      <div className='main relative'>
        <Header menuOpen={menuOpen} menuToggleHandler={menuToggleHandler} />
        <div>{children}</div>
      </div>
      <Footer />
      <MobileMenu menuOpen={menuOpen} menuToggleHandler={menuToggleHandler} />
    </div>
  )
}
export default DesktopFrame

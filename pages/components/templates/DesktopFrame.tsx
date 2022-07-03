import React, { useEffect, useState } from 'react'
import Header from '@components/shared/Header/Header'
import Footer from '@components/shared/Footer'
import Hero from '@containers/Hero'
import MobileMenu from '@components/shared/Header/MobileMenu'

type DesktopFrameProps = {
  children: React.ReactNode
}
const navItems = [
  {
    text: 'About Us',
    href: '#about-us',
  },
  {
    text: 'Service We Provide',
    href: '#service-we-provide',
  },
  {
    text: 'Past Projects',
    href: '#past-projects',
  },
  {
    text: 'Contact Us',
    href: '#contact-us',
  },
]

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
        <Header navItems={navItems} menuOpen={menuOpen} menuToggleHandler={menuToggleHandler} />
        <div>{children}</div>
      </div>
      <Footer />
      <MobileMenu navItems={navItems} menuOpen={menuOpen} menuToggleHandler={menuToggleHandler} />
    </div>
  )
}
export default DesktopFrame

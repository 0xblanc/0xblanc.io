import React, { useEffect, useState } from 'react'
import Header from '../shared/Header/Header'
import Footer from '../shared/Footer'
import Hero from '../../containers/web3/Hero'
import Web2Hero from '../../containers/web2/Web2Hero'
import MobileMenu from '../shared/Header/MobileMenu'
import { useRouter } from 'next/router'
import DiscoverBox from "../shared/DiscoverBox";

type DesktopFrameProps = {
  children: React.ReactNode
}

const DesktopFrame = (props: DesktopFrameProps) => {
  const { children } = props

  const [menuOpen, setMenuOpen] = useState(false)
  const router = useRouter()

  const menuToggleHandler = () => {
    const body = document.body as any
    if (menuOpen) {
      body.classList.remove('overflow-hidden')
    } else {
      body.classList.add('overflow-hidden')
    }
    setMenuOpen(prev => !prev)
  }

  return (
    <div className='h-full'>
      {
        router.pathname === '/web2' ? <Web2Hero /> : <Hero />
      }
      <div className='main relative'>
        {
          router.pathname !== '/web2' && <Header menuOpen={menuOpen} menuToggleHandler={menuToggleHandler} />
        }
        <div>{children}</div>
      </div>
      <Footer mode={router.pathname === '/web2' ? 'dark' : 'light'} />
      <MobileMenu menuOpen={menuOpen} menuToggleHandler={menuToggleHandler} />
      {
        router.pathname === '/web2' ? (
          <DiscoverBox mode={'dark'} text={'Discover Web3.0 Services'} link={'/'} forceHide={menuOpen} />
        ) : (
          <DiscoverBox mode={'light'} text={'Discover Web2.0 Services'} link={'/web2'} forceHide={menuOpen} />
        )
      }
    </div>
  )
}
export default DesktopFrame

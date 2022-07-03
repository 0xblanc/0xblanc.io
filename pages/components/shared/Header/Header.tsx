import HeaderMain from '@components/shared/Header/HeaderMain'
import { useState } from 'react'
import HeaderMobile from './HeaderMobile'

const Header = () => {
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
  const socialItems = {
    email: 'mailto:0xblanc.io@proton.me',
    instagram: 'https://instagram.com/0xblanc.io',
    telegram: 'https://t.me/oxblanc',
  }

  return (
    <div className='flex-col w-full sticky flex top-0 z-50'>
      <HeaderMain navItems={navItems} />
      <HeaderMobile navItems={navItems} socialItems={socialItems} />
    </div>
  )
}
export default Header

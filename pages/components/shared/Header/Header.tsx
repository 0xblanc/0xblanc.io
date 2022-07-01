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
    email: 'xxxx@xxxx.com',
    instagram: 'instagram.com/xxxx',
    telegram: 'telegram.com/xxxx',
  }

  return (
    <div className='flex-col w-full sticky flex top-0 z-50'>
      <HeaderMain navItems={navItems} />
      <HeaderMobile navItems={navItems} socialItems={socialItems} />
    </div>
  )
}
export default Header

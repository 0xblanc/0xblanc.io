import Logo from '@assets/logo/big_logo.svg'
import { XIcon, MenuIcon } from '@heroicons/react/solid'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import Email from '@assets/media/email.svg'
import Instagram from '@assets/media/instagram.svg'
import Telegram from '@assets/media/telegram.svg'

type HeaderMobileProps = {
  navItems: Array<{ text: string; href: string }>
  socialItems: {}
}

const HeaderMobile = (props: HeaderMobileProps) => {
  const { navItems, socialItems } = props

  const [muted, setMuted] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const muteHandler = React.useCallback(() => {
    setMuted(prev => !prev)
  }, [])

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
    <div className='lg:hidden flex py-1 w-full justify-between bg-white shadow-md h-20'>
      {!menuOpen && (
        <div className='flex px-6 py-5 w-full items-center  justify-start'>
          <MenuIcon onClick={menuToggleHandler} className='h-12 mr-4 text-darkBlue' />
          <Image className='h-8  mr-4 text-darkBlue' src={Logo} alt='' onClick={menuToggleHandler} />
        </div>
      )}
      {menuOpen && (
        <div className=' h-screen bg-white z-1000 w-full flex flex-col'>
          <div className='flex px-6 py-5 w-full items-center justify-start shadow-lg'>
            {/* <img src={Cross} alt="" /> */}
            <XIcon className='h-12 mr-4 text-darkBlue' onClick={menuToggleHandler}></XIcon>
            <Image className='h-8 mr-4' src={Logo} alt='' onClick={menuToggleHandler} />
          </div>
          <div className='flex flex-col flex-1 px-6 py-12'>
            <div className='flex-1 flex flex-col font-thin'>
              {navItems.map((item, index) => {
                return (
                  <div className='text-3xl mt-5 text-darkBlue' key={index} onClick={menuToggleHandler}>
                    <Link href={item.href}>
                      {item.text}
                    </Link>
                  </div>
                )
              })}
            </div>
            <div className='flex flex-row items-center justify-between mx-12'>
              <div className='flex items-center px-2 hover:scale-125 cursor-pointer'>
                <Link href='mailto:0xblanc.io@proton.me'>
                  <Image src={Email} alt='Email' width={24} height={24} />
                </Link>
              </div>
              <div className='flex items-center px-2 hover:scale-125 cursor-pointer'>
                <Link href='https://instagram.com/0xblanc.io'>
                  <Image src={Instagram} alt='Instagram' width={24} height={24} />
                </Link>
              </div>
              <div className='flex items-center px-2 hover:scale-125 cursor-pointer'>
                <Link href='https://t.me/oxblanc'>
                  <Image src={Telegram} alt='Telegram' width={24} height={24} />
                </Link>
              </div>
            </div>
          </div>
          <div className='flex justify-center'></div>
        </div>
      )}
    </div>
  )
}

export default HeaderMobile

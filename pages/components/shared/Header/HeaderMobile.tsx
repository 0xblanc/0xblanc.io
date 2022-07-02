import Logo from '@assets/logo/big_logo.svg'
import { XIcon, MenuIcon } from '@heroicons/react/solid'
import EmailLogo from '@assets/media/email.svg'
import InstagramLogo from '@assets/media/instagram.svg'
import TelegramLogo from '@assets/media/telegram.svg'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

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
          <div className='flex flex-col flex-1 px-6 font-thin'>
            {navItems.map((item, index) => {
              return (
                <Link href='/' className='text-3xl mt-5 text-darkBlue' key={index}>
                  {item.text}
                </Link>
              )
            })}
            {Object.keys(socialItems).map((item, index) => {
              return (
                <div className='flex flex-row items-center text-center mt-5' key={index}>
                  {item === 'email' && <Image className='h-8 mr-5' alt='Email' src={EmailLogo} />}
                  {item === 'instagram' && <Image className='h-8 mr-5' alt='Instagram' src={InstagramLogo} />}
                  {item === 'telegram' && <Image className='h-8 mr-5' alt='Telegram' src={TelegramLogo} />}
                  <Link href='/' className='text-3xl text-darkBlue'>
                    {socialItems[item]}
                  </Link>
                </div>
              )
            })}
          </div>
          <div className='flex justify-center'></div>
        </div>
      )}
    </div>
  )
}

export default HeaderMobile

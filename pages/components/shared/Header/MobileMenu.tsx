import { XIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import Logo from '@assets/logo/big_logo.svg'
import Link from 'next/link'
import Email from '@assets/media/email.svg'
import Instagram from '@assets/media/instagram.svg'
import Telegram from '@assets/media/telegram.svg'
import React, { useEffect } from 'react'

type MobileMenuProps = {
  navItems: Array<{ text: string; href: string }>
  menuOpen: boolean
  menuToggleHandler: () => void
}

const MobileMenu = (props: MobileMenuProps) => {
  const { navItems, menuOpen, menuToggleHandler } = props
  const [top ,setTop] = React.useState(0)

  useEffect(() => {
    setTop(window.pageYOffset)
  }, [menuOpen])

  return (
    <>
      {menuOpen && (
        <div id='mobile-menu' className='h-screen bg-white z-1000 w-full flex flex-col absolute' style={{ top: `${top}px` }}>
          <div className='flex px-6 py-5 w-full items-center justify-start shadow-lg'>
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
    </>
  )
}

export default MobileMenu

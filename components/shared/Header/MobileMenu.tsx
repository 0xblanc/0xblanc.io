import { XIcon } from '@heroicons/react/solid'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { useTranslation, useLanguageQuery, LanguageSwitcher } from 'next-export-i18n'

type MobileMenuProps = {
  menuOpen: boolean
  menuToggleHandler: () => void
}
const navItems = [
  {
    text: 'AboutUs.title',
    href: '#about-us',
  },
  {
    text: 'Services.title',
    href: '#service-we-provide',
  },
  {
    text: 'ProjectShowcase.title',
    href: '#past-projects',
  },
  {
    text: 'ContactUs.title',
    href: '#contact-us',
  },
]

const MobileMenu = (props: MobileMenuProps) => {
  const { menuOpen, menuToggleHandler } = props
  const [top, setTop] = React.useState(0)
  const { t } = useTranslation()
  const [query] = useLanguageQuery()
  useEffect(() => {
    setTop(window.pageYOffset)
  }, [menuOpen])

  return (
    <>
      {menuOpen && (
        <div id='mobile-menu' className='h-screen bg-white z-1000 w-full flex flex-col absolute' style={{ top: `${top}px` }}>
          <div className='flex px-6 py-5 w-full items-center justify-start shadow-lg'>
            <XIcon className='h-12 mr-4 text-darkBlue' onClick={menuToggleHandler}></XIcon>
            <img
              className='h-8 mr-4'
              src='https://res.cloudinary.com/blanc-io/image/upload/q_auto/v1656857424/website/text_logo_kahw7o.svg'
              alt='Logo'
              onClick={menuToggleHandler}
              width={153}
              height={32}
            />
          </div>
          <div className='flex flex-col flex-1 px-6 py-12'>
            <div className='flex-1 flex flex-col font-thin'>
              {navItems.map((item, index) => {
                return (
                  <div className='text-3xl mt-5 text-darkBlue' key={index} onClick={menuToggleHandler}>
                    <Link href={item.href}>{t(item.text)}</Link>
                  </div>
                )
              })}
            </div>
            <div className='flex flex-row items-center justify-between mx-12'>
              <div className='flex items-center px-2 hover:scale-125 cursor-pointer'>
                <Link href='mailto:0xblanc.io@proton.me'>
                  <img
                    src='https://res.cloudinary.com/blanc-io/image/upload/q_auto/v1656857867/website/media/email_toxyaj.svg'
                    alt='Email'
                    width={24}
                    height={24}
                  />
                </Link>
              </div>
              <div className='flex items-center px-2 hover:scale-125 cursor-pointer'>
                <Link href='https://instagram.com/0xblanc.io'>
                  <img
                    src='https://res.cloudinary.com/blanc-io/image/upload/q_auto/v1656857806/website/media/instagram_glwsd1.svg'
                    alt='Instagram'
                    width={24}
                    height={24}
                  />
                </Link>
              </div>
              <div className='flex items-center px-2 hover:scale-125 cursor-pointer'>
                <Link href='https://t.me/oxblanc'>
                  <img
                    src='https://res.cloudinary.com/blanc-io/image/upload/q_auto/v1656857867/website/media/telegram_ycwij6.svg'
                    alt='Telegram'
                    width={24}
                    height={24}
                  />
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

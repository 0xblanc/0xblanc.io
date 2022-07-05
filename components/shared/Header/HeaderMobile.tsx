import Logo from '@assets/logo/big_logo.svg'
import { MenuIcon } from '@heroicons/react/solid'
import React from 'react'
import { useTranslation, useLanguageQuery, LanguageSwitcher } from 'next-export-i18n'

type HeaderMobileProps = {
  menuOpen: boolean
  menuToggleHandler: () => void
}

const HeaderMobile = (props: HeaderMobileProps) => {
  const { menuOpen, menuToggleHandler } = props
  const { t } = useTranslation()
  const [query] = useLanguageQuery()
  return (
    <div className='lg:hidden flex py-1 w-full justify-between bg-white shadow-md h-20'>
      <div className='flex px-6 py-5 w-full items-center justify-evenly'>
        <MenuIcon onClick={menuToggleHandler} className='h-12 mr-4 text-darkBlue' />
        <img
          className='h-8  mr-4 text-darkBlue'
          src='https://res.cloudinary.com/blanc-io/image/upload/q_auto/v1656857424/website/text_logo_kahw7o.svg'
          alt='Logo'
          onClick={menuToggleHandler}
        />
        <div className='text-3xl justify-end text-darkBlue'>
          {query && query.lang === 'zhHK' && <LanguageSwitcher lang='en'>En</LanguageSwitcher>}
          {query && query.lang === 'en' && <LanguageSwitcher lang='zhHK'>繁中</LanguageSwitcher>}
        </div>
      </div>
    </div>
  )
}

export default HeaderMobile

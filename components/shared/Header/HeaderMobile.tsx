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
      <div className='flex px-6 py-5 w-full items-center'>
        <div className='flex flex-1'>
          <img
            src='https://res.cloudinary.com/blanc-io/image/upload/q_auto/v1656857424/website/text_logo_kahw7o.svg'
            alt='Logo'
            onClick={menuToggleHandler}
            width={153}
            height={32}
          />
        </div>
        <div className='flex'>
          <MenuIcon onClick={menuToggleHandler} className='h-8 text-darkBlue' />
        </div>
      </div>
    </div>
  )
}

export default HeaderMobile

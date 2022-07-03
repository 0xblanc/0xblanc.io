import Logo from '@assets/logo/big_logo.svg'
import { MenuIcon } from '@heroicons/react/solid'
import React from 'react'
import Image from 'next/image'
type HeaderMobileProps = {
  menuOpen: boolean
  menuToggleHandler: () => void
}

const HeaderMobile = (props: HeaderMobileProps) => {
  const { menuOpen,  menuToggleHandler } = props

  return (
    <div className='lg:hidden flex py-1 w-full justify-between bg-white shadow-md h-20'>
      <div className='flex px-6 py-5 w-full items-center  justify-start'>
        <MenuIcon onClick={menuToggleHandler} className='h-12 mr-4 text-darkBlue' />
        <Image className='h-8  mr-4 text-darkBlue' src={Logo} alt='' onClick={menuToggleHandler} />
      </div>
    </div>
  )
}

export default HeaderMobile

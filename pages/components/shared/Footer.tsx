import Instagram from '@assets/media/instagram_white.svg'
import Telegram from '@assets/media/telegram_white.svg'
import Image from 'next/image'
import Email from '@assets/media/email_white.svg'

const Footer = () => {
  return (
    <div className='flex bg-darkElectricBlue p-2 justify-center'>
      <div className='flex flex-col md:flex-row items-center bg-darkElectricBlue justify-between max-w-full' style={{ width: 992 }}>
        <p className='text-white text-lg'>Copyright © 2022 0xBlanc. All rights reserved.</p>
        <div className='flex flex-row'>
          <p className='text-white text-lg'>Find us on:</p>
          <div className='flex flex-row items-center'>
            <a href='mailto:0xblanc.io@proton.me' className='flex items-center px-2 hover:scale-125 cursor-pointer'>
              <Image src={Email} alt='Email' />
            </a>
            <a className='flex items-center px-2 hover:scale-125 cursor-pointer' href='https://instagram.com/0xblanc.io'>
              <Image src={Instagram} alt='Instagram' />
            </a>
            <a className='flex items-center px-2 hover:scale-125 cursor-pointer'>
              <Image src={Telegram} alt='Telegram' />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Footer

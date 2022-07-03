import Instagram from '@assets/media/instagram_white.svg'
import Telegram from '@assets/media/telegram_white.svg'
import Email from '@assets/media/email_white.svg'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='flex bg-darkElectricBlue p-2 justify-center'>
      <div className='flex flex-col md:flex-row items-center bg-darkElectricBlue justify-between max-w-full' style={{ width: 992 }}>
        <p className='text-white text-base sm:text-lg'>Copyright © 2022 0xBlanc. All rights reserved.</p>
        <div className='flex flex-row'>
          <p className='text-white text-lg mr-2'>Find us on:</p>
          <div className='flex flex-row items-center'>
            <div className='flex items-center px-2 hover:scale-125 cursor-pointer'>
              <Link href='mailto:0xblanc.io@proton.me'>
                <img src='https://res.cloudinary.com/blanc-io/image/upload/q_auto/v1656857806/website/media/email_white_okqc5z.svg' alt='Email' width={24} height={24} />
              </Link>
            </div>
            <div className='flex items-center px-2 hover:scale-125 cursor-pointer'>
              <Link href='https://instagram.com/0xblanc.io'>
                <img src='https://res.cloudinary.com/blanc-io/image/upload/q_auto/v1656857806/website/media/instagram_white_gq2wrr.svg' alt='Instagram' width={24} height={24} />
              </Link>
            </div>
            <div className='flex items-center px-2 hover:scale-125 cursor-pointer'>
              <Link href='https://t.me/oxblanc'>
                <img src='https://res.cloudinary.com/blanc-io/image/upload/q_auto/v1656857806/website/media/telegram_white_zhib7w.svg' alt='Telegram' width={24} height={24} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Footer

import Instagram from '@assets/media/instagram_white.svg'
import Telegram from '@assets/media/telegram_white.svg'

const Footer = () => {
  return (
    <div className="w-full h-20 bg-darkElectricBlue p-2 flex justify-center">
      <div className='flex justify-between items-center' style={{ width: '992px', maxWidth: '100%' }}>
        <p className="text-white text-lg">
          Copyright © 2022 0xBlanc. All rights reserved.
        </p>
        <div className='flex items-center'>
          <p className='text-white text-lg'>
            Find us on:
          </p>
          <a className='flex items-center px-2 hover:scale-125 cursor-pointer' href='https://instagram.com/0xblanc.io'>
            <img src={Instagram} alt="Instagram" />
          </a>
          <a className='flex items-center px-2 hover:scale-125 cursor-pointer'>
            <img src={Telegram} alt="Telegram" />
          </a>
        </div>
      </div>
    </div>
  )
}
export default Footer

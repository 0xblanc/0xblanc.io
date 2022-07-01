import Instagram from '@assets/media/instagram_white.svg'
import Telegram from '@assets/media/telegram_white.svg'

const Footer = () => {
  return (
    <div className='flex flex-col md:flex-row  bg-darkElectricBlue p-2 justify-between'>
      <h5 className='text-white text-2xl font-Raleway '>Copyright © 2022 0xBlanc. All rights reserved.</h5>
      <div className='flex flex-col sm:flex-row space-x-2 '>
        <p className='text-white text-2xl font-Raleway'>Find us on:</p>
        <div className='flex flex-row space-x-3 h-10'>
          <img style={{}} src={Email} alt='Email' />
          <img style={{}} src={Telegram} alt='Telegram' />
          <img style={{}} src={Instagram} alt='Instagram' />
        </div>
      </div>
    </div>
  )
}
export default Footer

import Logo from '@assets/logo/text_logo.svg'
import Telegram from '@assets/media/telegram.svg'
import Instagram from '@assets/media/instagram.svg'
import Email from '@assets/media/email.svg'
import HoverableLink from '@components/shared/HoverableLink'
import Image from 'next/image'

const navItems = [
  {
    text: 'About Us',
    href: '#about-us',
  },
  {
    text: 'Service We Provide',
    href: '#service-we-provide',
  },
  {
    text: 'Past Projects',
    href: '#past-projects',
  },
  {
    text: 'Contact Us',
    href: '#contact-us',
  },
]

const HeaderMain = () => {
  return (
    <div className='hidden lg:flex h-20 bg-red shadow-md bg-white'>
      <div className='flex h-full flex-1 pl-6'>
        <a href='https://0xblanc.io' className='flex h-full px-6 py-6'>
          <Image src={Logo} alt='logo' width={149} height={32} />
        </a>
        {navItems.map((item, index) => (
          <div className='flex h-full' key={index}>
            <HoverableLink text={item.text} href={item.href} color={'darkBlue'} padding={'px-4 py-6'} />
          </div>
        ))}
      </div>
      <div className='flex h-full justify-end pr-8'>
        <a className='flex items-center px-4 py-6 hover:scale-125 cursor-pointer'>
          <Image src={Email} alt='Email' width={24} height={24} />
        </a>
        <a className='flex items-center px-4 py-6 hover:scale-125 cursor-pointer' href='https://instagram.com/0xblanc.io'>
          <Image src={Instagram} alt='Instagram' width={24} height={24} />
        </a>
        <a className='flex items-center px-4 py-6 hover:scale-125 cursor-pointer' href='https://t.me/oxblanc'>
          <Image src={Telegram} alt='Telegram' width={24} height={24} />
        </a>
      </div>
    </div>
  )
}
export default HeaderMain

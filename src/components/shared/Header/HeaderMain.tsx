import Logo from "@assets/logo/text_logo.svg"
import Telegram from '@assets/media/telegram.svg'
import Instagram from '@assets/media/instagram.svg'
import Email from '@assets/media/email.svg'

const HeaderMain = () => {
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
    }
  ]
  return (
    <div className="hidden md:flex h-20 bg-red shadow-md">
     <div className='flex h-full flex-1 pl-6'>
       <a href='https://0xblanc.io' className='flex h-full px-6 py-6'>
          <img src={Logo} alt="logo" />
       </a>
       {navItems.map((item, index) => (
          <div className="flex h-full" key={index}>
            <a href={item.href} className="flex items-center px-4 py-6">
              <p className='text-darkBlue text-base uppercase'>
                {item.text}
              </p>
            </a>
          </div>
       ))}
     </div>
      <div className='flex h-full justify-end pr-8'>
        <a className='flex items-center px-4 py-6'>
          <img src={Email} alt="Email" />
        </a>
        <a className='flex items-center px-4 py-6' href='https://instagram.com/0xblanc.io'>
          <img src={Instagram} alt="Instagram" />
        </a>
        <a className='flex items-center px-4 py-6'>
          <img src={Telegram} alt="Telegram" />
        </a>
      </div>
    </div>
  )
}
export default HeaderMain

import Logo from "@assets/logo/text_logo.svg"
import Telegram from '@assets/media/telegram.svg'
import Instagram from '@assets/media/instagram.svg'
import Email from '@assets/media/email.svg'
import HoverableLink from '@components/shared/HoverableLink'

type HeaderMainProps = {
  navItems: Array<{ text: string, href: string }>
}

const HeaderMain = (props: HeaderMainProps) => {
  const { navItems } = props

  return (
    <div className="hidden lg:flex h-20 bg-red shadow-md bg-white">
     <div className='flex h-full flex-1 pl-6'>
       <a href='https://0xblanc.io' className='flex h-full px-6 py-6'>
          <img src={Logo} alt="logo" />
       </a>
       {navItems.map((item, index) => (
          <div className="flex h-full" key={index}>
            <HoverableLink text={item.text} href={item.href} color={'darkBlue'} padding={'px-4 py-6'} />
          </div>
       ))}
     </div>
      <div className='flex h-full justify-end pr-8'>
        <a className='flex items-center px-4 py-6 hover:scale-125 cursor-pointer'>
          <img src={Email} alt="Email" />
        </a>
        <a className='flex items-center px-4 py-6 hover:scale-125 cursor-pointer' href='https://instagram.com/0xblanc.io'>
          <img src={Instagram} alt="Instagram" />
        </a>
        <a className='flex items-center px-4 py-6 hover:scale-125 cursor-pointer'>
          <img src={Telegram} alt="Telegram" />
        </a>
      </div>
    </div>
  )
}
export default HeaderMain

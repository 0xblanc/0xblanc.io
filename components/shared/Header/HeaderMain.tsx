import HoverableLink from '../HoverableLink'
import { useTranslation, useLanguageQuery, LanguageSwitcher } from 'next-export-i18n'

const navItems = [
  {
    text: 'AboutUs.title',
    href: '#about-us',
  },
  {
    text: 'Services.title',
    href: '#service-we-provide',
  },
  {
    text: 'ProjectShowcase.title',
    href: '#past-projects',
  },
  {
    text: 'ContactUs.title',
    href: '#contact-us',
  },
]

const HeaderMain = () => {
  const { t } = useTranslation()
  const [query] = useLanguageQuery()
  return (
    <div className='hidden lg:flex h-20 bg-red shadow-md bg-white'>
      <div className='flex h-full flex-1 pl-6'>
        <a href='https://0xblanc.io' className='flex h-full px-6 py-6'>
          <img
            src='https://res.cloudinary.com/blanc-io/image/upload/q_auto/v1656857424/website/text_logo_kahw7o.svg'
            alt='logo'
            width={149}
            height={32}
          />
        </a>
        {navItems.map((item, index) => (
          <div className='flex h-full' key={index}>
            <HoverableLink text={t(item.text)} href={item.href} color={'darkBlue'} padding={'px-4 py-6'} />
          </div>
        ))}
      </div>
      <div className='flex h-full justify-end pr-8'>
        <div className='flex flex-row space-x-3 items-center text-darkBlue font-bold text-xl mx-5'>
          {query && query.lang === 'zh-HK' && <a className='flex items-center px-4 py-6 hover:scale-125 cursor-pointer' href='https://0xblanc.io'>EN</a>}
          {query && query.lang === 'en' && <a className='flex items-center px-4 py-6 hover:scale-125 cursor-pointer' href='https://0xblanc.io/zh-hk'>繁中</a>}
        </div>
        <a className='flex items-center px-4 py-6 hover:scale-125 cursor-pointer' href='mailto:0xblanc.io@proton.me'>
          <img
            src='https://res.cloudinary.com/blanc-io/image/upload/q_auto/v1656857867/website/media/email_toxyaj.svg'
            alt='Email'
            width={24}
            height={24}
          />
        </a>
        <a className='flex items-center px-4 py-6 hover:scale-125 cursor-pointer' href='https://instagram.com/0xblanc.io'>
          <img
            src='https://res.cloudinary.com/blanc-io/image/upload/q_auto/v1656857806/website/media/instagram_glwsd1.svg'
            alt='Instagram'
            width={24}
            height={24}
          />
        </a>
        <a className='flex items-center px-4 py-6 hover:scale-125 cursor-pointer' href='https://t.me/oxblanc'>
          <img
            src='https://res.cloudinary.com/blanc-io/image/upload/q_auto/v1656857867/website/media/telegram_ycwij6.svg'
            alt='Telegram'
            width={24}
            height={24}
          />
        </a>
      </div>
    </div>
  )
}
export default HeaderMain

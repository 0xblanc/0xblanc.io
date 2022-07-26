import Link from 'next/link'
import {useTranslation} from "next-export-i18n";

const Footer = () => {
  const { t } = useTranslation()

  return (
    <div className='flex bg-darkElectricBlue p-2 justify-center'>
      <div className='flex flex-col md:flex-row items-center bg-darkElectricBlue justify-between w-full max-w-[992px]'>
        <p className='text-white text-base sm:text-lg mb-2 md:mb-0'>Copyright © 2022 0xBlanc. All rights reserved.</p>
        <div className='flex flex-row items-center'>
          <p className='text-white text-lg mr-2 hidden md:block'>{t('footer.find-us-on')}</p>
          <div className='flex flex-row items-center'>
            <div className='flex items-center mx-1 p-3 md:px-2 hover:scale-125 cursor-pointer'>
              <Link href='mailto:0xblanc.io@proton.me'>
                <img src='https://res.cloudinary.com/blanc-io/image/upload/q_auto/v1656857806/website/media/email_white_okqc5z.svg' alt='Email' width={24} height={24} />
              </Link>
            </div>
            <div className='flex items-center mx-1 p-3 md:px-2 hover:scale-125 cursor-pointer'>
              <a href='https://instagram.com/0xblanc.io' target='_blank' rel="noreferrer">
                <img src='https://res.cloudinary.com/blanc-io/image/upload/q_auto/v1656857806/website/media/instagram_white_gq2wrr.svg' alt='Instagram' width={24} height={24} />
              </a>
            </div>
            <div className='flex items-center mx-1 p-3 md:px-2 hover:scale-125 cursor-pointer'>
              <a href='https://wa.me/56376528' target='_blank' rel="noreferrer">
                <img
                  src='https://res.cloudinary.com/blanc-io/image/upload/q_auto/v1658842286/website/media/whatsapo_white_mqgijv.svg'
                  alt='Whatsapp'
                  width={24}
                  height={24}
                />
              </a>
            </div>
            <div className='flex items-center mx-1 p-3 md:px-2 hover:scale-125 cursor-pointer'>
              <a href='https://t.me/oxblanc' target='_blank' rel="noreferrer">
                <img src='https://res.cloudinary.com/blanc-io/image/upload/q_auto/v1656857806/website/media/telegram_white_zhib7w.svg' alt='Telegram' width={24} height={24} />
              </a>
            </div>
            <div className='flex items-center mx-1 p-3 md:px-2 hover:scale-125 cursor-pointer'>
              <a href='https://www.linkedin.com/company/0xblanc' target='_blank' rel="noreferrer">
                <img src='https://res.cloudinary.com/blanc-io/image/upload/q_auto/v1657539386/website/media/linkedin_white_e8gmcz.svg' alt='LinkedIn' width={24} height={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Footer

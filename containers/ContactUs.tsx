import { useState } from 'react'
import { useTranslation, useLanguageQuery, LanguageSwitcher } from 'next-export-i18n'

import Title from '../components/shared/Title'
const ContactUs = () => {
  const { t } = useTranslation()
  const [query] = useLanguageQuery()
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  const subjectOnChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSubject(e.target.value)
  }

  const messageOnChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    e.preventDefault()
    setMessage(e.target.value)
  }

  return (
    <div id='contact-us' className='py-20 md:py-28'>
      <div className='container mx-auto w-full'>
        <div className='flex flex-col items-center'>
          <div className='container w-full mx-auto flex justify-center'>
            <Title text={t('ContactUs.title')} />
          </div>
          <div className='flex flex-col justify-center px-4 md:px-0 w-full pt-7 md:pb-12 max-w-[992px]'>
            <input
              className='w-full border-2 border-darkGray px-6 py-4 mb-4'
              type='text'
              placeholder={t('ContactUs.placeholder-subject')}
              value={subject}
              onChange={subjectOnChangeHandler}
            />
            <textarea
              className='w-full border-2 border-darkGray px-6 py-4 h-96 mb-4'
              placeholder={t('ContactUs.placeholder-message')}
              cols={15}
              value={message}
              onChange={e => messageOnChangeHandler(e)}
            />
            <div className='flex justify-between'>
              <div className=''>
                <a className='bg-blue text-white px-4 py-2' href={`mailto:0xblanc.io@proton.me?subject=${subject}&body=${message}`}>
                  {t('ContactUs.button-send')}
                </a>
              </div>
              <div className='flex'>
                <a className='flex items-center px-2 hover:scale-125 cursor-pointer' href='https://instagram.com/0xblanc.io'>
                  <img
                    src='https://res.cloudinary.com/blanc-io/image/upload/q_auto/v1656857806/website/media/instagram_glwsd1.svg'
                    alt='Instagram'
                    width={24}
                    height={24}
                  />
                </a>
                <a className='flex items-center px-2 hover:scale-125 cursor-pointer' href='https://t.me/oxblanc'>
                  <img
                    src='https://res.cloudinary.com/blanc-io/image/upload/q_auto/v1656857867/website/media/telegram_ycwij6.svg'
                    alt='Telegram'
                    width={24}
                    height={24}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ContactUs

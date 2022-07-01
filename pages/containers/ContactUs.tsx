import { useState } from 'react'

// import Title from '@components/shared/Title'
import Title from '@components/shared/Title'
import Instagram from '@assets/media/instagram.svg'
import Telegram from '@assets/media/telegram.svg'
import Image from 'next/image'
const ContactUs = () => {
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
    <div id='about-us' className='py-28'>
      <div className='container mx-auto w-full'>
        <div className='flex flex-col items-center'>
          <div className='container w-full mx-auto flex justify-center'>
            <Title text={'Contact Us'} />
          </div>
          <div className='flex flex-col justify-center px-4 md:px-0 w-full pt-7 pb-24 w-[992px] max-w-full'>
            <input
              className='w-full border-2 border-darkGray px-6 py-4 mb-4'
              type='text'
              placeholder='Subject'
              value={subject}
              onChange={subjectOnChangeHandler}
            />
            <textarea
              className='w-full border-2 border-darkGray px-6 py-4 h-96 mb-4'
              placeholder='Write your email message here...'
              cols={15}
              value={message}
              onChange={e => messageOnChangeHandler(e)}
            />
            <div className='flex justify-between'>
              <div className=''>
                <a className='bg-blue text-white px-4 py-2' href={`mailto:0xblanc.io@proton.me?subject=${subject}&body=${message}`}>
                  Send
                </a>
              </div>
              <div className='flex'>
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
      </div>
    </div>
  )
}
export default ContactUs

import Cube from '../../components/shared/Cube'
import { useTranslation, useLanguageQuery, LanguageSwitcher } from 'next-export-i18n'
import { useEffect, useState } from 'react'
import Title from '../../components/shared/Title'

const faqs = [
  {
    question: 'Who is Akira?',
    answer: 'We are NFT galfrens Waiting you in the metaverse.',
  },
  {
    question: 'How many Akiragals will there be?',
    answer: 'There will be 6,666 NFTs in the collection',
  },
  {
    question: 'Why Akiragal?',
    answer: 'fully community driven, web 3.0 and ai techonology integration The first virtual Galfren that could be truly owned by you, so why not?',
  },
  {
    question: 'When is the mint day and price ?',
    answer: 'Will be released closer to the mint day',
  },
  {
    question: 'How to WL?',
    answer: 'Be an active member in discord, join our campaigns and events !',
  },
  {
    question: 'How to request a collaboration/ partnership?',
    answer: 'DM @00.01 on our discord to discuss further.',
  },
]

const FAQ = (props: any) => {
  const { t } = useTranslation()

  const [expanded, setExpanded] = useState([])
  const [faqs, setFaqs] = useState([])

  useEffect(() => {
    const arr = [] as []
    for (let i = 0; i < t('web2.faq.faqs').length; i++) {
      // @ts-ignore
      arr.push(t('web2.faq.faqs')[i])
    }
    setFaqs(arr)
  }, [])

  const expandHandler = (index: number) => {
    // @ts-ignore
    if (expanded.includes(index)) {
      setExpanded(expanded.filter((item) => item !== index))
    } else {
      // @ts-ignore
      setExpanded([...expanded, index])
    }
  }

  return (
    <div id='web2-faq' className='py-20 md:py-28 bg-dark'>
      <div className='container mx-auto flex w-full flex-col relative'>
        <div className={'container w-full mx-auto flex md:hidden justify-center'}>
          <Title text={t('web2.faq.title')} mode={'dark'} />
        </div>
        <ul className='flex flex-col justify-center px-4 md:px-0 w-full pt-7 md:pb-12 max-w-[700px] mx-auto md:-translate-x-60'>
          {faqs.map((faq, index) => (
            <li key={index} className={`flex w-full py-5 border-gold flex-col cursor-pointer ${index < faqs.length - 1 ? 'border-b-2' :''}`} onClick={() => expandHandler(index)}>
              <div className='flex'>
                <div className='h-[70px] aspect-square flex justify-center items-center relative'>
                  <h3 className='text-3xl text-gold'>{index + 1}</h3>
                  <div className='h-[50px] aspect-square border-[1px] border-gold rotate-45 absolute top-[12px] left-1/2 -translate-x-1/2'/>
                </div>
                <div className='flex items-center pl-3 flex-1'>
                  <p className='text-white text-lg'>
                    {faq.question}
                  </p>
                </div>
                <div className='w-12 relative flex'>
                  <span className='w-[17px] h-1 bg-gold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'></span>
                  <span className={`w-[17px] h-1 bg-gold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ${expanded.includes(index) ? 'rotate-0' : 'rotate-90'}`}></span>
                </div>
              </div>
              <div className={`flex items-center pl-[82px] transition-all duration-500 overflow-hidden mt-4 ${expanded.includes(index) ? 'max-h-64 md:max-h-24' : 'max-h-0'}`}>
                <p className='text-white md:text-lg'>
                  {faq.answer}
                </p>
              </div>
            </li>
          ))}
        </ul>
        <div className='hidden md:block aspect-square w-[300px] border-2 border-gold rotate-45 absolute right-[100px] top-[-10px]'>
          <div className='w-full h-full flex justify-center items-center relative -rotate-90'>
            <h2 className='text-6xl text-white rotate-45'>{t('web2.faq.title')}</h2>
            <div className='custom-gradient w-[3000px] h-[2px] absolute bottom-[-175px] left-[-350px]'></div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default FAQ

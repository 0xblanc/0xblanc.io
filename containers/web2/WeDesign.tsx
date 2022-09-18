import { useTranslation, useLanguageQuery, LanguageSwitcher } from 'next-export-i18n'
import { useEffect, useState } from 'react'

const WeDesign = (props: any) => {
  const { t } = useTranslation()

  return (
    <div id='web2-we-design' className='bg-dark'>
      {/*<div className='container mx-auto flex py-40 px-36'>*/}
      {/*  <div className='w-1/2 flex justify-center flex-col relative items-center'>*/}
      {/*    <div className='z-10'>*/}
      {/*      <h2 className='text-white text-8xl font-bold mb-3 w-fit'>{t('web2.we-design.title')}</h2>*/}
      {/*      <p className='text-white text-2xl'>*/}
      {/*        {t('web2.we-design.content.pre')} <span className='text-gold uppercase'>{t('web2.we-design.content.highlight')}</span> {t('web2.we-design.content.post')}*/}
      {/*      </p>*/}
      {/*    </div>*/}
      {/*    <div className='w-72 aspect-square border-2 border-gold absolute left-72 top-1/2 -translate-y-1/2 -translate-x-1/2 rotate-45 opacity-30'/>*/}
      {/*  </div>*/}
      {/*  <div className='w-1/2 flex justify-end'>*/}
      {/*    <img className='w-3/5' src="https://images.unsplash.com/photo-1632516643720-e7f5d7d6ecc9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1011&q=80" alt="Image" />*/}
      {/*  </div>*/}
      {/*</div>*/}
      <div className='px-20 py-40 w-full max-w-[1920px] mx-auto flex'>
        <div className='w-2/6 max-w-[500px]'>
          <div className='w-[317px] max-w-full custom-ratio bg-web2-design bg-cover relative'>
            <div className='bg-dark absolute bottom-[-80px] right-[-84px] h-[171px] w-[188px] rotate-[-44deg]'>
              <div className='relative'>
                <div className='h-1 w-[7000px] border-t-2 border-gold absolute top-0 left-1/2 -translate-x-1/2'></div>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col flex-1 justify-center pl-40'>
          <h2 className='text-white text-7xl font-bold mb-3 w-fit pt-16'>{t('web2.we-design.title')}</h2>
          <p className='text-white text-2xl'>
            {t('web2.we-design.content.pre')} <span className='text-gold uppercase'>{t('web2.we-design.content.highlight')}</span> {t('web2.we-design.content.post')}
          </p>
        </div>
      </div>
    </div>
  )
}
export default WeDesign

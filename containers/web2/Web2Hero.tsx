import Cube from '../../components/shared/Cube'
import { useTranslation, useLanguageQuery, LanguageSwitcher } from 'next-export-i18n'
import {useEffect} from "react";

const Web2Hero = (props: any) => {
  const { t } = useTranslation()

  return (
    <div id='web2-hero' className='h-screen min-h-full w-full bg-cover flex bg-web2-hero'>
      <div className='flex-1 flex flex-col bg-black bg-opacity-25 px-12 3xl:px-80'>
        <div className='flex py-10 justify-between items-center'>
          <img
            src='https://res.cloudinary.com/blanc-io/image/upload/v1656857424/website/text_logo_gold_no01vb.svg'
            alt='Logo'
            width={196}
            height={41}
          />
          <p className='text-gold font-bold text-2xl'>
            {t('Web2Hero.subtitle')}
          </p>
        </div>
        <div className='flex-1 flex items-center overflow-clip relative '>
          <h1 className='text-white font-bold text-ul' dangerouslySetInnerHTML={{ __html: t('Web2Hero.slogan')}} />
          {/*<div className='flex absolute -translate-y-[5rem] right-40 overflow-visible'>*/}
          {/*  <Cube />*/}
          {/*</div>*/}
        </div>
      </div>
    </div>
  )
}
export default Web2Hero

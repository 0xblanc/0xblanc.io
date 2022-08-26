import Cube from '../../components/shared/Cube'
import { useTranslation, useLanguageQuery, LanguageSwitcher } from 'next-export-i18n'
import {useEffect} from "react";

const Web2Hero = (props: any) => {
  const { t } = useTranslation()

  return (
    <div id='web2-hero' className='h-screen min-h-full w-full bg-cover flex bg-web2-hero bg-center'>
        <div className='flex-1 flex flex-col items-center overflow-clip relative justify-center pb-[86px]'>
          <img
            className='mb-4'
            src='https://res.cloudinary.com/blanc-io/image/upload/q_auto/v1661538702/website/text_logo_white_r06vnu.svg'
            alt='Logo'
            width={196}
            height={41}
          />
          <p className='text-white text-xl text-end mb-4'>
            {t('Web2Hero.subtitle')}
          </p>
          <div className='reflection'>
            <h1 className='text-white text-4xl md:text-6xl'>
              {t('Web2Hero.slogan')}
            </h1>
            <h1 className='text-white text-4xl md:text-6xl'>
              {t('Web2Hero.slogan')}
            </h1>
          </div>
        </div>
    </div>
  )
}
export default Web2Hero

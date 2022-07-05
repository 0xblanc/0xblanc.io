import Logo from '@assets/logo/text_logo_gold.svg'
import HoverableLink from '../components/shared/HoverableLink'
import { useTranslation, useLanguageQuery, LanguageSwitcher } from 'next-export-i18n'

const Hero = (props: any) => {
  const { t } = useTranslation()

  return (
    <div id='hero' className='h-screen min-h-full w-full bg-hero bg-cover bg-right'>
      <div className='h-full w-full bg-gradient-to-t lg:bg-gradient-to-r from-heroBlue to-transparent flex lg:pl-32 md:py-16 flex-col'>
        <div className='flex-1 flex flex-col justify-center sm:pl-8 sm:px-0 px-5 '>
          <div className='mx-auto lg:mx-0'>
            <img
              className='mb-4'
              src='https://res.cloudinary.com/blanc-io/image/upload/v1656857424/website/text_logo_gold_no01vb.svg'
              alt='Logo'
              width={392}
              height={82}
            />
          </div>
          <h1 className='text-gold text-4xl font-bold text-center lg:text-start'>Unleash the potentiality with Blockchain.</h1>
        </div>
        <div className='flex flex-col pb-4 md:pb-0 px-5 sm:px-0 lg:flex-row items-center'>
          <HoverableLink text={t('AboutUs.title')} href={'#about-us'} />
          <div className='hidden lg:flex items-center w-[1px]'>
            <span className='w-full bg-white h-4' />
          </div>
          <HoverableLink text={t('Services.title')} href={'#service-we-provide'} />
          <div className='hidden lg:flex items-center w-[1px]'>
            <span className='w-full bg-white h-4' />
          </div>
          <HoverableLink text={t('ProjectShowcase.title')} href={'#past-projects'} />
          <div className='hidden lg:flex items-center w-[1px]'>
            <span className='w-full bg-white h-4' />
          </div>
          <HoverableLink text={t('ContactUs.title')} href={'#contact-us'} />
        </div>
      </div>
    </div>
  )
}
export default Hero

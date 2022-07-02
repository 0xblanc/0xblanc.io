import Logo from '@assets/logo/text_logo_gold.svg'
import HoverableLink from '@components/shared/HoverableLink'

import Image from 'next/image'
const Hero = (props: any) => {
  return (
    <div id='hero' className='h-screen min-h-full w-full bg-hero bg-cover bg-right'>
      <div className='h-full w-full bg-gradient-to-r from-heroBlue to-transparent flex sm:pl-32 sm:py-16 flex-col'>
        <div className='flex-1 flex flex-col justify-center sm:pl-8 sm:px-0 px-5 '>
          <div>
            <Image className='mb-4' src={Logo} alt='Logo' width={392} height={82} />
          </div>
          <h1 className='text-gold text-4xl font-bold'>Unleash the potentiality with Blockchain.</h1>
        </div>
        <div className='flex flex-col px-5 sm:px-0 lg:flex-row'>
          <HoverableLink text={'About Us'} href={'#about-us'} />
          <div className='hidden lg:flex items-center w-[1px]'>
            <span className='w-full bg-white h-4' />
          </div>
          <HoverableLink text={'Service We Provide'} href={'#service-we-provide'} />
          <div className='hidden lg:flex items-center w-[1px]'>
            <span className='w-full bg-white h-4' />
          </div>
          <HoverableLink text={'Past Projects'} href={'#past-projects'} />
          <div className='hidden lg:flex items-center w-[1px]'>
            <span className='w-full bg-white h-4' />
          </div>
          <HoverableLink text={'Contact Us'} href={'#contact-us'} />
        </div>
      </div>
    </div>
  )
}
export default Hero
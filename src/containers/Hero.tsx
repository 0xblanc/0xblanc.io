import Logo from '@assets/logo/text_logo_gold.svg'
import HoverableLink from '@components/shared/HoverableLink'

const Hero = props => {
  return (
    <div id='hero' className='h-full min-h-full w-full bg-hero bg-cover bg-right'>
      <div className='h-full w-full bg-gradient-to-r from-heroBlue to-transparent flex pl-32 py-16 flex-col'>
        <div className='flex-1 flex flex-col justify-center pl-8'>
          <div>
            <img className='mb-4' src={Logo} alt='Logo' />
          </div>
          <h1 className='text-gold text-4xl font-bold'>Unleash the potentiality with Blockchain.</h1>
        </div>
        <div className='flex flex-col sm:flex-row'>
          <HoverableLink text={'About Us'} href={'#about-us'} />
          <div className='flex items-center' style={{ width: '1px' }}>
            <span className='w-full bg-white h-4'></span>
          </div>
          <HoverableLink text={'Service We Provide'} href={'#service-we-provide'} />
          <div className='flex items-center' style={{ width: '1px' }}>
            <span className='w-full bg-white h-4'></span>
          </div>
          <HoverableLink text={'Past Projects'} href={'#past-projects'} />
          <div className='flex items-center' style={{ width: '1px' }}>
            <span className='w-full bg-white h-4'></span>
          </div>
          <HoverableLink text={'Contact Us'} href={'#contact-us'} />
        </div>
      </div>
    </div>
  )
}
export default Hero

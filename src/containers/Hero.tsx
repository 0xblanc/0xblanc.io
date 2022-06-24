import Logo from '@assets/logo/text_logo_gold.svg'

const Hero = (props) => {
  return (
    <div id='hero' className="h-full min-h-full w-full bg-hero bg-cover bg-right">
      <div className='h-full w-full bg-gradient-to-r from-heroBlue to-transparent flex pl-32 py-16 flex-col'>
        <div className='flex-1 flex flex-col justify-center pl-8'>
          <div>
            <img className='mb-4' src={Logo} alt="Logo"/>
          </div>
          <h1 className='text-gold text-4xl font-bold'>
            Unleash the potentiality with Blockchain.
          </h1>
        </div>
        <div className='flex'>
          <a className='py-4 px-8' href='#about-us'>
            <p className='text-white text-lg uppercase'>
              About Us
            </p>
          </a>
          <div className='flex items-center' style={{ width: '1px' }}>
            <span className='w-full bg-white h-4'></span>
          </div>
          <a className='py-4 px-8' href='#service-we-provide'>
            <p className='text-white text-lg uppercase'>
              Service We Provide
            </p>
          </a>
          <div className='flex items-center' style={{ width: '1px' }}>
            <span className='w-full bg-white h-4'></span>
          </div>
          <a className='py-4 px-8' href='#past-projects'>
            <p className='text-white text-lg uppercase'>
              Past Projects
            </p>
          </a>
          <div className='flex items-center' style={{ width: '1px' }}>
            <span className='w-full bg-white h-4'></span>
          </div>
          <a className='py-4 px-8' href='#contact-us'>
            <p className='text-white text-lg uppercase'>
              Contract Us
            </p>
          </a>
        </div>
      </div>
    </div>
  )
}
export default Hero

import Logo from '@assets/logo/text_logo_gold.svg'



const Hero = props => {
  const hoverEnter = (e) => {
    const text = e.target.querySelector('.actual-text')
    const shadow = e.target.querySelector('.shadow-text')
    text.classList.add('-translate-y-6')
    shadow.classList.remove('translate-y-6')
  }
  const hoverLeave = (e) => {
    const text = e.target.querySelector('.actual-text')
    const shadow = e.target.querySelector('.shadow-text')
    text.classList.remove('-translate-y-6')
    shadow.classList.add('translate-y-6')
  }

  return (
    <div id='hero' className='h-full min-h-full w-full bg-hero bg-cover bg-right'>
      <div className='h-full w-full bg-gradient-to-r from-heroBlue to-transparent flex pl-32 py-16 flex-col'>
        <div className='flex-1 flex flex-col justify-center pl-8'>
          <div>
            <img className='mb-4' src={Logo} alt='Logo' />
          </div>
          <h1 className='text-gold text-4xl font-bold'>Unleash the potentiality with Blockchain.</h1>
        </div>
        <div className='flex flex-col sm:flex-row  '>
          <a className='py-4 px-8' href='#about-us' onMouseEnter={hoverEnter} onMouseLeave={hoverLeave}>
            <p className='text-white text-lg uppercase flex flex-col overflow-hidden relative'>
              <span className='actual-text transition-all duration-500'>About Us</span>
              <span className='shadow-text absolute top-0 translate-y-6 transition-all duration-500'>About Us</span>
            </p>
          </a>
          <div className='flex items-center' style={{ width: '1px' }}>
            <span className='w-full bg-white h-4'></span>
          </div>
          <a className='py-4 px-8' href='#service-we-provide' onMouseEnter={hoverEnter} onMouseLeave={hoverLeave}>
            <p className='text-white text-lg uppercase flex flex-col overflow-hidden relative'>
              <span className='actual-text transition-all duration-500'>Service We Provide</span>
              <span className='shadow-text absolute top-0 translate-y-6 transition-all duration-500'>Service We Provide</span>
            </p>
          </a>
          <div className='flex items-center' style={{ width: '1px' }}>
            <span className='w-full bg-white h-4'></span>
          </div>
          <a className='py-4 px-8' href='#past-projects' onMouseEnter={hoverEnter} onMouseLeave={hoverLeave}>
            <p className='text-white text-lg uppercase flex flex-col overflow-hidden relative'>
              <span className='actual-text transition-all duration-500'>Past Projects</span>
              <span className='shadow-text absolute top-0 translate-y-6 transition-all duration-500'>Past Projects</span>
            </p>
          </a>
          <div className='flex items-center' style={{ width: '1px' }}>
            <span className='w-full bg-white h-4'></span>
          </div>
          <a className='py-4 px-8' href='#contact-us' onMouseEnter={hoverEnter} onMouseLeave={hoverLeave}>
            <p className='text-white text-lg uppercase flex flex-col overflow-hidden relative'>
              <span className='actual-text transition-all duration-500'>Contact Us</span>
              <span className='shadow-text absolute top-0 translate-y-6 transition-all duration-500'>Contact Us</span>
            </p>
          </a>
        </div>
      </div>
    </div>
  )
}
export default Hero

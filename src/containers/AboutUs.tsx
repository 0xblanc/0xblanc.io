import Title from '@components/shared/Title'

const AboutUs = () => {
  return (
    <div id='about-us' className='bg-aliceBlue py-28 h-screen sm:h-full block '>
      <div className='flex flex-col items-center'>
        <div className=''>
          <Title text={'About Us'} />
        </div>
        <div className='flex justify-center w-full pt-40 pb-24'>
          <p className='text-darkBlue text-lg text-center w-2/3'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quidem, quisquam.Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quisquam quidem, quisquam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quidem, quisquam.
          </p>
        </div>
      </div>
    </div>
  )
}
export default AboutUs

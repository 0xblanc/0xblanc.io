import Title from '@components/shared/Title'

const AboutUs = () => {
  return (
    <div id='about-us' className='bg-aliceBlue py-28'>
      <div className='container mx-auto w-full'>
        <div className="flex flex-col">
          <Title text={'About Us'} />
          <div className='flex justify-center w-full pt-40 pb-24'>
            <p className='text-darkBlue text-lg text-center w-2/3'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              quidem, quisquam.Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Quisquam quidem, quisquam.Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Quisquam quidem, quisquam.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default AboutUs

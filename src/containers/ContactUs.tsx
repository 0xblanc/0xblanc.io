import Title from '@components/shared/Title'

const ContactUs = () => {
  return (
    <div className='h-1/2 w-full flex justify-center'>
      <div className='w-4/5 md:w-3/5 xl:w-2/5 justify-center items-center '>
        <Title text='Contact Us'></Title>
        <div className='w-full flex items-center justify-center py-16 space-y-20 flex-col'>
          <input
            className='placeholder:italic placeholder:text-gray-500 block bg-white w-full border  rounded-sm py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-xl'
            placeholder='Subject'
          ></input>
          <input
            className='placeholder:italic placeholder:text-gray-500 block bg-white w-full border h-[300px] rounded-sm pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-xl'
            placeholder='Write your email message here...'
          ></input>
        </div>
      </div>
    </div>
  )
}
export default ContactUs

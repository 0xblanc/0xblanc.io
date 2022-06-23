const ContactUs = () => {
  return (
    <div className="h-1/2 w-full flex justify-center">
      <div className="w-2/5 justify-center items-center ">
        <div className="w-full flex flex-row pt-36">
          <h1 className="text-darkBlue text-5xl">Contact Us</h1>
        </div>
        <div className="w-full flex items-center justify-center py-32 space-y-20 flex-col">
          <input
            className="placeholder:italic placeholder:text-gray-500 block bg-white w-full border  rounded-sm py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            placeholder="Subject"
          ></input>
          <input
            className="placeholder:italic placeholder:text-gray-500 block bg-white w-full border h-[300px] rounded-sm py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            placeholder="Write your email message here..."
          ></input>
        </div>
      </div>
    </div>
  )
}
export default ContactUs

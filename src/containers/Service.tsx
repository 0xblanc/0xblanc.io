import Logo from "@assets/logo/text_logo.svg"

const Service = () => {
  return (
    <div className="h-screen bg-white justify-center flex items-center flex-col">
      <div className="flex flex-col items-center justify-center w-full text-center">
        <img className="h-20 w-full" alt="logo" src={Logo} />
        <h1 className="text-darkBlue text-5xl font-bold">SERVICE WE PROVIDE</h1>
      </div>
    </div>
  )
}
export default Service

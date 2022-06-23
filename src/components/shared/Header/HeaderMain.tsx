import logo from "@assets/logo/big_logo.svg"
const HeaderMain = () => {
  const navItems = ["Home", "About Us", "Contact Us"]
  return (
    <div className="hidden md:flex flex-row items-center font-bold text-2xl m-10">
      <img alt="logo" src={logo}></img>
      <div className="flex mx-20 ">
        {navItems.map((t, index) => {
          return (
            <h1
              className="text-darkBlue font-normal mx-16 whitespace-nowrap"
              key={index}
            >
              {t}
            </h1>
          )
        })}
      </div>
    </div>
  )
}
export default HeaderMain

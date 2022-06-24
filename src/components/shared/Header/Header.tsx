import HeaderMain from "@components/shared/Header/HeaderMain"
import { useState } from "react"
import HeaderMobile from "./HeaderMobile"

const Header = () => {
  const navitems = [
    "ABOUT US",
    "SERVICE WE PROVIDE",
    "PAST PROJECT",
    "CONTACT US",
  ]
  const socialItems = {
    email: "xxxx@xxxx.com",
    instagram: "instagram.com/xxxx",
    facebook: "facebook.com/xxxx",
    telegram: "telegram.com/xxxx",
  }

  return (
    <div className="flex-col w-full absolute flex top-0 z-50">
      <HeaderMain />
      <HeaderMobile navitems={navitems} socialItems={socialItems} />
    </div>
  )
}
export default Header

import HeaderMain from "@components/shared/Header/HeaderMain"
import { useState } from "react"
import HeaderMobile from "./HeaderMobile"

const Header = () => {
  return (
    <div className="flex-col w-full absolute flex top-0 z-50">
      <HeaderMain />
      <HeaderMobile />
    </div>
  )
}
export default Header

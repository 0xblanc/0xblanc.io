// import TelegramImage from "@assets/buttons/telegram.png"
// import TwitterImage from "@assets/buttons/twitter.png"
// import SpeakerImage from "@assets/buttons/speaker.png"
// import GitbookImage from "@assets/buttons/gitbook.png"
// import MediumImage from "@assets/buttons/medium.png"
// import MuteImage from "@assets/buttons/mute.png"
// import UnmuteImage from "@assets/buttons/unmute.png"
// import Logo from "@assets/header/DDP Logo.png"
import Logo from "@assets/logo/text_logo.svg"
import Burger from "@assets/nav/burger.svg"
import Cross from "@assets/nav/cross.svg"
import { XIcon, MenuIcon } from "@heroicons/react/solid"
// import MenuImage from "@assets/buttons/menu.png"
// import CloseImage from "@assets/buttons/close.png"
import React from "react"

import { useState } from "react"

type HeaderMobileProps = {
  navItems: Array<{ text: string, href: string }>
  socialItems: {}
}

const HeaderMobile = (props:HeaderMobileProps) => {
  const { navItems, socialItems } = props

  const [muted, setMuted] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const muteHandler = React.useCallback(() => {
    setMuted((prev) => !prev)
  }, [])

  const menuToggleHandler = () => {
    const body = document.body as any
    console.log(body)
    if (menuOpen) {
      body.classList.remove("overflow-hidden")
    } else {
      body.classList.add("overflow-hidden")
    }
    setMenuOpen((prev) => !prev)
  }

  return (
    <div className="lg:hidden flex py-1 w-full justify-between bg-white shadow-md h-20">
      {!menuOpen && (
        <div className="flex px-6 py-5 w-full items-center  justify-start">
          <MenuIcon
            onClick={menuToggleHandler}
            className="h-12 mr-4 text-darkBlue"
          />
          <img
            className="h-8  mr-4 text-darkBlue"
            src={Logo}
            alt=""
            onClick={menuToggleHandler}
          />
        </div>
      )}
      {menuOpen && (
        <div className=" h-screen bg-white z-20 w-full flex flex-col">
          <div className="flex px-6 py-5 w-full items-center justify-start shadow-lg">
            {/* <img src={Cross} alt="" /> */}
            <XIcon
              className="h-12 mr-4 text-darkBlue"
              onClick={menuToggleHandler}
            ></XIcon>
            <img
              className="h-8 mr-4"
              src={Logo}
              alt=""
              onClick={menuToggleHandler}
            />
          </div>
          <div className="flex flex-col flex-1 px-6 font-thin">
            {navItems.map((item, index) => {
              return <a href={item.href} className="text-3xl mt-5 text-darkBlue">{item.text}</a>
            })}
            {Object.keys(socialItems).map((item, index) => {
              return (
                <a className="text-3xl mt-5 text-darkBlue">
                  {socialItems[item]}
                </a>
              )
            })}
          </div>
          <div className="flex justify-center"></div>
        </div>
      )}
    </div>
  )
}

export default HeaderMobile

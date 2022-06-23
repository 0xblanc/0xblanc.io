import TelegramImage from "@assets/buttons/telegram.png"
import TwitterImage from "@assets/buttons/twitter.png"
import SpeakerImage from "@assets/buttons/speaker.png"
import GitbookImage from "@assets/buttons/gitbook.png"
import MediumImage from "@assets/buttons/medium.png"
import MuteImage from "@assets/buttons/mute.png"
import UnmuteImage from "@assets/buttons/unmute.png"
// import Logo from "@assets/header/DDP Logo.png"
import Logo from "@assets/logo/big_logo.png"
import MenuImage from "@assets/buttons/menu.png"
import CloseImage from "@assets/buttons/close.png"
import React from "react"

import { useState } from "react"

const HeaderMobile = () => {
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
    <div className="xl:hidden md:flex py-1 w-full justify-between bg-black bg-opacity-40 backdrop-blur">
      123
      <div className="w-1/2 py-2 pl-6">
        <img src={Logo} alt="logo" />
      </div>
      <div className="flex pr-6 py-5 w-1/2 justify-end">
        <img
          className="h-full mr-4"
          src={MenuImage}
          alt=""
          onClick={menuToggleHandler}
        />

        <img
          src={muted ? MuteImage : UnmuteImage}
          onClick={() => muteHandler()}
          alt="music"
        />
      </div>
      {menuOpen && (
        <div
          className="absolute top-0 w-full h-screen bg-black z-20 bg-mobile bg-no-repeat flex flex-col pt-1 pb-8"
          style={{ backgroundSize: "100% 100%" }}
        >
          <div className="flex my-12 w-full">
            <div className="w-1/2 py-2 pl-6">
              <img src={Logo} alt="logo" />
            </div>
            <div className="flex pr-6 py-5 w-1/2 justify-end">
              <img
                className="h-full mr-4"
                src={CloseImage}
                alt=""
                onClick={menuToggleHandler}
              />
            </div>
          </div>
          <div className="flex flex-col flex-1 px-6">
            <h1 className="text-orange text-5xl mb-4">Menu</h1>
            <a className="text-white py-4 text-lg" onClick={menuToggleHandler}>
              POUNDHUB
            </a>
            <a
              className="text-white py-4 text-lg"
              href="#ecosystem"
              onClick={menuToggleHandler}
            >
              ECOSYSTEM
            </a>
            <a
              className="text-white py-4 text-lg"
              href="#moonmap"
              onClick={menuToggleHandler}
            >
              MOONMAP
            </a>
            <a
              className="text-white py-4 text-lg"
              href="#faq"
              onClick={menuToggleHandler}
            >
              FAQ
            </a>
          </div>
          <div className="flex justify-center">
            <a
              href="https://t.me/DegenDogPound"
              className="mx-1 flex items-center cursor-paw"
              target="_blank"
              rel="noreferrer"
            >
              <img src={TelegramImage} alt="telegram" />
            </a>
            <a
              href="https://t.me/DegenDogPoundAnn"
              className="mx-1 flex items-center cursor-paw"
              target="_blank"
              rel="noreferrer"
            >
              <img src={SpeakerImage} alt="speaker" />
            </a>
            <a
              href="https://twitter.com/DegenDogPound"
              className="mx-1 flex items-center cursor-paw"
              target="_blank"
              rel="noreferrer"
            >
              <img src={TwitterImage} alt="twitter" />
            </a>
            <a
              href="https://degendogpound.gitbook.io/degen-dog-pound/"
              className="mx-1 flex items-center cursor-paw"
              target="_blank"
              rel="noreferrer"
            >
              <img src={GitbookImage} alt="gitbook" />
            </a>
            <a
              className="mx-1 flex items-center cursor-paw"
              href="https://medium.com/@DegenDogPound"
              target="_blank"
              rel="noreferrer"
            >
              <img src={MediumImage} alt="medium" />
            </a>
          </div>
        </div>
      )}
    </div>
  )
}

export default HeaderMobile

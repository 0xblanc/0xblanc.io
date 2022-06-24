import Logo from "@assets/logo/text_logo.svg"
import Telegram from "@assets/media/telegram.svg"
import Instagram from "@assets/media/instagram.svg"
import Email from "@assets/media/email.svg"

const Footer = () => {
  return (
    <div className="w-full h-20 bg-darkElectricBlue p-2">
      <h5 className="text-white text-2xl font-Raleway ">
        Copyright © 2022 0xBlanc. All rights reserved.
      </h5>
      <div className="flex flex-row">
        <p className="text-white text-2xl font-Raleway">Find us on:</p>
        {/* <img
          style={{
            filter:
              "invert(99%) sepia(71%) saturate(0%) hue-rotate(9deg) brightness(101%) contrast(102%);",
          }}
          src={Email}
          alt="Email"
        /> */}
      </div>
    </div>
  )
}
export default Footer

import React, { useEffect, useState } from "react"
import Header from "@components/shared/Header/Header"
import Footer from "@components/shared/Footer"
import Hero from "@containers/Hero"

type DesktopFrameProps = {
  children: React.ReactNode
}

const DesktopFrame = (props: DesktopFrameProps) => {
  const { children } = props

  return (
    <div className="h-full">
      <Hero />
      <div className="main">
        <div>{children}</div>
      </div>
      <Footer />
    </div>
  )
}
export default DesktopFrame

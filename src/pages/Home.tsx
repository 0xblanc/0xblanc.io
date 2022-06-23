import React, { useCallback, useEffect } from "react"
import FAQ from "@containers/home/FAQ"
import Hero from "@containers/Hero"
import AboutUs from "@containers/AboutUs"
import ContactUs from "@containers/ContactUs"
import ProjectShowcase from "@containers/ProjectShowcase"
import ImageShowcase from "@containers/ImageShowcase"
import Service from "@containers/Service"

const Home = () => {
  const onFollowBtnClick = useCallback((type) => {
    let url =
      type === "twitter"
        ? "https://twitter.com/PlayMetaGods"
        : "https://discord.gg/playmetagods"
    window.open(url, "_blank")
  }, [])

  return (
    <div>
      <Hero />
      <AboutUs />
      <Service />
      <ImageShowcase />
      <ProjectShowcase />
      <FAQ />
      <ContactUs />
    </div>
  )
}
export default Home

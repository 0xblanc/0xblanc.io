import React, {useEffect, useState} from 'react'
import AnimatedArrow from './AnimatedArrow'
import useWindowDimensions from "../../hooks/useWindowDimensions";

type DiscoverBoxProps = {
  mode: 'light' | 'dark'
  text: string
  link: string
}

const DiscoverBox = (props: DiscoverBoxProps) => {
  const { mode, text, link } = props

  const { height } = useWindowDimensions();

  const [isHide, setIsHide] = useState(false)
  const [stage, setStage] = useState('-bottom-24')

  const scrollHandler = () => {
    const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight
    const body = document.body
    const html = document.documentElement
    const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight)
    const windowBottom = windowHeight + window.pageYOffset

    console.log(window.scrollY > height)
    if (windowBottom + 70 >= docHeight) {
      setStage('bottom-[5rem]')
    } else if (window.scrollY > (height / 2)) {
      setStage('bottom-8')
    } else {
      setStage('-bottom-24')
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler)
  }, [])

  return (
    <a href={link} className={`arrow-hover-area w-fit h-20 fixed rounded-2xl z-20 flex px-8 items-center shadow-md backdrop-blur-md transition-all duration-500 ${stage} transition-all duration-500 ${mode === 'dark' ? 'right-8 bg-white/10 hover:bg-white/20' : 'left-8 bg-aliceBlue/30 hover:bg-white/60'}`}>
      <p className={`mr-4 text-xl font-bold ${mode === 'dark' ? 'text-gold' : 'text-blue'}`}>
        {text}
      </p>
      <AnimatedArrow mode={mode} />
    </a>
  )
}

export default DiscoverBox

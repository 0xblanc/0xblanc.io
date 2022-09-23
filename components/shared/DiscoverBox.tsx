import React, {useEffect, useState} from 'react'
import AnimatedArrow from './AnimatedArrow'
import useWindowDimensions from "../../hooks/useWindowDimensions";

type DiscoverBoxProps = {
  mode: 'light' | 'dark'
  text: string
  link: string
  forceHide?: boolean
}

const DiscoverBox = (props: DiscoverBoxProps) => {
  const { mode, text, link, forceHide = false } = props

  const { height } = useWindowDimensions();

  const [isHide, setIsHide] = useState(false)
  const [stage, setStage] = useState('-bottom-24')

  const scrollHandler = () => {
    if (forceHide) {
      return
    }
    const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight
    const body = document.body
    const html = document.documentElement
    const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight)
    const windowBottom = windowHeight + window.pageYOffset

    if (windowBottom + 70 >= docHeight) {
      setStage('-bottom-24 md:bottom-[5rem]')
    } else if (window.scrollY > (height / 3)) {
      setStage('bottom-4 md:bottom-8')
    } else {
      setStage('-bottom-24')
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler)
  }, [])

  useEffect(() => {
    if (forceHide) {
      setIsHide(true)
    } else {
      setIsHide(false)
    }
  }, [forceHide])

  return (
    <>
      {
        !isHide && (
          // <a href={link} className={`arrow-hover-area w-fit h-20 fixed rounded-2xl z-20 flex px-8 items-center shadow-md backdrop-blur-md transition-all duration-500 ${stage} transition-all duration-500 ${mode === 'dark' ? 'right-8 bg-white/10 hover:bg-white/20' : 'left-8 bg-aliceBlue/30 hover:bg-white/60'}`}>
          //   <p className={`mr-4 text-lg md:text-xl font-bold ${mode === 'dark' ? 'text-gold' : 'text-blue'}`}>
          //     {text}
          //   </p>
          //   <AnimatedArrow mode={mode} />
          // </a>
          <div className={`arrow-hover-area clip-group fixed w-[365px] h-20 rounded-2xl overflow-hidden ${stage} ${mode === 'dark' ? 'right-8' : 'left-8'}`}>
            <div className='relative'>
              <a href={link} className={`z-20 flex px-8 items-center shadow-md backdrop-blur-md transition-all duration-500 absolute left-0 top-0 w-full h-20 clip-left ${mode === 'dark' ? 'bg-white/80' : 'bg-lightDark/90'}`}>
                <p className={`mr-4 text-lg md:text-xl font-bold ${mode === 'dark' ? 'text-blue' : 'text-gold'}`}>
                  {text}
                </p>
                <AnimatedArrow mode={mode === 'dark' ? 'light' : 'dark'} />
              </a>
              <a href={link} className={`z-20 flex px-8 items-center shadow-md backdrop-blur-md transition-all duration-500 absolute left-0 top-0 w-full h-20 clip-right ${mode === 'dark' ? 'bg-white/10' : 'bg-aliceBlue/30'}`}>
                <p className={`mr-4 text-lg md:text-xl font-bold ${mode === 'dark' ? 'text-gold' : 'text-blue'}`}>
                  {text}
                </p>
                <AnimatedArrow mode={mode} />
              </a>
            </div>
          </div>
        )
      }
    </>
  )
}

export default DiscoverBox

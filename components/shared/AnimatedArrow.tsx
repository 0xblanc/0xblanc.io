import React from 'react'

type AnimatedArrowProps = {
  size?: number
  mode?: 'dark' | 'light'
}

const AnimatedArrow = (props:AnimatedArrowProps) => {
  const { size = 55, mode } = props

  const mouseEnterHandler = (e: any) => {
    const container = e.target as any
    for (let arrow of container.querySelectorAll('.animated-arrow')) {
      arrow.classList.add('bounceAlpha')
    }
  }

  const mouseLeaveHandler = (e: any) => {
    const container = e.target as any
    for (let arrow of container.querySelectorAll('.animated-arrow')) {
      arrow.classList.remove('bounceAlpha')
    }
  }

  return (
    <div className={`center-con w-[40px] h-[55px] flex items-center justify-center translate-x-4`} onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>
      <div className={`absolute w-[55px] aspect-square`}>
        <div className="cta">
          <span className={`animated-arrow primera next ${mode === 'dark' ? 'bg-arrow-gold' : 'bg-arrow-blue'} `}></span>
          <span className={`animated-arrow primera next ${mode === 'dark' ? 'bg-arrow-gold' : 'bg-arrow-blue'} `}></span>
        </div>
      </div>
    </div>
  )
}

export default AnimatedArrow

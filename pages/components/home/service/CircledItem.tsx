import { useEffect, useState } from 'react'
import Image from 'next/image'
type CircledItemProps = {
  position: string
  text: string
  icon: string
}

const CircledItem = (props: CircledItemProps) => {
  const { position, text, icon } = props

  const [positionStyle, setPositionStyle] = useState<string>('')
  const [shellRotateStyle, setShellRotateStyle] = useState<string>('')

  useEffect(() => {
    if (position === 'top') {
      setPositionStyle('rotate-180')
      setShellRotateStyle('rotate-180')
    } else if (position === 'top-right') {
      setPositionStyle('-rotate-135')
      setShellRotateStyle('rotate-135')
    } else if (position === 'right') {
      setPositionStyle('-rotate-90')
      setShellRotateStyle('rotate-90')
    } else if (position === 'bottom-right') {
      setPositionStyle('-rotate-45')
      setShellRotateStyle('rotate-45')
    } else if (position === 'bottom') {
      setPositionStyle('rotate-0')
      setShellRotateStyle('rotate-0')
    } else if (position === 'bottom-left') {
      setPositionStyle('rotate-45')
      setShellRotateStyle('-rotate-45')
    } else if (position === 'left') {
      setPositionStyle('rotate-90')
      setShellRotateStyle('-rotate-90')
    } else if (position === 'top-left') {
      setPositionStyle('rotate-135')
      setShellRotateStyle('-rotate-135')
    }
  }, [position])

  return (
    <div className=' left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 absolute flex justify-center items-center'>
      <div className={positionStyle + ' relative h-1 w-1 bg-aliceBlue'}>
        <div
          className={
            shellRotateStyle +
            ' translate-y-64 sm:translate-y-80  -translate-x-1/2 absolute w-40 h-40 md:h-56 md:w-56 bg-aliceBlue rounded-full flex justify-center items-center'
          }
        >
          <div className='circled-item-inner w-full h-full flex flex-col justify-center items-center'>
            <div className='w-24 mb-4'>
              <Image src={icon} alt={text} />
            </div>
            <p className='px-4 font-bold text-darkBlue text-center text-xs md:text-xl'>{text}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CircledItem

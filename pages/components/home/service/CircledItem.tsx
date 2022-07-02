import { useEffect, useState } from 'react'
import Image from 'next/image'
type CircledItemProps = {
  position: string
  text: string
  icon: string
  backgroundColor: string
}

const CircledItem = (props: CircledItemProps) => {
  const { position, text, icon, backgroundColor } = props

  const [positionStyle, setPositionStyle] = useState<string>('')
  const [shellRotateStyle, setShellRotateStyle] = useState<string>('')
  const [backgroundColorStyle, setBackgroundColorStyle] = useState<string>('')

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

    if (backgroundColor === 'serviceDeepBlue') {
      setBackgroundColorStyle(' bg-serviceDeepBlue')
    } else if (backgroundColor === 'serviceBlue') {
      setBackgroundColorStyle(' bg-serviceBlue')
    } else if (backgroundColor === 'servicePurple') {
      setBackgroundColorStyle(' bg-servicePurple')
    } else if (backgroundColor === 'serviceLightPurple') {
      setBackgroundColorStyle(' bg-serviceLightPurple')
    } else if (backgroundColor === 'serviceRed') {
      setBackgroundColorStyle(' bg-serviceRed')
    } else if (backgroundColor === 'serviceSolana') {
      setBackgroundColorStyle(' bg-gradient-to-tr from-serviceSolanaPurple via-serviceSolanaBlue to-serviceSolanaGreen')
    } else if (backgroundColor === 'serviceLightRed') {
      setBackgroundColorStyle(' bg-serviceLightRed')
    } else if (backgroundColor === 'serviceOrange') {
      setBackgroundColorStyle(' bg-serviceOrange')
    }

  }, [position, backgroundColor])

  return (
    <div className=' left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 absolute flex justify-center items-center'>
      <div className={positionStyle + ' relative h-1 w-1 bg-aliceBlue'}>
        <div
          className={
            shellRotateStyle +
            ' translate-y-64 sm:translate-y-80 -translate-x-1/2 absolute w-40 h-40 md:h-56 md:w-56 rounded-full flex justify-center items-center drop-shadow-xl'
          }
        >
          <div className={backgroundColorStyle + ' rounded-full circled-item-inner w-full h-full flex flex-col justify-center items-center'}>
            <div className='flex w-24 h-24 mb-4'>
              <Image src={icon} alt={text} width={96} height={96} />
            </div>
            <p className='px-4 text-white text-center text-xs md:text-xl'>{text}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CircledItem

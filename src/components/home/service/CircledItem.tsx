import { useEffect, useState } from 'react'

type CircledItemProps = {
  position: string,
  text: string,
  icon: string,
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
        <div className={shellRotateStyle + ' translate-y-80 -translate-x-1/2 absolute h-56 w-56 bg-aliceBlue rounded-full flex justify-center items-center'}>
          <div className='circled-item-inner w-full h-full flex flex-col justify-center items-center'>
            <img className='w-24 mb-4' src={icon} alt={text} />
            <p className='px-4 text-center'>
              {text}
            </p>
          </div>
        </div>
      </div>
    </div>

  )
}

export default CircledItem

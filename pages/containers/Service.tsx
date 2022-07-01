import { useEffect, useState } from 'react'

import CircledItem from '@components/home/service/CircledItem'
import Logo from '@assets/logo/text_logo.svg'
import Icon from '@assets/home/service-we-provide/nft-generic-propagation.svg'
import useWindowDimensions from '@hooks/useWindowDimensions'
import Image from 'next/image'
const serviceList = [
  {
    name: 'NFT generic propagation',
    icon: Icon,
    position: 'top',
  },
  {
    name: 'Custom metadata',
    icon: Icon,
    position: 'top-right',
  },
  {
    name: 'IPFS data upload',
    icon: Icon,
    position: 'right',
  },
  {
    name: 'Minting website',
    icon: Icon,
    position: 'bottom-right',
  },
  {
    name: 'EVM Smart Contract Service',
    icon: Icon,
    position: 'bottom',
  },
  {
    name: 'Solana related service',
    icon: Icon,
    position: 'bottom-left',
  },
  {
    name: 'Web 3 integration service',
    icon: Icon,
    position: 'left',
  },
  {
    name: 'Traditional web service',
    icon: Icon,
    position: 'top-left',
  },
]
const Service = () => {
  const [scrolling, setScrolling] = useState(false)
  const [scrollTop, setScrollTop] = useState(0)

  const { height } = useWindowDimensions()

  useEffect(() => {
    function onScroll() {
      let currentPosition = window.pageYOffset // or use document.documentElement.scrollTop;
      const hero = document.querySelector('#hero') as HTMLElement
      const container = document.querySelector('#service-we-provide') as HTMLElement
      const start = hero.offsetHeight + container.offsetTop
      let rotation = ((currentPosition - start) / (container.offsetHeight - height)) * 360

      const rotationContainer = document.querySelector('.rotation-container') as HTMLElement
      const circlesInner = document.querySelectorAll('.circled-item-inner') as NodeListOf<HTMLElement>

      if (currentPosition <= start) {
        rotation = 0
      } else if (currentPosition + height >= start + container.offsetHeight) {
        rotation = 360
      }

      rotationContainer.style.transform = `rotate(${rotation}deg)`

      for (const circle of circlesInner) {
        circle.style.transform = `rotate(${-rotation}deg)`
      }

      if (currentPosition > scrollTop) {
        setScrolling(false)
      } else {
        // upscroll code
        setScrolling(true)
      }
      setScrollTop(currentPosition <= 0 ? 0 : currentPosition)
    }

    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [scrollTop])

  return (
    <div id='service-we-provide' className='relative items-center h-[250rem]'>
      <div className='h-screen flex overflow-hidden items-center justify-center sticky flex-col top-0'>
        <div className='h-full flex justify-center items-center -translate-x-60 sm:-translate-x-32'>
          <div className='rotation-container h-4/6 aspect-square relative border-8 border-aliceBlue rounded-full'>
            {serviceList.map(({ name, icon, position }, index) => (
              <CircledItem key={index} position={position} text={name} icon={icon} />
            ))}
          </div>
        </div>
        <div className='absolute left-0 top-0 w-2/6 sm:w-3/6 h-full sm:bg-white flex items-center'>
          <div className='flex justify-end w-full'>
            <div className='flex flex-col items-end translate-x-2 sm:translate-x-24 sm:w-[575px] pl-2 md:pl-0'>
              <div className='self-start mb-6'>
                <Image src={Logo} alt='Logo' />
              </div>
              <h2 className='self-start uppercase text-darkBlue font-bold text-2xl sm:text-4xl md:text-7xl'>Service We Provide</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Service

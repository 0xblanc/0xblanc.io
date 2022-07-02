import { useEffect, useState } from 'react'

import CircledItem from '@components/home/service/CircledItem'
import Logo from '@assets/logo/text_logo.svg'
import Nft from '@assets/home/service-we-provide/nft-generic-propagation.svg'
import Meta from '@assets/home/service-we-provide/meta.svg'
import IPFS from '@assets/home/service-we-provide/ipfs.svg'
import Minting from '@assets/home/service-we-provide/minting.svg'
import SmartContract from '@assets/home/service-we-provide/smart-contract.svg'
import Solana from '@assets/home/service-we-provide/solana.svg'
import Web3 from '@assets/home/service-we-provide/web3.svg'
import Web from '@assets/home/service-we-provide/web.svg'
import useWindowDimensions from '@hooks/useWindowDimensions'
import Image from 'next/image'
const serviceList = [
  {
    name: 'NFT generic propagation',
    icon: Nft,
    position: 'top',
    backgroundColor: 'serviceNft',
  },
  {
    name: 'Custom metadata',
    icon: Meta,
    position: 'top-right',
    backgroundColor: 'serviceMeta',
  },
  {
    name: 'IPFS data upload',
    icon: IPFS,
    position: 'right',
    backgroundColor: 'serviceIpfs',
  },
  {
    name: 'Minting website',
    icon: Minting,
    position: 'bottom-right',
    backgroundColor: 'serviceMinting',
  },
  {
    name: 'EVM Smart Contract Service',
    icon: SmartContract,
    position: 'bottom',
    backgroundColor: 'serviceSmartContract',
  },
  {
    name: 'Solana related service',
    icon: Solana,
    position: 'bottom-left',
    backgroundColor: 'serviceSolana',
  },
  {
    name: 'Web 3 integration service',
    icon: Web3,
    position: 'left',
    backgroundColor: 'serviceWeb3',
  },
  {
    name: 'Traditional web service',
    icon: Web,
    position: 'top-left',
    backgroundColor: 'serviceWeb',
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
        <div className='h-full flex justify-center items-center -translate-x-60 sm:-translate-x-40'>
          <div className='rotation-container h-4/6 aspect-square relative rounded-full'>
            {serviceList.map(({ name, icon, position, backgroundColor }, index) => (
              <CircledItem key={index} position={position} text={name} icon={icon} backgroundColor={backgroundColor} />
            ))}
          </div>
        </div>
        <div className='absolute left-0 top-0 w-5/12 sm:w-3/6 h-full sm:bg-white flex items-center'>
          <div className='flex justify-end w-full'>
            <div className='flex flex-col items-end translate-x-2 sm:translate-x-24 w-[200px] sm:w-[450px] pl-2 md:pl-0'>
              <div className='self-start mb-6'>
                <Image src={Logo} alt='Logo' width={340} height={70} />
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

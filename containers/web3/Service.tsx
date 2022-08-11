import { useEffect, useState } from 'react'

import CircledItem from '../../components/home/service/CircledItem'
import Title from '../../components/shared/Title'
import useWindowDimensions from '../../hooks/useWindowDimensions'
import { useTranslation, useLanguageQuery, LanguageSwitcher } from 'next-export-i18n'

const serviceList = [
  {
    icon: 'https://res.cloudinary.com/blanc-io/image/upload/q_auto/v1656858226/website/services/nft-generic-propagation_cbm15f.svg',
    position: 'top',
    backgroundColor: 'serviceNft',
  },
  {
    icon: 'https://res.cloudinary.com/blanc-io/image/upload/q_auto/v1656858226/website/services/meta_oavy25.svg',
    position: 'top-right',
    backgroundColor: 'serviceMeta',
  },
  {
    icon: 'https://res.cloudinary.com/blanc-io/image/upload/q_auto/v1656858226/website/services/ipfs_dwm3ei.svg',
    position: 'right',
    backgroundColor: 'serviceIpfs',
  },
  {
    icon: 'https://res.cloudinary.com/blanc-io/image/upload/q_auto/v1656858226/website/services/minting_blgiih.svg',
    position: 'bottom-right',
    backgroundColor: 'serviceMinting',
  },
  {
    icon: 'https://res.cloudinary.com/blanc-io/image/upload/q_auto/v1656858226/website/services/smart-contract_h6rezu.svg',
    position: 'bottom',
    backgroundColor: 'serviceSmartContract',
  },
  {
    icon: 'https://res.cloudinary.com/blanc-io/image/upload/q_auto/v1656858226/website/services/solana_ikjezd.svg',
    position: 'bottom-left',
    backgroundColor: 'serviceSolana',
  },
  {
    icon: 'https://res.cloudinary.com/blanc-io/image/upload/q_auto/v1656858228/website/services/web3_aq7mir.svg',
    position: 'left',
    backgroundColor: 'serviceWeb3',
  },
  {
    icon: 'https://res.cloudinary.com/blanc-io/image/upload/q_auto/v1656858228/website/services/web_daqg6x.svg',
    position: 'top-left',
    backgroundColor: 'serviceWeb',
  },
]
const Service = () => {
  const [scrolling, setScrolling] = useState(false)
  const [scrollTop, setScrollTop] = useState(0)
  const { t } = useTranslation()

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

      // @ts-ignore
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

  const backgroundStyle = (service: string) => {

    if (service === 'serviceNft') {
      return ' bg-gradient-to-tr from-serviceNftBlue to-serviceNftPurple'
    } else if (service === 'serviceMeta') {
      return ' bg-gradient-to-tr from-serviceMetaBlue to-serviceMetaLightBlue'
    } else if (service === 'serviceIpfs') {
      return ' bg-gradient-to-tr from-serviceIpfsPurple to-serviceIpfsBlue'
    } else if (service === 'serviceMinting') {
      return ' bg-gradient-to-tr from-serviceMintingPink to-serviceMintingPurple'
    } else if (service === 'serviceSmartContract') {
      return ' bg-gradient-to-tr from-serviceSmartContractPurple to-serviceSmartContractRed'
    } else if (service === 'serviceSolana') {
      return ' bg-gradient-to-tr from-serviceSolanaPurple via-serviceSolanaBlue to-serviceSolanaGreen'
    } else if (service === 'serviceWeb3') {
      return ' bg-gradient-to-tr from-serviceWeb3Red to-serviceWeb3Orange'
    } else if (service === 'serviceWeb') {
      return ' bg-gradient-to-tr from-serviceWebOrange to-serviceWebGreen'
    }
  }

  return (
    <div id='service-we-provide' className='relative items-center pt-20 md:py-0 md:h-[250rem]'>
      <div className='h-screen hidden md:flex overflow-hidden items-center justify-center sticky flex-col top-0'>
        <div className='h-full flex justify-center items-center -translate-x-60 sm:-translate-x-40'>
          <div className='rotation-container h-4/6 aspect-square relative rounded-full'>
            {serviceList.map(({ icon, position, backgroundColor }, index) => (
              <CircledItem key={index} position={position} text={t('Services.items')[index]} icon={icon} backgroundColor={backgroundColor} />
            ))}
          </div>
        </div>
        <div className='absolute left-0 top-0 w-5/12 sm:w-3/6 h-full sm:bg-white flex items-center'>
          <div className='flex justify-end w-full'>
            <div className='flex flex-col items-end translate-x-2 sm:translate-x-24 w-[200px] sm:w-[450px] pl-2 md:pl-0'>
              <div className='self-start mb-6'>
                <img
                  src='https://res.cloudinary.com/blanc-io/image/upload/q_auto/v1656857424/website/text_logo_kahw7o.svg'
                  alt='Logo'
                  width={340}
                  height={70}
                />
              </div>
              <h2 className='self-start uppercase text-darkBlue font-bold text-2xl sm:text-4xl md:text-7xl'>
                {t('Services.ServiceWeProvide')}
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col md:hidden'>
        <div className='mb-6'>
          <Title text={t('Services.ServiceWeProvide')} />
        </div>
        <div className='flex flex-wrap'>
          {
            serviceList.map(({ icon, position, backgroundColor }, index) => (
              <div className='w-1/2 p-2 flex justify-center' key={index}>
                <div className={'w-44 h-44 w-full flex flex-col flex rounded-full justify-center items-center' + backgroundStyle(backgroundColor)}>
                  <div className='flex w-24 mb-2'>
                    <img src={icon} alt='Icon' width={198} height={157} />
                  </div>
                  <p className='px-6 text-white text-center text-base'>{t('Services.items')[index]}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}
export default Service

import Title from '../components/shared/Title'

import HSBanner from '@assets/home/past-projects/hs-banner.png'
import HSClash from '@assets/home/past-projects/hs-clash.png'
import HSHunger from '@assets/home/past-projects/hs-hunger.png'
import HSWanted from '@assets/home/past-projects/hs-wanted.png'

import { useEffect, useState } from 'react'
import useWindowDimensions from '../hooks/useWindowDimensions'
import { useTranslation, useLanguageQuery, LanguageSwitcher } from 'next-export-i18n'

const ProjectShowcase = () => {
  const { width, height } = useWindowDimensions()
  const { t } = useTranslation()

  const [scrolling, setScrolling] = useState(false)
  const [scrollTop, setScrollTop] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      let currentPosition = window.pageYOffset // or use document.documentElement.scrollTop;
      const main = document.querySelector('.main') as any
      const pastProject = document.getElementById('past-projects') as any
      const start = main.offsetTop + pastProject.offsetTop - height / 2
      const end = main.offsetTop + pastProject.offsetTop

      const frac = (currentPosition - start) / (end - start)

      const bannerClass = width > 1024 ? '.hs-banner-desktop' : '.hs-banner-mobile'
      const hsBanner = document.querySelector(bannerClass) as any
      const bannerTransition = -1136 + 1136 * frac
      hsBanner.style.transform = `translateX(${bannerTransition > 0 ? 0 : bannerTransition}px)`

      const hsClash = document.querySelector('.hs-clash') as any
      const clashTransition = -1160 + 1160 * frac
      hsClash.style.transform = `translateY(${clashTransition > 0 ? 0 : clashTransition}px)`

      const hsNyc = document.querySelector('.hs-nyc') as any
      const nycTransition = -1160 + 1160 * frac
      hsNyc.style.transform = `translateY(${nycTransition > 0 ? 0 : nycTransition}px)`

      const hsNft = document.querySelector('.hs-nft') as any
      const nftTransition = 612 + -612 * frac
      hsNft.style.transform = `translateY(${nftTransition < 0 ? 0 : nftTransition}px)`

      const wantedClass = width > 1024 ? '.hs-wanted-desktop' : '.hs-wanted-mobile'
      const hsWanted = document.querySelector(wantedClass) as any
      const wantedTransition = 612 + -612 * frac
      hsWanted.style.transform = `translateY(${wantedTransition < 0 ? 0 : wantedTransition}px)`

      const hungerClass = width > 1024 ? '.hs-hunger-desktop' : '.hs-hunger-mobile'
      const hsHunger = document.querySelector(hungerClass) as any
      const hungerTransition = 800 + -800 * frac
      hsHunger.style.transform = `translateX(${hungerTransition < 0 ? 0 : wantedTransition}px)`

      const texts = document.querySelectorAll('.project-container p') as any
      const textsTransition = 1.5 - 0.5 * frac
      texts.forEach((text: { style: { transform: string } }) => {
        text.style.transform = `scale(${textsTransition <= 1 ? 1 : textsTransition})`
      })

      setScrolling(currentPosition <= scrollTop)
      setScrollTop(currentPosition <= 0 ? 0 : currentPosition)
    }

    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [scrollTop])

  return (
    <div id='past-projects' className='relative items-center bg-aliceBlue py-28 overflow-hidden'>
      <div className='w-full flex justify-center flex-col h-5/6'>
        <div className='container w-full mx-auto flex justify-center'>
          <Title text={t('ProjectShowcase.title')} />
        </div>
        <div className='flex lg:hidden justify-center mt-20 my-10'>
          <img
            className='hs-banner-mobile w-4/5'
            src='https://res.cloudinary.com/blanc-io/image/upload/q_auto/v1656758658/website/hs-banner_rbuv7x.webp'
            alt='HS Banner'
            width={770}
            height={379}
          />
        </div>
        <div className='project-container flex flex-col relative justify-center items-center lg:my-80 lg:py-40'>
          <div className='flex flex-col italic text-xl lg:text-3xl text-center text-deepDarkBlue'>
            <div className='relative lg:w-[939px]'>
              <div className='hs-banner-desktop absolute hidden lg:block w-[700px] top-[-375px] left-[-12px]'>
                <img
                  src='https://res.cloudinary.com/blanc-io/image/upload/q_auto/v1656758658/website/hs-banner_rbuv7x.webp'
                  width={770}
                  height={379}
                  alt='HS banner'
                />
              </div>
              <p>
                {t('ProjectShowcase.sentence1.prefix')} <span className='text-4xl lg:text-6xl font-bold text-blue'>{t('ProjectShowcase.sentence1.highlight')}</span> {t('ProjectShowcase.sentence1.suffix')}
              </p>
            </div>
            <div className='relative lg:w-[939px]'>
              <div className='hs-clash absolute hidden lg:block w-[335px] top-[-306px] right-[-160px]'>
                <img
                  src='https://res.cloudinary.com/blanc-io/image/upload/q_auto/v1656758660/website/hs-clash_g9a04i.webp'
                  width={335}
                  height={330}
                  alt='HS clash'
                />
              </div>
              <p>
                <span className='text-4xl lg:text-6xl font-bold text-purple relative'>
                  {t('ProjectShowcase.sentence2.highlight')} <span className='absolute -right-3 top-2 text-4xl'>+</span>
                </span>
                &nbsp; {t('ProjectShowcase.sentence2.suffix')}
              </p>
            </div>
            <div className='relative lg:w-[939px]'>
              <div className='hs-nft absolute hidden lg:block w-[300px] top-[-112px] left-[-340px]'>
                <img
                  src='https://res.cloudinary.com/blanc-io/image/upload/q_auto/v1656758658/website/hs-nft_us4we2.webp'
                  width={300}
                  height={300}
                  alt='HS nft'
                />
              </div>
              <p>
                {t('ProjectShowcase.sentence3.prefix')} <span className='text-4xl lg:text-6xl font-bold text-blueLagoon'>{t('ProjectShowcase.sentence3.highlight')}</span>
              </p>
            </div>
            <div className='relative lg:w-[939px]'>
              <div className='hs-nyc absolute hidden lg:block w-[350px] top-[-12px] right-[-390px]'>
                <img
                  src='https://res.cloudinary.com/blanc-io/image/upload/q_auto/v1656758660/website/hs-nyc_dpewwp.webp'
                  width={350}
                  height={350}
                  alt='HS nyc'
                />
              </div>
              <p>
                <span className='text-4xl lg:text-6xl font-bold text-redViolet'>{t('ProjectShowcase.sentence4.highlight')}</span> {t('ProjectShowcase.sentence4.suffix')}
              </p>
            </div>
            <div className='relative lg:w-[939px]'>
              <div className='hs-hunger-desktop absolute hidden lg:block w-[320px] bottom-[-375px] right-[54px]'>
                <img
                  src='https://res.cloudinary.com/blanc-io/image/upload/q_auto/v1656758660/website/hs-hunger_xeyaxu.webp'
                  width={320}
                  height={320}
                  alt='HS hunger'
                />
              </div>
              <div className='hs-wanted-desktop absolute hidden lg:block w-[340px] bottom-[-432px] left-[100px]'>
                <img
                  src='https://res.cloudinary.com/blanc-io/image/upload/q_auto/v1656758660/website/hs-wanted_sctfre.webp'
                  width={340}
                  height={340}
                  alt='HS wanted'
                />
              </div>
              <p>
                {t('ProjectShowcase.sentence5.prefix')} <span className='text-4xl lg:text-6xl font-bold text-orange'>{t('ProjectShowcase.sentence5.highlight')}</span>{t('ProjectShowcase.sentence5.suffix')}
              </p>
            </div>
          </div>
        </div>
        <div className='flex lg:hidden mt-10'>
          <div className='w-1/2 flex pt-10 pb-2 px-2'>
            <img
              className='hs-wanted-mobile'
              src='https://res.cloudinary.com/blanc-io/image/upload/q_auto/v1656758660/website/hs-wanted_sctfre.webp'
              alt='HS wanted'
              width={290}
              height={290}
            />
          </div>
          <div className='w-1/2 flex pt-2 pb-10 px-2'>
            <img
              className='hs-hunger-mobile'
              src='https://res.cloudinary.com/blanc-io/image/upload/q_auto/v1656758660/website/hs-hunger_xeyaxu.webp'
              alt='HS hunger'
              width={290}
              height={290}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
export default ProjectShowcase

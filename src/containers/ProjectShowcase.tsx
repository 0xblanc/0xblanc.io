import Title from '@components/shared/Title'

import HSBanner  from '@assets/home/past-projects/hs-banner.png'
import HSClash  from '@assets/home/past-projects/hs-clash.png'
import HSHunger  from '@assets/home/past-projects/hs-hunger.png'
import HSNft  from '@assets/home/past-projects/hs-nft.png'
import HSNyc  from '@assets/home/past-projects/hs-nyc.png'
import HSWanted  from '@assets/home/past-projects/hs-wanted.png'

import { useEffect, useState } from 'react'
import useWindowDimensions from '@hooks/useWindowDimensions'

const ProjectShowcase = () => {
  const { width, height } = useWindowDimensions()

  const [scrolling, setScrolling] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      let currentPosition = window.pageYOffset; // or use document.documentElement.scrollTop;
      const main = document.querySelector('.main') as any
      const pastProject = document.getElementById('past-projects')
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
      texts.forEach(text => {
        text.style.transform = `scale(${textsTransition <= 1 ? 1 : textsTransition})`
      })

      setScrolling(currentPosition <= scrollTop)
      setScrollTop(currentPosition <= 0 ? 0 : currentPosition);
    }

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop]);

  return (
    <div id='past-projects' className='relative items-center bg-aliceBlue py-28 overflow-hidden'>
      <div className='w-full flex justify-center flex-col h-5/6'>
        <div className='container w-full mx-auto flex justify-center'>
          <Title text='Past Projects' />
        </div>
        <div className='flex lg:hidden justify-center mt-20 my-10'>
          <img className='hs-banner-mobile w-4/5' src={HSBanner} alt='HS Banner' />
        </div>
        <div className='project-container flex flex-col relative justify-center items-center lg:my-80 lg:py-40'>
          <div className='flex flex-col italic text-xl lg:text-3xl text-center text-deepDarkBlue'>
            <div className='relative'>
              <img className='hs-banner-desktop absolute hidden lg:block' style={{ width: '700px', top: '-375px', left: '-12px' }} src={HSBanner} alt='HS banner' />
              <p>
                Over <span className='text-4xl lg:text-6xl font-bold text-blue'>One Million</span> USD on sell
              </p>
            </div>
            <div className='relative'>
              <img className='hs-clash absolute hidden lg:block' style={{ width: '335px', top: '-306px', right: '-160px' }} src={HSClash} alt='HS clash' />
              <p>
                <span className='text-4xl lg:text-6xl font-bold text-purple relative'>100 <span className='absolute -right-3 top-2 text-4xl'>+</span></span>&nbsp; ETH trade volume on OpenSea
              </p>
            </div>
            <div className='relative'>
              <img className='hs-nft absolute hidden lg:block' style={{ width: '300px', top: '-112px', left: '-340px' }} src={HSNft} alt='HS nft' />
              <p>
                Collaborate with <span className='text-4xl lg:text-6xl font-bold text-blueLagoon'>French graffiti artist DEZIO</span>
              </p>
            </div>
            <div className='relative'>
              <img className='hs-nyc absolute hidden lg:block' style={{ width: '350px', top: '-12px', right: '-390px' }} src={HSNyc} alt='HS nyc' />
              <p>
                <span className='text-4xl lg:text-6xl font-bold text-redViolet'>Chef Nick Family</span> x Hungry Sausages Lab
              </p>
            </div>
            <div className='relative'>
              <img className='hs-hunger-desktop absolute hidden lg:block' style={{ width: '320px', bottom: '-375px', right: '54px' }} src={HSHunger} alt='HS hunger' />
              <img className='hs-wanted-desktop absolute hidden lg:block' style={{ width: '340px', bottom: '-432px', left: '100px' }} src={HSWanted} alt='HS wanted' />
              <p>
                Collaborated event with <span className='text-4xl lg:text-6xl font-bold text-orange'>Grant Hyatt - CLASH</span>!
              </p>
            </div>
          </div>
        </div>
        <div className='flex lg:hidden mt-10'>
          <div className='w-1/2 flex pt-10 pb-2 px-2'>
            <img className='hs-wanted-mobile' src={HSWanted} alt='HS wanted' />
          </div>
          <div className='w-1/2 flex pt-2 pb-10 px-2'>
            <img className='hs-hunger-mobile' src={HSHunger} alt='HS hunger' />
          </div>
        </div>
      </div>
    </div>
  )
}
export default ProjectShowcase

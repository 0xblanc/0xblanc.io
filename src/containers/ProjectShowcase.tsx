import Title from '@components/shared/Title'

import HSBanner  from '@assets/home/past-projects/hs-banner.png'
import HSClash  from '@assets/home/past-projects/hs-clash.png'
import HSHunger  from '@assets/home/past-projects/hs-hunger.png'
import HSNft  from '@assets/home/past-projects/hs-nft.png'
import HSNyc  from '@assets/home/past-projects/hs-nyc.png'
import HSWanted  from '@assets/home/past-projects/hs-wanted.png'

const ProjectShowcase = () => {
  return (
    <div id='past-projects' className='relative items-center bg-aliceBlue py-28'>
      <div className='w-full flex justify-center flex-col h-5/6'>
        <div className='container w-full mx-auto'>
          <Title text='Past Projects' />
        </div>
        <div className='flex flex-col relative justify-center items-center my-80 py-40'>
          <div className='flex flex-col italic text-3xl text-center text-deepDarkBlue'>
            <div className='relative'>
              <img className='absolute' style={{ width: '700px', top: '-375px', left: '-12px' }} src={HSBanner} alt='HS banner' />
              <p>
                Over <span className='text-6xl font-bold text-blue'>One Million</span> USD on sell
              </p>
            </div>
            <div className='relative'>
              <img className='absolute' style={{ width: '335px', top: '-306px', right: '-160px' }} src={HSClash} alt='HS clash' />
              <p>
                <span className='text-6xl font-bold text-purple relative'>100 <span className='absolute -right-3 top-2 text-4xl'>+</span></span>&nbsp; ETH trade volume on OpenSea
              </p>
            </div>
            <div className='relative'>
              <img className='absolute' style={{ width: '300px', top: '-112px', left: '-340px' }} src={HSNft} alt='HS nft' />
              <p>
                Collaborate with <span className='text-6xl font-bold text-blueLagoon'>French graffiti artist DEZIO</span>
              </p>
            </div>
            <div className='relative'>
              <img className='absolute' style={{ width: '350px', top: '-12px', right: '-390px' }} src={HSNyc} alt='HS nyc' />
              <p>
                Hungry Sausages Lab x <span className='text-6xl font-bold text-redViolet'>CNF</span>
              </p>
            </div>
            <div className='relative'>
              <img className='absolute' style={{ width: '320px', bottom: '-375px', right: '54px' }} src={HSHunger} alt='HS clash' />
              <img className='absolute' style={{ width: '340px', bottom: '-432px', left: '100px' }} src={HSWanted} alt='HS wanted' />
              <p>
                Collaborated event with <span className='text-6xl font-bold text-orange'>Grant Hyatt - CLASH</span>!
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
export default ProjectShowcase

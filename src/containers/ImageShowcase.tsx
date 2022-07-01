import {
  ReactCompareSlider,
  ReactCompareSliderHandle,
  ReactCompareSliderImage
} from "react-compare-slider";

import AINightbirds from '@assets/home/image-showcase/AINightbirds.png';
import Moonbirds from '@assets/home/image-showcase/Moonbirds.png';

const ImageShowcase = () => {

  return (
    <div className="container mx-auto py-28 xl:px-10">
      <div className="w-full justify-center items-center flex flex-col text-center">
        <h1 className="text md:text-3xl text-darkBlue mb-2">Want something special? </h1>
        <h1 className="text-3xl md:text-6xl text-darkBlue font-bold mb-8">
          AI image processed NFT generation
        </h1>
      </div>
      <div className="flex flex-col-reverse md:flex-row mx-auto pt-16">
        <div className="flex md:flex-col flex-1 pt-8 lg:pt-24 xl:pl-16 mr-10 justify-evenly md:justify-start">
          <div className='flex flex-col mb-8 lg:mb-16'>
            <p className='text-xl md:text-2xl lg:text-4xl text-gray'>
              From
            </p>
            <p className='text-xl md:text-2xl lg:text-4xl font-bold text-gray'>
              Moonbirds #1555
            </p>
            <p className='text-lightGray text-sm lg:text-base'>
              Source <a href='https://opensea.io/collection/proof-moonbirds'>Opensea@Moonbirds</a>
            </p>
          </div>
          <div className='flex flex-col'>
            <p className='text-xl md:text-2xl lg:text-4xl text-gray'>
              To
            </p>
            <p className='text-xl md:text-2xl lg:text-4xl font-bold text-gray'>
              AINightbirds MBAI#1555
            </p>
            <p className='text-lightGray text-sm lg:text-base'>
              Source <a href='https://opensea.io/collection/ainightbirds'>Opensea@AINightbirds</a>
            </p>
          </div>
        </div>
        <div className="flex bg-aliceBlue mx-20 md:ml-10 md:mr-0">
          <div>
            {/*<img className='-translate-y-10 -translate-x-10' src={AINightbirds} alt='AINightbirds'/>*/}
            <ReactCompareSlider
              className="-translate-y-10 -translate-x-10"
              changePositionOnHover={true}
              itemOne={
                <ReactCompareSliderImage
                  src={Moonbirds}
                  alt="Moonbirds"
                />
              }
              itemTwo={
                <ReactCompareSliderImage
                  src={AINightbirds}
                  alt="AINightbirds"
                />
              }
            />
          </div>
        </div>
      </div>
    </div>
  )
}
export default ImageShowcase

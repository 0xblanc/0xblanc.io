import { ReactCompareSlider, ReactCompareSliderHandle, ReactCompareSliderImage } from 'react-compare-slider'

import { useTranslation, useLanguageQuery, LanguageSwitcher } from 'next-export-i18n'

const ImageShowcase = () => {
  const { t } = useTranslation()

  return (
    <div className='container mx-auto py-28 xl:px-10'>
      <div className='w-full justify-center items-center flex flex-col text-center'>
        <h1 className='md:text-3xl text-darkBlue mb-2'>{t('web3.ImageShowcase.WantSomethingSpecial')} </h1>
        <h1 className='text-3xl md:text-6xl text-darkBlue font-bold mb-8'>{t('web3.ImageShowcase.AIImageProcessedNftGeneration')}</h1>
      </div>
      <div className='flex flex-col-reverse md:flex-row mx-auto pt-16'>
        <div className='flex md:flex-col flex-1 pt-8 lg:pt-24 xl:pl-16 justify-evenly  md:justify-start'>
          <div className='flex flex-col mb-8 lg:mb-16 text-center sm:text-start'>
            <p className='text-xl md:text-2xl lg:text-4xl text-gray'>{t('web3.ImageShowcase.from')}</p>
            <p className='text-xl md:text-2xl lg:text-4xl font-bold text-gray'>Moonbirds #1555</p>
            <p className='text-lightGray text-base lg:text-base'>
              {t('web3.ImageShowcase.source')}{' '}
              <a className='underline' href='https://opensea.io/collection/proof-moonbirds' target='_blank' rel="noreferrer">
                Opensea@Moonbirds
              </a>
            </p>
          </div>
          <div className='flex flex-col text-center sm:text-start'>
            <p className='text-xl md:text-2xl lg:text-4xl text-gray'>{t('web3.ImageShowcase.to')}</p>
            <p className='text-xl md:text-2xl lg:text-4xl font-bold text-gray'>AINightbirds MBAI#1555</p>
            <p className='text-lightGray text-base lg:text-base'>
              {t('web3.ImageShowcase.source')}{' '}
              <a className='underline' href='https://opensea.io/collection/ainightbirds' target='_blank' rel="noreferrer">
                Opensea@AINightbirds
              </a>
            </p>
          </div>
        </div>
        <div className='flex md:p-12'>
          <div className='flex bg-aliceBlue mx-20 md:mx-0 translate-x-10'>
            <div>
              <ReactCompareSlider
                className='-translate-y-10 -translate-x-10'
                changePositionOnHover={true}
                itemOne={
                  <img
                    alt={'AINightbirds'}
                    width={740}
                    height={740}
                    src='https://res.cloudinary.com/blanc-io/image/upload/q_auto/v1656758656/website/AINightbirds_sllfw2.webp'
                  />
                }
                itemTwo={
                  <img
                    alt={'Moonbirds'}
                    width={740}
                    height={740}
                    src='https://res.cloudinary.com/blanc-io/image/upload/q_auto/v1656758654/website/Moonbirds_x5nlp8.webp'
                  />
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ImageShowcase

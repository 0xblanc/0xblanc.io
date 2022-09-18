import Square from '../../components/shared/Square'
import { useTranslation, useLanguageQuery, LanguageSwitcher } from 'next-export-i18n'
import { useEffect, useState } from 'react'

const WeTech = (props: any) => {
  const { t } = useTranslation()

  const [services, setServices] = useState([])

  useEffect(() => {
    const arr = [] as []
    for (let i = 0; i < t('web2.we-tech.services').length; i++) {
      // @ts-ignore
      arr.push(t('web2.we-tech.services')[i])
    }
    setServices(arr)
  }, [])

  const serviceHoverHandler = (index: number) => {
  }

  const serviceHoverOutHandler = (index: number) => {
  }

  return (
    <div id='web2-we-tech' className='bg-dark overflow-visible'>
      <div className='container mx-auto flex flex-col pt-40 pb-56 h-[1100px] items-center'>
        <div className='flex justify-center mb-4'>
          <h2 className='text-white text-8xl font-bold text-center'>{t('web2.we-tech.title')}</h2>

        </div>
        <Square position={'right'} />
        <div className='flex relative flex-1 w-full max-w-[1280px]'>
          <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 aspect-square w-[780px] flex flex-wrap rotate-45'>
            {services.map((service, index) => {
              return (
                <div className='w-1/3 aspect-square flex justify-center items-center relative' key={index} onMouseEnter={() => serviceHoverHandler(index)} onMouseLeave={() => serviceHoverOutHandler(index)}>
                  <div className={`absolute flex justify-center overflow-hidden items-center group w-[230px] aspect-square top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 service-container-${index} transition-all duration-500 z-0 ${service.name ? ' border-2 border-gold border-opacity-30 bg-dark hover:w-[400px] hover:z-10' : ''}`}>
                    <div className={`flex flex-col -rotate-45 service-content-${index} transition-all duration-500 relative group-hover:-translate-x-[32px] group-hover:-translate-y-1/2`}>
                      <p className={`text-white text-3xl text-center transition-all duration-700 service-name-${index} group-hover:text-gold group-hover:text-4xl`}>
                        {service.name}
                      </p>
                      <p className='text-white text-xl absolute bottom-0 -translate-x-1/2 left-1/2 translate-y-[125%] w-[350px] text-center duration-500 overflow-hidden max-h-0 group-hover:max-h-28'>
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
export default WeTech

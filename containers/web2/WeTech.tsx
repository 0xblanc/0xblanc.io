import Cube from '../../components/shared/Cube'
import { useTranslation, useLanguageQuery, LanguageSwitcher } from 'next-export-i18n'
import {useEffect} from "react";

const services = [
  {
    name: '',
    description: '',
  },
  {
    name: '',
    description: '',
  },
  {
    name: 'Landing Page',
    description: 'A landing page is a page that is the first page a visitor sees when they visit your website. It is the page that is displayed when a visitor first visits your website.',
  },
  {
    name: '',
    description: '',
  },
  {
    name: 'DNS & Hosting',
    description: '',
  },
  {
    name: 'CMS & API',
    description: '',
  },
  {
    name: 'SEO Audit',
    description: '',
  },
  {
    name: 'E-Commerce',
    description: '',
  },
  {
    name: '',
    description: '',
  },
]

const WeTech = (props: any) => {
  const { t } = useTranslation()

  return (
    <div id='web2-we-tech' className='bg-dark'>
      <div className='container mx-auto flex flex-col py-40 h-[900px] items-center'>
        <div className='flex justify-center mb-4'>
          <h2 className='text-white text-8xl font-bold text-center'>Technical Services</h2>
        </div>
        <div className='flex relative flex-1 w-full max-w-[1280px]'>
          <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 aspect-square w-7/12 flex flex-wrap rotate-45'>
            {services.map((service, index) => {
              return (
                <div className='w-1/3 aspect-square flex justify-center items-center relative' key={index}>
                  <div className={`absolute flex justify-center items-center w-[90%] aspect-square top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${service.name ? ' border-2 border-gold border-opacity-30 hover:w-[150%] hover:bg-dark hover:z-10 duration-500 transition-all group' : ''}`}>
                    <div className='flex flex-col -rotate-45 overflow-hidden max-h-8 delay-500 duration-500 transition-all group-hover:max-h-[300px]'>
                      <p className='text-white text-3xl text-center transition-all duration-500 group-hover:text-gold group-hover:mb-4'>
                        {service.name}
                      </p>
                      <p className='flex items-center text-white text-xl text-center'>
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

import Cube from '../../components/shared/Cube'
import { useTranslation, useLanguageQuery, LanguageSwitcher } from 'next-export-i18n'
import {useEffect} from "react";

const WeDesign = (props: any) => {
  const { t } = useTranslation()

  return (
    <div id='web2-we-design' className='bg-dark'>
      <div className='container mx-auto flex py-40'>
        <div className='w-1/2 flex justify-center flex-col relative items-center'>
          <div className='z-10'>
            <h2 className='text-white text-8xl font-bold mb-3 w-fit'>UI/UX Design</h2>
            <p className='text-white text-2xl'>Avoid implementing template designs. 0xBlanc offers you customized <span className='text-gold uppercase'>unique</span> design with high accessibility.</p>
          </div>
          <div className='w-72 aspect-square border-2 border-gold absolute left-72 top-1/2 -translate-y-1/2 -translate-x-1/2 rotate-45 opacity-30'/>
        </div>
        <div className='w-1/2 flex justify-center'>
          <img className='w-3/5' src="https://images.unsplash.com/photo-1632516643720-e7f5d7d6ecc9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1011&q=80" alt="Image" />
        </div>
      </div>
    </div>
  )
}
export default WeDesign

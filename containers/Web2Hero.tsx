import Cube from '../components/shared/Cube'
import { useTranslation, useLanguageQuery, LanguageSwitcher } from 'next-export-i18n'

const Web2Hero = (props: any) => {
  const { t } = useTranslation()

  return (
    <div id='web2-hero' className='h-screen min-h-full w-full bg-cover bg-right flex'>
      <div className='w-1/2'>
        Title
      </div>
      <div className='w-1/2 relative overflow-visible'>
        <Cube />
      </div>
    </div>
  )
}
export default Web2Hero

import Title from '../components/shared/Title'
import { useTranslation, useLanguageQuery, LanguageSwitcher } from 'next-export-i18n'

const AboutUs = () => {
  const { t } = useTranslation()
  const [query] = useLanguageQuery()

  return (
    <div id='about-us' className='bg-aliceBlue py-28 block'>
      <div className='flex flex-col items-center'>
        <div className='container w-full mx-auto flex justify-center'>
          <Title text={t('AboutUs.title')} />
        </div>
        <div className='flex justify-center w-full py-6 md:py-24'>
          <p className='text-darkBlue text-lg text-center w-2/3'>{t('AboutUs.content')}</p>
        </div>
      </div>
    </div>
  )
}
export default AboutUs

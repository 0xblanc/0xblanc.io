import type { NextPage } from 'next'
import Head from 'next/head'
import Script from 'next/script'

import AboutUs from '../containers/AboutUs'
import ContactUs from '../containers/ContactUs'
import ProjectShowcase from '../containers/ProjectShowcase'
import ImageShowcase from '../containers/ImageShowcase'
import Service from '../containers/Service'
import DesktopFrame from '../components/templates/DesktopFrame'
import { useTranslation, useLanguageQuery, LanguageSwitcher } from 'next-export-i18n'

const Home: NextPage = () => {
  const { t } = useTranslation()
  const [query] = useLanguageQuery()

  return (
    <>
      <Head>
        <title>{t('meta.title')}</title>
        <link rel='icon' href='/logo512.png' />
        <link rel='canonical' href='https://0xblanc.io' />
        <link rel='alternate' href='https://0xblanc.io' hrefLang='en' />
        <link rel='alternate' href='https://0xblanc.io/zh-hk' hrefLang='zh' />
        <link rel='alternate' href='https://0xblanc.io/zh-hk' hrefLang='zh-HK' />
        <link rel="alternate" href="https://0xblanc.io" hrefLang="x-default"/>
        <meta
          name='description'
          content={t('meta.description')}
        />
        <meta name='keywords' content={t('meta.keywords')} />

        <meta property='og:title' content={t('meta.title')} />
        <meta property='og:image' content='/assets/logo/text_logo.svg' />
        <meta property='og:site_name' content='0xBlanc' />
        <meta
          property='og:description'
          content={t('meta.description')}
        />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://0xblanc.io' />
        <meta property='og:locale' content={t('meta.locale')} />

        <meta name='googlebot' content='noindex,nofollow' />
      </Head>
      <Script
        id={'google-analytics-4'}
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-8BNVK6Q1NB', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <DesktopFrame>
        <div className='flex flex-col'>
          <AboutUs />
          <Service />
          <ImageShowcase />
          <ProjectShowcase />
          <ContactUs />
        </div>
      </DesktopFrame>
    </>
  )
}

export default Home

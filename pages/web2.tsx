import type { NextPage } from 'next'
import Head from 'next/head'
import Script from 'next/script'

import WeDesign from "../containers/web2/WeDesign";
import ContactUs from '../containers/web3/ContactUs'
import DesktopFrame from '../components/templates/DesktopFrame'
import { useTranslation, useLanguageQuery } from 'next-export-i18n'
import WeTech from "../containers/web2/WeTech";

const Web2: NextPage = () => {
  const { t } = useTranslation()
  const [query] = useLanguageQuery()

  return (
    <>
      <Head>
        <title>{t('meta.title')}</title>
        <link rel='icon' href='/favicon.ico' />
        <link rel='shortcut icon' href='/favicon.ico' />
        <link rel='apple-touch-icon' href='/favicon.ico' />
        <link rel='apple-touch-icon-precomposed' href='/favicon.ico' />
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
        <meta property="og:image" content="https://0xblanc.io/assets/logo/text_logo_og_meta.png" />
        <meta property='og:site_name' content='0xBlanc' />
        <meta
          property='og:description'
          content={t('meta.description')}
        />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://0xblanc.io' />
        <meta property='og:locale' content={t('meta.locale')} />

        <meta name='twitter:card' content='summary_large_image' />
        <meta property='twitter:domain' content='0xblanc.io' />
        <meta property='twitter:url' content={t('meta.url')} />
        <meta name='twitter:title' content={t('meta.title')} />
        <meta name='twitter:description' content={t('meta.description')} />
        <meta name='twitter:image' content='https://0xblanc.io/assets/logo/text_logo_og_meta.png' />
      </Head>
      <DesktopFrame>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-8BNVK6Q1NB"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-8BNVK6Q1NB');
        `}
        </Script>
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-N7C9GGF');`
          }}
        >
        </Script>
        <div className='flex flex-col'>
          <WeDesign />
          <WeTech />
          <ContactUs />
        </div>
      </DesktopFrame>
    </>
  )
}

export default Web2

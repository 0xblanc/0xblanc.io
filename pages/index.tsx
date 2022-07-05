import type { NextPage } from 'next'
import Head from 'next/head'

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
        <title>0xBlanc.io - HK Web3 Solution Provider</title>
        <link rel='icon' href='/assets/logo/text_logo.svg' />
        <meta
          name='description'
          content={`Hong Kong based web3 and blockchain solution provider. Want to integrate web3 into your business? Need blockchain related technical services or consultation like launching NFT projects? Then 0xBlanc.io is the place to be.`}
        />
        <meta name='keywords' content='web3, blockchain, solana, ethereum, nft, technical service' />

        <meta property='og:title' content='0xBlanc.io - HK Web3 Solution Provider' />
        <meta property='og:image' content='/assets/logo/text_logo.svg' />
        <meta property='og:site_name' content='CBTWines' />
        <meta
          property='og:description'
          content={`Hong Kong based web3 and blockchain solution provider. Want to integrate web3 into your business? Need blockchain related technical services or consultation like launching NFT projects? Then 0xBlanc.io is the place to be.`}
        />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://0xblanc.io' />
        <meta property='og:locale' content='en_US' />

        <meta name='googlebot' content='noindex,nofollow' />
      </Head>
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

import { Navigation } from '@/components/Navigation'
import { Header } from '@/components/Header'
import { Feature } from '@/components/Feature'
import Head from 'next/head'
export default function Home() {
  return (
    <>
      <Head>
        <title>Nexread - Nexread Team</title>
        <meta property="og:title" content="Nexread - Nexread Team" key="title" />
        <meta name="og:description" content="NexRead is a news aggregator app that enables you to stay up-to-date with the latest headlines, all from within your own Nextcloud account. With NexRead, you can customize your news feed by selecting your favorite news sources, topics, and regions of interest."/>
      </Head>
      <Navigation />
      <Header />
      <Feature />
    </>
  )
}

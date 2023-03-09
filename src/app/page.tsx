import { Inter } from 'next/font/google'
import { Header } from '@/components/Header'
import { Feature } from '@/components/Feature'
import { Navigation } from '@/components/Navigation'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Navigation />
    <Header />
    <Feature />
    </>

  )
}

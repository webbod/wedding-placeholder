import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Come on you've waited 11 years, just a few more days!!!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="" />
        <img src="placeholder.svg" class="desktop"/>
        <img src="placeholder_mobile.svg" class="mobile"/>
      </main>

      <Footer />
    </div>
  )
}

import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Home | VoiceCrackerClub</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to VoiceCrackerClub!!" />
        <p className="description">
          This website is bieng hosted by ryken kennedy.  i thought it would be fun to start some sort of group website and so I did.
          contact billiam_egg@yahoo.com on more info on how to become a member lol.
        </p>
      </main>

      <Footer />
    </div>
  )
}

import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Alberto's Portfolio</title>
        <meta name="description" content="Alberto's Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <main>
          <h1>Home</h1>
        </main>
      </Layout>
    </div>
  )
}

import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'

function Blog() {
  return (
    <div>
      <Head>
        <title>Alberto's Portfolio - Blog</title>
        <meta name="description" content="Alberto's Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <h1>Blog</h1>
      </Layout>
    </div>
  )
}

export default Blog
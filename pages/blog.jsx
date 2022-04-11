import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'

function Blog() {
  return (
    <div>
      <Head>
        <title>Alberto's Portfolio - Blog</title>
      </Head>

      <Layout>
        <h1>Blog</h1>
      </Layout>
    </div>
  )
}

export default Blog
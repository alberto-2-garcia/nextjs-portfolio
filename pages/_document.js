import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <meta name="description" content="Alberto's Portfolio Web Site" />
        <link rel="icon" href={process.env.BACKEND_URL + "/foto pp.jpg"} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

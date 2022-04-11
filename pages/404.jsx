import Link from 'next/link';
import Layout from "../components/Layout";

const Custom404 = () => {
  return (
    <div>
      <Head>
        <title>Alberto's Portfolio - Github</title>
      </Head>

      <Layout>
        <div className='text-center'>
          <h1>404</h1>
          <h1>This page does not exist</h1>
          <h1>Please return to <Link href='/'>home</Link></h1>
        </div>
      </Layout>
    </div>
  );
}

export default Custom404;

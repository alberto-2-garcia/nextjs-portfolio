import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Col, Row, Card, Button } from 'react-bootstrap'
import Layout from '../components/Layout'

export default function Home() {
  const ppSize = 350;
  return (
    <div>
      <Head>
        <title>Alberto's Portfolio</title>
      </Head>

      <Layout>
        <h1>Home</h1>
        <Row>
          <Col md='12'>
            <Card>
              <Card.Body className='bg-primary text-light'>
                <Row>
                  <Col md={4}>
                    <Image src="/foto pp.jpg" alt="" className="img-fluid" width={ppSize} height={ppSize} />
                  </Col>
                  <Col md={8}>
                    <Card.Title style={{fontSize: '2rem'}}>Alberto García</Card.Title>
                    <Card.Subtitle className='text-muted mb-2' style={{color: '#dddddd', fontSize: '1.2rem'}}>FULL STACK DEVELOPER</Card.Subtitle>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the bulk of
                      the card's content.
                    </Card.Text>
                    <Link href="/hireme" passHref>
                      <Card.Link className="btn btn-outline-light">
                        Hire me!
                      </Card.Link>
                    </Link>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row>

        </Row>
      </Layout>
    </div>
  )
}

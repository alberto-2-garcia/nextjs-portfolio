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
            {/* <Card>
              <Col md={4}>
                <Card.Img variant="top" src="holder.js/100px180" />
              </Col>
              <Col md={8}>
                <Card.Body className='bg-primary text-light'>
                  <Card.Title>Alberto García</Card.Title>
                  <Card.Subtitle style={{color: '#dddddd'}}>Alberto García</Card.Subtitle>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text>
                  <Link href='/hireme' passHref>
                    <Card.Link style={{color: 'white'}}>
                      Hire me!    
                    </Card.Link>
                  </Link>
                </Card.Body>
                
              </Col>
            </Card> */}
            <div className="card card-body bg-primary text-light animate__animated animate__fadeIn">
              <div className="row">
                <div className="col-md-4">
                  <Image src="/foto pp.jpg" alt="" className="img-fluid" width={ppSize} height={ppSize} />
                </div>
                <div className="col-md-8">
                  <h1 className='card-title'>Alberto García</h1>
                  <h3 className='card-subtitle text-muted'>Full Stack Developer</h3>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Molestiae atque ullam perferendis harum, nisi porro voluptate,
                    iste consequuntur enim reprehenderit architecto consectetur cum?
                    Totam ad molestias natus illum illo officia.
                  </p>
                  <Link href="/hireme" passHref>
                    <a className="btn btn-outline-light">Hire Me</a>
                  </Link>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Layout>
    </div>
  )
}

import Head from 'next/head'
import NextImage from 'next/image'
import Link from 'next/link'
import { Col, Row, Card, Button, ProgressBar } from 'react-bootstrap'
import Layout from '../components/Layout'

// opt-out of image optimization, no-op
const customLoader = ({ src }) => {
  return src
}

function Image(props) {
  return (
    <NextImage
      {...props}
      loader={customLoader}
    />
  );
}

const ppSize = 350;
import { skills, experience } from './../profile';

export default function Home() {
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
                    <Image src={process.env.BACKEND_URL + "/foto pp.jpg"} alt="" className="img-fluid" width={ppSize} height={ppSize} />
                  </Col>
                  <Col md={8}>
                    <Card.Title style={{fontSize: '2rem'}}>Alberto García</Card.Title>
                    <Card.Subtitle className='text-muted mb-2' style={{color: '#dddddd', fontSize: '1.2rem'}}>FULL STACK DEVELOPER</Card.Subtitle>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the bulk of
                      the card's content.
                    </Card.Text>
                    <Link href="/hireme" as={process.env.BACKEND_URL + '/hireme'} passHref>
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
        <Row className='py-2 my-2'>
          <Col md={4}>
            <Card className='bg-secondary'>
              <Card.Body>
                <h1>Skills</h1>
                <div>
                  {skills.map(({ skill, percentage }) => (
                    <div key={skill} className='mb-4'>
                      <p className='m-0'>{skill}</p>
                      <ProgressBar now={percentage} />
                    </div>  
                  ))}
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col md={8}>
            <Card className='bg-secondary'>
              <Card.Body>
                <h1>Experience</h1>
                <div>
                  <ul>
                    {experience.map(({ title, date, desc }) => (
                      <li key={title}>
                        <h3>{title}</h3>
                        <h5>{date}</h5>
                        <p>{desc}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Layout>
    </div>
  )
}

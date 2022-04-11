import React from 'react'
import { Container } from 'react-bootstrap';
import Navbar from './Navbar';

function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <main>
        <Container className='my-4'>
          {children}
        </Container>
      </main>
    </div>
  )
}

export default Layout;

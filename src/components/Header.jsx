import React from 'react'
import { Container,Nav,Navbar } from 'react-bootstrap'

const Header = () => {
    return (
        <>
        
        <Navbar className='pb-3' bg="dark" data-bs-theme="dark">
        <Container className='pb-3'>
          <Navbar.Brand className='text-bold fw-5 me-3' href="#home">Food Mall</Navbar.Brand>
          <Nav className="me-auto ms-5">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#contactus">Contact Us</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
        </>
    )
}

export default Header
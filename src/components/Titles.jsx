import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const Titles = () => {
    return (
        <div >

            <Container>
                <Row>
                    <Col></Col>
                    <Col className='pt-5 mt-4 text-center ' >
                        <h1 className='text-secondary' style={{ marginTop: '20vh', fontSize: '3em' }}>Yours Food Destination</h1>
                        <h1 className='text-warning syne-tactile-regular'>Food Mall</h1>
                        <div >
                            <Button className='me-4 ' style={{ background: '#211951' }}>Menu</Button>
                            <Button style={{ background: '#0D9276' }}>Order Online</Button>
                        </div>
                    </Col>

                </Row>

            </Container>
        </div>
    )
}

export default Titles
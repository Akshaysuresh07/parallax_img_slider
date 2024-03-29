import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const Titles = () => {
    const [opacity, setOpacity] = useState(1);

    useEffect(() => {
        const handleScroll = () => {
            let scrollPosition = window.scrollY;
            let newOpacity = 1 - scrollPosition / 200;
            setOpacity(newOpacity > 0 ? newOpacity : 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div style={{ opacity: opacity }}>
            <Container>
                <Row>
                    <Col></Col>
                    <Col className='pt-5 mt-4 text-center me-5 ' >
                        <h1 className='text-center'  style={{ marginTop: '20vh', fontSize: '3em',color:"#FF8939" }}>Yours Food Destination</h1>
                        <h1 style={{color:"#FF8921",fontSize:'3em'} }className='p-1 syne-tactile-regular'>Food Mall</h1>
                        <div >
                            <Button className='me-5 ' style={{ background: '#211951' }}>Menu</Button>
                            <Button style={{ background: '#0D9276' }}>Order Online</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Titles;
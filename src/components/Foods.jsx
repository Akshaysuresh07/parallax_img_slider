import React from 'react'
import Card from 'react-bootstrap/Card';


const Foods = () => {

    return (
        <>
            <h1 className='text-italics text-center pt-4'>We Serve</h1>
            <div className='d-flex justify-content-between d-flex  ps-5 pe-5 '>
              
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://cristianonew.ukrdevs.com/wp-content/uploads/2016/08/product-1-370x247.jpg" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
            
            
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://images.unsplash.com/photo-1514361892635-6b07e31e75f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
            
            
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://cristianonew.ukrdevs.com/wp-content/uploads/2016/08/product-2-370x247.jpg" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
            
            
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://cristianonew.ukrdevs.com/wp-content/uploads/2016/08/product-1-370x247.jpg" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
            
            
            </Card.Body>
          </Card>
          </div>

            
        </>
    )
}

export default Foods
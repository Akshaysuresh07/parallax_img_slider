import React from 'react'
import Card from 'react-bootstrap/Card';


const Foods = () => {

    return (
        <>
            <h1 className='text-italics text-center text-warning pt-4'>RECOMMENDS FOOD</h1>
            <div className='d-flex justify-content-evenly flex-wrap mt-5 '>
              
            <Card style={{ width: '18rem',border:'none' ,margin:' 20px' }}>
            <Card.Img variant="top" src="https://images.pexels.com/photos/628776/pexels-photo-628776.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            <Card.Body >
              <Card.Title className='text-center'> Sashimi
              </Card.Title>
            
            
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem',border:'none',margin:' 20px'  }}>
            <Card.Img variant="top" src="https://images.pexels.com/photos/2960569/pexels-photo-2960569.jpeg?auto=compress&cs=tinysrgb&w=600" />
            <Card.Body>
              <Card.Title className='text-center'>Chicken Grill</Card.Title>
            
            
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem',border:'none',margin:' 20px'  }}>
            <Card.Img variant="top" src="https://cristianonew.ukrdevs.com/wp-content/uploads/2016/08/product-2-370x247.jpg" />
            <Card.Body>
              <Card.Title  className='text-center'>Salads</Card.Title>
            
            
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem',border:'none',margin:' 20px' }}>
            <Card.Img variant="top" src="https://cristianonew.ukrdevs.com/wp-content/uploads/2016/08/product-1-370x247.jpg" />
            <Card.Body>
              <Card.Title  className='text-center'>Fish </Card.Title>
            
            
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem',margin:"20px",border:'none'  } }>
          <Card.Img variant="top" src="https://images.unsplash.com/photo-1514361892635-6b07e31e75f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" />
          <Card.Body>
            <Card.Title  className='text-center'>Mint lime</Card.Title>
          
          
          </Card.Body>
        </Card>
        
        <Card style={{ width: '18rem',margin:"20px",border:'none'  } }>
        <Card.Img variant="top" src="https://images.pexels.com/photos/1487511/pexels-photo-1487511.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        <Card.Body>
          <Card.Title className='text-center'>Pasta</Card.Title>
        
        
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem',margin:"20px",border:'none'  } }>
      <Card.Img variant="top" src="https://images.pexels.com/photos/3738730/pexels-photo-3738730.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
      <Card.Body>
        <Card.Title className='text-bold text-center'>  Burger</Card.Title>
      
      
      </Card.Body>
    </Card>
      <Card style={{ width: '18rem',margin:"20px",border:'none'  } }>
      <Card.Img variant="top" src="https://cristianonew.ukrdevs.com/wp-content/uploads/2016/08/product-1-370x247.jpg" />
      <Card.Body>
        <Card.Title className='text-bold text-center'>  Burger</Card.Title>
      
      
      </Card.Body>
    </Card>


          </div>

            
        </>
    )
}

export default Foods
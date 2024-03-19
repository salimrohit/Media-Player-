import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
  const navigate = useNavigate()



  return (
    <>
      <Row className='d-flex justify-content-center align-items-center mt-5 mb-5'>
        <Col lg={1}></Col>
        <Col lg={5}>
          <h3>Welcome to <span className='text-warning'>Media Player</span></h3>
          <p className='mt-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis porro consequuntur blanditiis? Repellat, reprehenderit. Expedita explicabo iure sit facilis distinctio, sapiente reprehenderit pariatur. At officiis explicabo distinctio fugit non! Animi?</p>
          <button onClick={()=>navigate('/home')} className='btn btn-warning mt-5'>Get Started <i class="fa-solid fa-right-long ms-1"></i></button> {/* callfack function on onClick before navigate() is a function with an argument */}
        </Col>
        <Col lg={1}></Col>
        <Col lg={5}>
          <img src="https://media.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif" alt="" />
        </Col>
      </Row>

      <div className="container d-flex justify-content-center align-items-center flex-column">
        <h3>Features</h3>
        <div className='d-flex justify-content-center align-items-center mt-5'>
          <Card className='p-4 m-3' style={{ width: '22rem'}}>
            <Card.Img variant="top" style={{ width: '100%', height:'300px' }} src="https://media1.tenor.com/m/HQGqGRHUG_YAAAAC/hey-arnold-headphones.gif" />
            <Card.Body>
              <Card.Title className='text-center'>Managing Video</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>      
            </Card.Body>
          </Card>

          <Card className='p-4 m-3' style={{ width: '22rem'}}>
            <Card.Img variant="top" style={{ width: '100%', height:'300px' }} src="https://media1.tenor.com/m/gEf3ywRka5EAAAAC/fionapawprint-peter-griffin.gif" />
            <Card.Body>
              <Card.Title className='text-center'>Categorized Video</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>      
            </Card.Body>
          </Card>

          <Card className='p-4 m-3' style={{ width: '22rem'}}>
            <Card.Img variant="top" style={{ width: '100%', height:'300px' }} src="https://media1.tenor.com/m/ywEj2UamYEoAAAAC/muzeke.gif" />
            <Card.Body>
              <Card.Title className='text-center'>Watch History</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>      
            </Card.Body>
          </Card>
        </div>

      </div>

      {/* <Row>
        <Col lg={1}></Col>
        <Col lg={10}>
          <Col > </Col>
          <Col > </Col>
        </Col>
        <Col lg={1}></Col>
      </Row> */}

      <div className='w-100 d-flex justify-content-center align-items-center mt-5'>
        <div className='row w-100'>
          <div className="col-md-1"></div>
          <div className="col-md-10">
            <div className='row border rounded border-2 w-100 p-5' style={{borderColor:'white'}}>
              <div className="col-md-6">
                <h3 className='text-warning' style={{fontSize:'36px', fontWeight:'600'}}>Simple Fast and Powerful</h3>
                <h6 className='mt-5'><span style={{fontSize:'28px', color:'grey'}}>Play Everything</span> : Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad nihil harum quam optio dolor ipsum rerum excepturi beatae saepe! Dolore impedit a doloribus unde ratione, nostrum vel modi quod repudiandae?</h6>
                <h6 className='mt-5'><span style={{fontSize:'28px', color:'grey'}}>Play Everything</span> : Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad nihil harum quam optio dolor ipsum rerum excepturi beatae saepe! Dolore impedit a doloribus unde ratione, nostrum vel modi quod repudiandae?</h6>
                <h6 className='mt-5'><span style={{fontSize:'28px', color:'grey'}}>Play Everything</span> : Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad nihil harum quam optio dolor ipsum rerum excepturi beatae saepe! Dolore impedit a doloribus unde ratione, nostrum vel modi quod repudiandae?</h6>
  
              </div>
              <div className="col-md-1"></div>
              <div className="col-md-5">
              <iframe width="100%" height="460px" src="https://www.youtube.com/embed/0Lb20UOpzv0" title="Free Nationals, A$AP Rocky, Anderson .Paak - Gangsta (Official Video)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              </div>
            </div>
            </div>
          <div className="col-md-1"></div>
          



        </div>

      </div>




    </>
  )
}

export default LandingPage

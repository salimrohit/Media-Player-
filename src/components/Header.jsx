import { faVideo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


function Header() {
  return (
    <div>
      <Navbar className="bg-dark">
        <Container>
          <Navbar.Brand>
          <FontAwesomeIcon icon={faVideo} beat style={{color:'orange', fontSize:'30px'}}/>
          {' '}
          <span style={{color:'white',fontSize:'30px'}}>Media Player</span>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header

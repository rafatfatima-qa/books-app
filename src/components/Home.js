import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {useHistory} from "react-router-dom";
import books from '../assets/books-logo1.png';
import Figure from 'react-bootstrap/Figure';
import About from './About';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Home() {

  let history = useHistory();

  return (

    <Container>
    <Row className="justify-content-md-center">
    <Col md="auto">
      <Card className="text-center cardBody">
        <Card.Body className = "cardBody">  
        <Figure className = "cardBody">
       <Figure.Image
        className = "cardBody"
       width={300}
       height={300}
       alt="books-logo"
       src={books}
       rounded
        />
       </Figure>
       <Card.Text className = "cardBody">
          <Button className="btn btn-primary" size="sm" onClick = {() => history.push('/about')}>About</Button>
          {' '}
          <Button className="btn btn-primary" size="sm" onClick = {() => history.push('/login')}>Login</Button>
        </Card.Text> 
        </Card.Body>
      </Card>
      </Col>
 </Row>
 </Container>
   );
}
export default Home;
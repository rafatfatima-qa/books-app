import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Home from './Home'
import {useHistory} from "react-router-dom";
import React, {useEffect, useState} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Dashboard() {
   
   let history = useHistory();

   const [bookDetails, setBookDetails] = useState([]);
   useEffect(() => {
     fetch('https://my-json-server.typicode.com/dmitrijt9/book-api-mock/books')
   .then((results) => results.json())
   .then((data) =>{
      setBookDetails(data)
     
     })
   }, [])

return (
   <>
   <Container>
   <Row className="justify-content-md-center">
   <Col md="auto">
   <h3 className = "text-center">All Books Record</h3>
   {bookDetails.map((book) =>(
   
   <div>   
   <Card className = "cardBody">
      <Card.Header ><h4 className = "cardBody text-center">Book Title: {book.title}</h4></Card.Header>
     <Card.Body className = "cardBody">
     <Card.Title className = "cardBody">Pages: {book.pages}</Card.Title>
     <Card.Title className = "cardBody">Release Year: {book.releaseDate}</Card.Title>
     <Card.Title className = "cardBody">ISBN: {book.isbn}</Card.Title>
     <Button variant="primary" className="btn btn-primary" onClick = {() => history.push('/home')}>Back</Button>
     </Card.Body>
   </Card>
   </div>
 
 ))}
 </Col>
 </Row>
 </Container>
 </>        
 );} 
export default Dashboard;
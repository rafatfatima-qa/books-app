import React from 'react';
import Card from 'react-bootstrap/Card';
import {useHistory} from "react-router-dom";
import Button from 'react-bootstrap/Button';

function About() {

  let history = useHistory();

  return (
<Card>
    <Card.Body>
        <Card.Header><h4>About This App...</h4></Card.Header>
        <Card.Text>
        <h5>What does this app do?</h5>
        - This is a class project in which books record has been fetched thru an API and a login page was created.
        <hr />
        <h5>API used:</h5>
        <href>https://my-json-server.typicode.com/dmitrijt9/book-api-mock/books</href>
        <hr />

        <h5>Technologies used to create this app:</h5>
        <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>npm</li> 
        <li>react</li>
        <li>Bootstrap (for coding and implementation on UI)</li>
        </ul>
        <hr />

        <h5>Softwares needed to build and run this app:</h5>
        <ul>
        <li>VS Code (as Editor)</li>
        <li>Browser (as runtime environment)</li>
        <li>npm (as build generator)</li>
        <li>react.js</li>
        </ul>
        <hr />

        <Card.Text>
        <Button className="btn btn-primary" onClick = {() => history.push('/home')}>Back</Button>
        </Card.Text>

        </Card.Text>
    </Card.Body>
</Card>

  );
}

export default About;
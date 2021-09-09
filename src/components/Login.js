import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import {useHistory} from "react-router-dom";
import Dashboard from './Dashboard'
import Home from './Home'

function Login() {

    let history = useHistory();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onChangeEmail = (event) => {
        setEmail(event.target.value);
      }
    
      const onChangePassword = (event) => {
        setPassword(event.target.value);
      }

    const handleClick = () => {
        console.log(email, password);
        if (email == "" || password == "") {
          alert('please enter valid email and password')
        }
        else {
           window.localStorage.setItem(email,password);
           history.push('/dashboard')
        }
    }
  
    return (
        <>
          <Container>
    
          <Card>
          <Card.Body>

            <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name = "email" type="email" placeholder="Enter email" onChange={onChangeEmail}/>
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name = "password"type="password" placeholder="Password" onChange={onChangePassword}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Remember Me" />
            </Form.Group>
            <Card.Text>
            <Button variant="primary" type="submit" onClick={handleClick}>Submit</Button>
            </Card.Text>
            <Card.Text>
            <Button className="btn btn-primary" onClick = {() => history.push('/home')}>Back</Button>
            </Card.Text>
            </Form>

            </Card.Body>
            </Card>

            </Container>
        </>
);
}

export default Login;
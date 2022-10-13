import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import app from '../Firebase/Firebase.init';

const auth = getAuth(app)



const RegisterReactBootstrap = () => {
    const [checkPassword, setCheckPassword]= useState('')

    const handleSubmit = event =>{

        event.preventDefault()
        const email = event.target.email.value
        const password = event.target.password.value
    
        console.log(email, password)
    
        if(!/(?=.*[A-Z].*[A-Z])/.test(password)){
            setCheckPassword('Please type at least two uppercase letter')
            return
        }
        if(password.length<6){
            setCheckPassword('Please type at least six characters')
            return
        }
        if(!/(?=.*[!@#$&*])/.test(password)){
            setCheckPassword('Please type at least one special character')
            return
        }
        setCheckPassword('')
    
        createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {
            const user = result.user;
            console.log(user)
          })
          .catch((error) => {
            console.log('error: ',error)
          });
    }

    return (
        <div className='w-50 mx-auto mt-4'>
        <h4>Please signup with us!!</h4>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" required/>
                </Form.Group>
                <p className='text-danger'>{checkPassword}</p>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default RegisterReactBootstrap;
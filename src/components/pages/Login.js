import React from 'react'
import { Button, FormGroup, Form, Label, Input } from "reactstrap";



export default function Login(){
    return(
        <Form>
        <FormGroup>
            <Label for='email'>Email</Label>
            <Input type='email' id='email' placeholder='Email' />
        </FormGroup>
        <FormGroup>
            <Label for='password'>Password</Label>
            <Input type='password' name='password' id='password' placeholder='Password' />
        </FormGroup>
        <Button color='success'>Login</Button>
    </Form>
    )
}
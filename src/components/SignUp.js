import React from "react";
//import { BrowserRouter, Link, Route } from "react-router-dom";
import { Button, FormGroup, Form, Label, Input } from "reactstrap";

export default function SignUp() {
  return (
    <Form>
        <FormGroup>
            <Label for='name'>Name</Label>
            <Input type='name' id='name' placeholder='Name' />
        </FormGroup>
        <FormGroup>
            <Label for='email'>Email</Label>
            <Input type='email' id='email' placeholder='Email' />
        </FormGroup>
        <FormGroup>
            <Label for='password'>Password</Label>
            <Input type='password' name='password' id='password' placeholder='Password' />
        </FormGroup>
        <Button color='success'>Sign Up</Button>
    </Form>
  );
}

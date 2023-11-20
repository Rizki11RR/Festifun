import React from "react";
import { Button, Form, FormControl } from "react-bootstrap";
import './login.scss';
const Login = () => {
    return (
        <div>
            <Form>
      <Form.Group className="mb-3" controlId="loginEmail">
        <Form.Label>Alamat Email</Form.Label>
        <Form.Control type="email" placeholder="Masukkan email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="loginPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Text className="text-muted">
      Lorem ipsum dolor sit amet.
        </Form.Text>
      <Button className="btn btn-main w-100" variant="primary" type="submit">
        Submit
      </Button>
    </Form>
        </div>
    )
}

export default Login
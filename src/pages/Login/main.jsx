import React from "react";
import {Row, Col,} from "react-bootstrap";
import './login.scss';
import Loginleft from "./Components/loginleft";
import Loginright from "./Components/loginright";
const Login = () => {
    return (
        <div>
        <Row className="landing">
          <Col><Loginleft /></Col>

          <Col><Loginright /></Col>
        </Row>
        </div>
          
        
    )
}

export default Login
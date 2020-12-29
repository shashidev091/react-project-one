import { React } from "react";
import { Container, Jumbotron } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import "./Footer.scss";

const Footer = (props) => {
    return (
        <div className="footer-wrapper">
            <Card>
                <Card.Title>
                    Shashi
                </Card.Title>
            </Card>
            <Jumbotron fluid>
                <Container>
                    <h1>Fluid jumbotron</h1>
                    <p>
                       {props.children}
                    </p>
                </Container>
            </Jumbotron>
        </div>
    );
}

export default Footer;
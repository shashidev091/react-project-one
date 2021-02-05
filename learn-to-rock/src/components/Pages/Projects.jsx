import React from "react";
import './Projects.scss';
// import SvgImage from '../../assets/svgImages/undraw_happy_2021_h01d.svg'
import DeliveryImg from '../../assets/images/svgImages/undraw_deliveries_131a.svg'
import {Col, Image, Row} from "react-bootstrap";

const Projects = () => {
    return(
        <div className="vh-100 projects-container">
            <Row>
                <Col lg={6} className="left">
                    <Image src={DeliveryImg} className="img-fluid" alt="svg Image" />
                </Col>
                <Col lg={6} className="right">
                    <p>I believe in learning and implementing.</p>
                    <p>That gives me good exposure and practical knowledge to create project </p>
                </Col>
            </Row>


        </div>
    );
}

export default Projects;
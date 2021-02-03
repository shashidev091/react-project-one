import React from "react";
import {Col, Row} from "react-bootstrap";

const Footer = () => {
    return(
        <div>
            <Row>
                <Col lg={10}>
                    <Row>
                        <Col lg={3}>
                            <ul>
                                <li>facebook</li>
                                <li>twitter</li>
                                <li>instagram</li>
                            </ul>
                        </Col>
                        <Col lg={3}>
                            <ul>
                                <li>Github</li>
                                <li>LinkedIn</li>
                                <li>HackersRank</li>
                            </ul>
                        </Col>
                        <Col lg={3}>
                            <ul>
                                <li>Gallery</li>
                                <li>Resume</li>
                                <li>Company</li>
                            </ul>
                        </Col>
                        <Col lg={3}>
                            <ul>
                                <li>Gallery</li>
                                <li>Resume</li>
                                <li>Company</li>
                            </ul>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    );
}

export default Footer;
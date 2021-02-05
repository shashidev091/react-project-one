import React from "react";
import {Col, Row} from "react-bootstrap";
import './footer.scss'
import {SiFacebook, SiGithub, SiHackerrank, SiInstagram, SiLinkedin, SiPhotocrowd, SiTwitter} from 'react-icons/si';
import {CgProfile, FcGallery, ImOffice} from "react-icons/all";

const Footer = () => {
    return(
        <div className="footer-container">
            <Row>
                <Col lg={10}>
                    <Row>
                        <Col lg={4} className="footer-data">
                            <ul>
                                <li> <SiFacebook/> facebook</li>
                                <li> <SiTwitter/> twitter</li>
                                <li> <SiInstagram/> instagram</li>
                            </ul>
                        </Col>
                        <Col lg={4} className="footer-data">
                            <ul>
                                <li> <SiGithub/> Github</li>
                                <li> <SiLinkedin/> LinkedIn</li>
                                <li> <SiHackerrank/> HackersRank</li>
                            </ul>
                        </Col>
                        <Col lg={4} className="footer-data">
                            <ul>
                                <li> <SiPhotocrowd/> Gallery</li>
                                <li> <CgProfile /> Resume</li>
                                <li> <ImOffice/> Company</li>
                            </ul>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    );
}

export default Footer;
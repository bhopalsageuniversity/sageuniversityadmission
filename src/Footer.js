import React from 'react'
import './Header.css'
import { Col, Container, Row } from 'react-bootstrap'

const Footer = () => {
    return (
        <div>
            <div className='footer1'>
                <Container>
                    <Row className='row3'>
                        <Col sm={2} >
                            <img src='./img/sage-university-footer-logo.webp' className='footerimg mb-3' alt='SAGE University Bhopal (SUB)'/>
                        </Col>
                        <Col sm={10} className='borfooter'>
                            <p className='footertext1 '>SAGE UNIVERSITY</p>
                            <p className='footertext'>Bhopal Campus : Sahara Bypass Road, Katara Hills, Extension, Bhopal, Madhya Pradesh 462022</p>
                            <p className='footertext'>Bhopal : +91-7880199961</p>
                        </Col>
                    </Row>


                </Container>
            </div>
        </div>
    )
}

export default Footer

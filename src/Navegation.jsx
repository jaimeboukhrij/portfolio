import React, { useRef } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navegation({ activeSection }) {

    const text = `< JB />`
    return (
        <div className="prueba">
            <Navbar data-theme="dark">
                <Container>
                    <Navbar.Brand style={{ color: "#2C5CC7", fontWeight: "600" }}>{text}</Navbar.Brand>
                    <Nav>
                        <Nav.Link
                            style={{
                                color: activeSection === 'section1' ? 'white' : 'grey',
                                fontWeight: activeSection === 'section1' ? '600' : '0'
                            }}
                            onClick={() => window.scrollTo(0, 0)}
                        >
                            Home
                        </Nav.Link>

                        <Nav.Link
                            style={{
                                color: activeSection === 'section2' ? 'white' : 'grey',
                                fontWeight: activeSection === 'section2' ? '600' : '0'
                            }}
                            onClick={() => window.scrollTo(0, 750)}
                        >
                            About
                        </Nav.Link>

                        <Nav.Link
                            style={{
                                color: activeSection === 'section3' ? 'white' : 'grey',
                                fontWeight: activeSection === 'section3' ? '600' : '0'
                            }}
                            onClick={() => window.scrollTo(0, 1700)}
                        >
                            Projects
                        </Nav.Link>

                        <Nav.Link
                            style={{
                                color: activeSection === 'section4' ? 'white' : 'grey',
                                fontWeight: activeSection === 'section4' ? '600' : '0'
                            }}
                            onClick={() => window.scrollTo(0, 9000)}
                        >
                            Contact
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div >
    );
}

export default Navegation;

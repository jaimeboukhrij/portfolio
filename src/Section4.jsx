import { useState } from "react"
import { Row, Col } from "react-bootstrap"
import { Toast } from 'react-bootstrap'

const Section4 = () => {

    const gmail = <box-icon name='gmail' type='logo' color='#d31215' size="3em" ></box-icon>
    const git = <box-icon name='github' type='logo' color='black' size="3em" ></box-icon>
    const linkedin = <box-icon name='linkedin' type='logo' color='#4f75d7' size="3em" ></box-icon>
    const phone = <box-icon name='phone' type='solid' color='#000' size="3em" ></box-icon>

    const [showToast, setShowToast] = useState(false)



    const handleCopyToClipboard = () => {
        navigator.clipboard.writeText("+34 692559207");
        setShowToast(true)
    };

    const closeToast = () => setShowToast(false)


    return (
        <div className="section4">
            <h3>Contact</h3>
            <Row>
                <Col md={{ span: 10, offset: 1 }} className="eachone" style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around" }}>
                    <div onClick={() => window.location.href = 'mailto:jaimeboukhrijperez@gmail.com'}>{gmail}</div>
                    <div onClick={() => window.open("https://github.com/jaimeboukhrij?tab=repositories", "_blank")}>{git}</div>
                    <div onClick={() => window.open("https://www.linkedin.com/in/jaime-boukhrij/", "_blank")}>{linkedin}</div>
                    <div onClick={handleCopyToClipboard}>{phone}</div>
                </Col>
            </Row>

            <Toast bg="danger" onClose={closeToast} show={showToast} delay={3000} autohide style={{ position: 'fixed', bottom: 10, right: 10 }}>
                <Toast.Header>
                    <strong className="me-auto">"Phone number copied to clipboard"</strong>
                </Toast.Header>

            </Toast>
        </div>
    )
}

export default Section4
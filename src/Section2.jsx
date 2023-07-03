import { Button, Col, Row } from "react-bootstrap";
import download from "./assets/download.png";
import { saveAs } from "file-saver";
import 'boxicons'

const Section2 = () => {
    const reactLogo = <box-icon name='react' type='logo' animation='tada' rotate='180' color='#2bdcfe' size="80px" ></box-icon>
    const htmlLogo = <box-icon name='html5' type='logo' animation='tada' rotate='180' color='#C64128' size="80px" ></box-icon>
    const nodelogo = <box-icon type='logo' name='nodejs' animation='tada' rotate='180' color='#59A946' size="80px"></box-icon>
    const jslogo = <box-icon type='logo' name='javascript' animation='tada' rotate='180' color='#FFDF00' size="80px"></box-icon>
    const mongologo = <box-icon type='logo' name='mongodb' animation='tada' rotate='180' color='#0FA54D' size="80px"></box-icon>
    const typelogo = <box-icon type='logo' name='typescript' animation='tada' rotate='180' color='#2F74C0' size="80px"></box-icon>
    const gitlogo = <box-icon name='git' type='logo' animation='tada' rotate='180' color='#BC351C' size="80px" ></box-icon>
    const csslogo = <box-icon name='css3' type='logo' animation='tada' rotate='180' color='#2041D6' size="80px" ></box-icon>


    const handleDownload = () => {
        const pdfUrl = require("./assets/CVJaimeBoukhrij.pdf");
        saveAs(pdfUrl, "CVJaimeBoukhrij.pdf");
    };

    return (
        <section className="section2">
            <Row>
                <Col md={{ span: 4, offset: 1 }} xs={12}>
                    <h3>About Me</h3>
                    <p>
                        I´m Jaime Boukhrij, full stack web developer with excellent communication skills. I love collaborating and
                        working as a team, looking for a full-time position in web development, where I can apply my knowledge to
                        improving. <br /> <br />
                        Apart from programming, I also really enjoy sports, especially going to the gym, reading,
                        and learning more about how our universe works through astronomy books.
                        I also enjoy watching movies, especially Marvel films, or watching a Formula 1 race.
                    </p>
                    <Button onClick={handleDownload} xs={12}>
                        <img src={download} alt="" /> Download CV
                    </Button>
                </Col>

                <Col md={{ span: 5, offset: 1 }} >
                    <h3>My Skills</h3>
                    <Row>
                        <Col md={{ span: 4, offset: 0 }} xs={3} style={{ textAlign: "center", marginBottom: "6%" }} >
                            {reactLogo}
                            <h6>React</h6>
                        </Col>

                        <Col md={{ span: 4, offset: 0 }} xs={3} style={{ textAlign: "center", marginBottom: "6%" }} >
                            {nodelogo}
                            <h6>NodeJS</h6>
                        </Col>
                        <Col md={{ span: 4, offset: 0 }} xs={3} style={{ textAlign: "center", marginBottom: "6%" }} >
                            {jslogo}
                            <h6>JavaScript</h6>
                        </Col>
                        <Col md={{ span: 4, offset: 0 }} xs={3} style={{ textAlign: "center", marginBottom: "6%" }} >
                            {mongologo}
                            <h6>MongoDB</h6>
                        </Col>
                        <Col md={{ span: 4, offset: 0 }} xs={3} style={{ textAlign: "center", marginBottom: "6%" }} >
                            {typelogo}
                            <h6>TypeScript</h6>
                        </Col>
                        <Col md={{ span: 4, offset: 0 }} xs={3} style={{ textAlign: "center", marginBottom: "6%" }} >
                            {htmlLogo}
                            <h6>HTML</h6>
                        </Col>
                        <Col md={{ span: 4, offset: 0 }} xs={3} style={{ textAlign: "center", marginBottom: "6%" }} >
                            {csslogo}
                            <h6>CSS</h6>
                        </Col>
                        <Col md={{ span: 4, offset: 0 }} xs={3} style={{ textAlign: "center", marginBottom: "6%" }} >
                            {gitlogo}
                            <h6>GIT</h6>
                        </Col>
                    </Row>

                </Col>
            </Row>
        </section>
    );
};

export default Section2;

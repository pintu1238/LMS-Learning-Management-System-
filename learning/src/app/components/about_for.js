'use client';
import Link from 'next/link';
import { Col, Container, Row } from 'react-bootstrap';
import "../../../public/sass/pages/about.for.scss"


const Aboutus_for = () => {
    return (
        <>
            <section className="for_section">
                <Container>
                    <Row>
                        <Col>
                            <div className="video_text">
                                <div className="left_area">
                                    <div className="video_area">
                                        <iframe
                                            width="560"
                                            height="315"
                                            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                                            title=""
                                            frameBorder="0"
                                            allow=""
                                           
                                        ></iframe>
                                    </div>
                                </div>

                                <div className="right_area">
                                    <div className="text_area">
                                        <h1 >Learning and leading through change</h1>
                                    </div>

                                    <div className="para">
                                        <p>Chris and Vital live a world apart, but their shared passion for learning brought them together to create Project Magu — an internet-enabled school in Vital’s remote village in Rwanda.</p>
                                    </div>
                                </div>
                            </div>

                        </Col>
                    </Row>
                </Container>
            </section>

        </>
    )
}

export default Aboutus_for
'use client';
import Link from 'next/link';
import { Col, Container, Row } from 'react-bootstrap';
import "../../../public/sass/pages/about_sectiontwo.scss"


const Aboutus_sectiontwo = () => {
    return (
        <>
        <section className="sectiontwo">
            {/* <Container fluid>
                    <Row>
                        <Col> */}
                            <div className="second">
                                <p className="para">
                                    <Link href="#" className="log">
                                        Check out ore latest company news!
                                    </Link>
                                </p>
                            </div>
                        {/* </Col>
                    </Row>
                </Container> */}


                 {/* <Container>
                    <Row>
                        <Col>
                        </Col>
                    </Row>
                </Container> */}
        </section>

        </>
    )
}

export default Aboutus_sectiontwo
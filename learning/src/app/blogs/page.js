import Image from 'next/image'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import bannerImg from "../../../public/images/blogs_banner.png";
import "../../../public/sass/pages/blogs.scss";
import Link from 'next/link';
const Blogs = () => {
    return (
        <>
            <section className="blogs">
                <Container>
                    <Row>
                        <Col xxl={12} xl={12} lg={12} md={12} ms={12} xs={12}>
                            <div className="inner_blogs">
                                <div className="left">
                                    <div className="contant">
                                        <h1>Where possibilities begin</h1>
                                        <p className="contant_heading">
                                            We're a leading marketplace platform for learning and teaching online. Explore some of our most popular content and learn something new.
                                        </p>
                                    </div>
                                </div>
                                <div className="right">
                                    <div className="banner_img">
                                        <Image src={bannerImg} alt='banner_img' title='banner_img' fetchPriority='low' height={300} width={400} />
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="nav_banner">
                <Container>
                    <Row>
                        <Col>
                            <din className="innernav">
                                <nav>
                                    <ul>
                                        <li>
                                            <Link href="#">Development</Link>
                                        </li>
                                        <li>
                                            <Link href="#">IT & Software</Link>
                                        </li>
                                        <li>
                                            <Link href="#">Data Science</Link>
                                        </li>
                                        <li>
                                            <Link href="#">Soft Skills</Link>
                                        </li>
                                        <li>
                                            <Link href="#">HR and L&D</Link>
                                        </li>
                                        <li>
                                            <Link href="#">Business</Link>
                                        </li>
                                        <li>
                                            <Link href="#">Office Productivity</Link>
                                        </li>
                                        <li>
                                            <Link href="#">Marketing</Link>
                                        </li>
                                        <li>
                                            <Link href="#">Design</Link>
                                        </li>
                                        <li>
                                            <Link href="#">Career Accelerator</Link>
                                        </li>
                                    </ul>
                                </nav>
                            </din>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Blogs
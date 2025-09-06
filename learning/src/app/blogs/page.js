import Image from 'next/image'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import bannerImg from "../../../public/images/blogs_banner.png";
import "../../../public/sass/pages/blogs.scss";
import Link from 'next/link';
import DevPerson1 from "../../../public/images/dev_team_1.webp";
import NavBlog from '../components/nav_blogs';
import BannerBlogs from '../components/banner_blogs';
import DevPageBlog from '../components/dev_blogs';
import ItpageBlog from '../components/it_and_dev';
const Blogs = () => {
    return (
        <>
            <BannerBlogs />
            <NavBlog />
            <DevPageBlog />
            <ItpageBlog/>
            <section className="develop">
                <Container>
                    <Row>
                        <Col xxl={12} xl={12} lg={12} md={12} ms={12} xs={12}>
                            <div className="inner_develop">
                                <h3 className="aritcla_dev">Development Articles</h3>
                                <Row>
                                    <Col xxl={3} xl={3} lg={4} md={4} ms={6} xs={12}>
                                        <div className="card_area">
                                            {/* <p className="top_head">Development</p> */}
                                            <h3 className="heading">Job Searching with AI: The Ultimate Guide with Example Prompts</h3>
                                            <div className="lower">
                                                <div className="left">
                                                    <div className="person">
                                                        <Image src={DevPerson1} alt="dev team" title='dev team' fetchPriority='low' height={30} width={30} />
                                                    </div>
                                                </div>
                                                <div className="right">
                                                    <div className="contant">
                                                        <p>Genefa Murphy</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xxl={3} xl={3} lg={4} md={4} ms={6} xs={12}>
                                        <div className="card_area">
                                            {/* <p className="top_head">Development</p> */}
                                            <h3 className="heading">How to Become an AI Engineer</h3>
                                            <div className="lower">
                                                <div className="left">
                                                    <div className="person">
                                                        <Image src={DevPerson1} alt="dev team" title='dev team' fetchPriority='low' height={30} width={30} />
                                                    </div>
                                                </div>
                                                <div className="right">
                                                    <div className="contant">
                                                        <p>Nedko Krastev</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xxl={3} xl={3} lg={4} md={4} ms={6} xs={12}>
                                        <div className="card_area">
                                            {/* <p className="top_head">Development</p> */}
                                            <h3 className="heading">How Learners Are Future-Proofing Their Careers With AI and Cloud</h3>
                                            <div className="lower">
                                                <div className="left">
                                                    <div className="person">
                                                        <Image src={DevPerson1} alt="dev team" title='dev team' fetchPriority='low' height={30} width={30} />
                                                    </div>
                                                </div>
                                                <div className="right">
                                                    <div className="contant">
                                                        <p>James Young</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xxl={3} xl={3} lg={4} md={4} ms={6} xs={12}>
                                        <div className="card_area">
                                            {/* <p className="top_head">Development</p> */}
                                            <h3 className="heading">What Is Vibe Coding?</h3>
                                            <div className="lower">
                                                <div className="left">
                                                    <div className="person">
                                                        <Image src={DevPerson1} alt="dev team" title='dev team' fetchPriority='low' height={30} width={30} />
                                                    </div>
                                                </div>
                                                <div className="right">
                                                    <div className="contant">
                                                        <p>Carlos del Rio</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Blogs
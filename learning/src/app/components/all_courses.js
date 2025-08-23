'use client';

import React from 'react';
import Link from 'next/link';
import { Col, Container, Row } from 'react-bootstrap';
import '../../../public/sass/pages/all_courses.scss';

import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import all_courses_first from '../../../public/images/all_courses_first.jpg';

import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const All_courses = () => {
  library.add(fab, fas);
  return (
    <>
      <section className="all_courses">
        <Container>
          <Row>
            <Col>
              <div className="inner_area">
                <div className="header">
                  <h3>All the skills you need in one place</h3>
                  <p>
                    From critical skills to technical topics, Udemy supports
                    your professional development.
                  </p>
                </div>

                <nav className="tab_navigation">
                  <ul>
                    <li>
                      <Link href="#" className="tab active">
                        Data Science
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="tab">
                        IT Certifications
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="tab">
                        Leadership
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="tab">
                        Web Development
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="tab">
                        Communication
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="tab">
                        Business Analytics & Intelligence
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </Col>
          </Row>
        </Container>

        <div className="select_courses_area">
          <Container>
            <Row>
              <Col>
                <div className="inner_area_two">
                  <div className="skill_tags">
                    <Link href="#" className="skill_tag active">
                      <h3 className="skill_name">ChatGPT</h3>
                      <p className="skill_learners">4M+ learners</p>
                    </Link>

                    <Link href="#" className="skill_tag">
                      <h3 className="skill_name">Data Science</h3>
                      <p className="skill_learners">8M+ learners</p>
                    </Link>

                    <Link href="#" className="skill_tag">
                      <h3 className="skill_name">Python</h3>
                      <p className="skill_learners">49.9M+ learners</p>
                    </Link>

                    <Link href="#" className="skill_tag">
                      <h3 className="skill_name">Machine Learning</h3>
                      <p className="skill_learners">9M+ learners</p>
                    </Link>

                    <Link href="#" className="skill_tag">
                      <h3 className="skill_name">Deep Learning</h3>
                      <p className="skill_learners">2M+ learners</p>
                    </Link>

                    <Link href="#" className="skill_tag">
                      <h3 className="skill_name">
                        Artificial Intelligence (AI)
                      </h3>
                      <p className="skill_learners">4M+ learners</p>
                    </Link>

                    <Link href="#" className="skill_tag">
                      <h3 className="skill_name">Statistics</h3>
                      <p className="skill_learners">1M+ learners</p>
                    </Link>

                    <Link href="#" className="skill_tag">
                      <h3 className="skill_name">
                        Natural Language Processing
                      </h3>
                      <p className="skill_learners">859.5k+ learners</p>
                    </Link>
                  </div>

                  <div className="courses_area">
                    <Swiper
                      modules={[
                        Navigation,
                        Pagination,
                        Scrollbar,
                        A11y,
                        Autoplay,
                      ]}
                      spaceBetween={50}
                      slidesPerView={4}
                      navigation
                      pagination={{ clickable: true }}
                      scrollbar={{ draggable: true }}
                      autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                      }}
                      loop={true}
                      onSwiper={(swiper) => console.log(swiper)}
                      onSlideChange={() => console.log('slide change')}
                    >
                      <SwiperSlide>
                        <div className="course_card">
                          <div className="course_image">
                            <Image
                              src={all_courses_first}
                              alt="Full Stack Web Developer"
                              title="images"
                              width={100}
                              height={100}
                              fetchPriority="low"
                            />
                          </div>
                          <div className="course_content">
                            <h3>
                              The Complete AI Guide: Learn ChatGPT, Generative
                              AI & More
                            </h3>
                            <p>Julian Melanson, Benza Maman, Leap...</p>

                            <div className="review">
                              <ul>
                                <li>
                                  <h3>4.7</h3>
                                </li>
                                <li>
                                  <FontAwesomeIcon icon={['fas', 'star']} />
                                </li>
                                <li>
                                  <FontAwesomeIcon icon={['fas', 'star']} />
                                </li>
                                <li>
                                  <FontAwesomeIcon icon={['fas', 'star']} />
                                </li>
                                <li>
                                  <FontAwesomeIcon icon={['fas', 'star']} />
                                </li>
                                <li>
                                  <FontAwesomeIcon icon={['fas', 'star']} />
                                </li>
                                <li>
                                  <p>(111,775)</p>
                                </li>
                              </ul>
                            </div>
                            <div className="price">
                              <h3>$619</h3>
                              <p>$700</p>
                            </div>
                            <div className="s">
                              <h3>Bestseller</h3>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="course_card">
                          <div className="course_image">
                            <Image
                              src={all_courses_first}
                              alt="Full Stack Web Developer"
                              title="images"
                              width={100}
                              height={100}
                              fetchPriority="low"
                            />
                          </div>
                          <div className="course_content">
                            <h3>
                              The Complete AI Guide: Learn ChatGPT, Generative
                              AI & More
                            </h3>
                            <p>Julian Melanson, Benza Maman, Leap...</p>

                            <div className="review">
                              <ul>
                                <li>
                                  <h3>4.7</h3>
                                </li>
                                <li>
                                  <FontAwesomeIcon icon={['fas', 'star']} />
                                </li>
                                <li>
                                  <FontAwesomeIcon icon={['fas', 'star']} />
                                </li>
                                <li>
                                  <FontAwesomeIcon icon={['fas', 'star']} />
                                </li>
                                <li>
                                  <FontAwesomeIcon icon={['fas', 'star']} />
                                </li>
                                <li>
                                  <FontAwesomeIcon icon={['fas', 'star']} />
                                </li>
                                <li>
                                  <p>(111,775)</p>
                                </li>
                              </ul>
                            </div>
                            <div className="price">
                              <h3>$619</h3>
                              <p>$700</p>
                            </div>
                            <div className="s">
                              <h3>Bestseller</h3>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="course_card">
                          <div className="course_image">
                            <Image
                              src={all_courses_first}
                              alt="Full Stack Web Developer"
                              title="images"
                              width={100}
                              height={100}
                              fetchPriority="low"
                            />
                          </div>
                          <div className="course_content">
                            <h3>
                              The Complete AI Guide: Learn ChatGPT, Generative
                              AI & More
                            </h3>
                            <p>Julian Melanson, Benza Maman, Leap...</p>

                            <div className="review">
                              <ul>
                                <li>
                                  <h3>4.7</h3>
                                </li>
                                <li>
                                  <FontAwesomeIcon icon={['fas', 'star']} />
                                </li>
                                <li>
                                  <FontAwesomeIcon icon={['fas', 'star']} />
                                </li>
                                <li>
                                  <FontAwesomeIcon icon={['fas', 'star']} />
                                </li>
                                <li>
                                  <FontAwesomeIcon icon={['fas', 'star']} />
                                </li>
                                <li>
                                  <FontAwesomeIcon icon={['fas', 'star']} />
                                </li>
                                <li>
                                  <p>(111,775)</p>
                                </li>
                              </ul>
                            </div>
                            <div className="price">
                              <h3>$619</h3>
                              <p>$700</p>
                            </div>
                            <div className="s">
                              <h3>Bestseller</h3>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="course_card">
                          <div className="course_image">
                            <Image
                              src={all_courses_first}
                              alt="Full Stack Web Developer"
                              title="images"
                              width={100}
                              height={100}
                              fetchPriority="low"
                            />
                          </div>
                          <div className="course_content">
                            <h3>
                              The Complete AI Guide: Learn ChatGPT, Generative
                              AI & More
                            </h3>
                            <p>Julian Melanson, Benza Maman, Leap...</p>

                            <div className="review">
                              <ul>
                                <li>
                                  <h3>4.7</h3>
                                </li>
                                <li>
                                  <FontAwesomeIcon icon={['fas', 'star']} />
                                </li>
                                <li>
                                  <FontAwesomeIcon icon={['fas', 'star']} />
                                </li>
                                <li>
                                  <FontAwesomeIcon icon={['fas', 'star']} />
                                </li>
                                <li>
                                  <FontAwesomeIcon icon={['fas', 'star']} />
                                </li>
                                <li>
                                  <FontAwesomeIcon icon={['fas', 'star']} />
                                </li>
                                <li>
                                  <p>(111,775)</p>
                                </li>
                              </ul>
                            </div>
                            <div className="price">
                              <h3>$619</h3>
                              <p>$700</p>
                            </div>
                            <div className="s">
                              <h3>Bestseller</h3>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="course_card">
                          <div className="course_image">
                            <Image
                              src={all_courses_first}
                              alt="Full Stack Web Developer"
                              title="images"
                              width={100}
                              height={100}
                              fetchPriority="low"
                            />
                          </div>
                          <div className="course_content">
                            <h3>
                              The Complete AI Guide: Learn ChatGPT, Generative
                              AI & More
                            </h3>
                            <p>Julian Melanson, Benza Maman, Leap...</p>

                            <div className="review">
                              <ul>
                                <li>
                                  <h3>4.7</h3>
                                </li>
                                <li>
                                  <FontAwesomeIcon icon={['fas', 'star']} />
                                </li>
                                <li>
                                  <FontAwesomeIcon icon={['fas', 'star']} />
                                </li>
                                <li>
                                  <FontAwesomeIcon icon={['fas', 'star']} />
                                </li>
                                <li>
                                  <FontAwesomeIcon icon={['fas', 'star']} />
                                </li>
                                <li>
                                  <FontAwesomeIcon icon={['fas', 'star']} />
                                </li>
                                <li>
                                  <p>(111,775)</p>
                                </li>
                              </ul>
                            </div>
                            <div className="price">
                              <h3>$619</h3>
                              <p>$700</p>
                            </div>
                            <div className="s">
                              <h3>Bestseller</h3>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    </Swiper>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
    </>
  );
};

export default All_courses;

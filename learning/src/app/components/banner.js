'use client';
import Link from 'next/link';
import { Col, Container, Row } from 'react-bootstrap';
import '../../../public/sass/pages/banner.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

import React from 'react';

const Banner = () => {
  library.add(fab, fas);
  return (
    <>
      <section className="banner_section">
        <Container>
          <Row>
            <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
              <div className="inner_area">
                <div className="left_area">
                  <div className="content">
                    <div className="text_area">
                      <h3 className="heading">Always something new to learn</h3>
                      <p className="desc">
                        With courses addded regularly to our catalog you can get
                        acces to our latest skills sale drom 479 today.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="right_area">
                  <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    modules={[Autoplay]}
                    autoplay={{
                      delay: 5000,
                      disableOnInteraction: false,
                    }}
                    loop={true}
                  >
                    <SwiperSlide>
                      <div className="card_area">
                        <div className="video_area">
                          <iframe
                            width="100%"
                            height="230"
                            src="https://www.youtube.com/embed/ScMzIvxBSi4?autoplay=1&mute=1&controls=0&loop=1"
                            title="YouTube video"
                            frameBorder="0"
                            allow="autoplay; fullscreen"
                            allowFullScreen
                          ></iframe>
                        </div>

                        <div className="down_area">
                          <h3 className="heading">
                            Full Stack Web Developer Career Accelerator
                          </h3>

                          <p className="desc">
                            Your career in full stack web development starts
                            here. Fast-track learning and interview prep. Grow
                            skills at your own pace. Expand your earnings
                            potential.
                          </p>

                          <ul>
                            <li>
                              <div className="one">
                                <h3>
                                  <span className="icon_area">
                                    <FontAwesomeIcon icon={['fas', 'star']} />
                                  </span>
                                  4.7
                                </h3>
                                <p>Average course rating</p>
                              </div>
                            </li>
                            <li>
                              <div className="two">
                                <h3>
                                  126{' '}
                                  <span className="icon_area">
                                    <FontAwesomeIcon
                                      icon={['fas', 'clipboard']}
                                    />
                                  </span>
                                </h3>
                                <p>Practice Excercises*</p>
                              </div>
                            </li>
                            <li>
                              <div className="two">
                                <h3>
                                  87.8{' '}
                                  <span className="icon_area">
                                    <FontAwesomeIcon icon={['fas', 'clock']} />
                                  </span>
                                </h3>
                                <p>Hours of content</p>
                              </div>
                            </li>
                          </ul>

                          <div className="buy_area">
                            <Link href="#">Get started</Link>
                            <p className="price">$20</p>
                            <p className="cut_price">$30</p>
                          </div>

                          <div className="enroll_area">
                            <h3>
                              <span className="icon_area">
                                <FontAwesomeIcon icon={['fas', 'users']} />
                              </span>
                              1.5M learners already enrolled
                            </h3>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="card_area">
                        <div className="video_area">
                          <iframe
                            width="100%"
                            height="230"
                            src="https://www.youtube.com/embed/ScMzIvxBSi4?autoplay=1&mute=1&controls=0&loop=1"
                            title="YouTube video"
                            frameBorder="0"
                            allow="autoplay; fullscreen"
                            allowFullScreen
                          ></iframe>
                        </div>

                        <div className="down_area">
                          <h3 className="heading">
                            Digital Marketer Career Accelerator
                          </h3>

                          <p className="desc">
                            Your career in digital marketing starts here.
                            Fast-track learning and interview prep. Grow skills
                            at your own pace. Expand your earnings potential.
                          </p>

                          <ul>
                            <li>
                              <div className="one">
                                <h3>
                                  <span className="icon_area">
                                    <FontAwesomeIcon icon={['fas', 'star']} />
                                  </span>
                                  4.5
                                </h3>
                                <p>Average course rating</p>
                              </div>
                            </li>
                            <li>
                              <div className="two">
                                <h3>
                                  7
                                  <span className="icon_area">
                                    <FontAwesomeIcon
                                      icon={['fas', 'clipboard']}
                                    />
                                  </span>
                                </h3>
                                <p>Practice Excercises*</p>
                              </div>
                            </li>
                            <li>
                              <div className="two">
                                <h3>
                                  28.4
                                  <span className="icon_area">
                                    <FontAwesomeIcon icon={['fas', 'clock']} />
                                  </span>
                                </h3>
                                <p>Hours of content</p>
                              </div>
                            </li>
                          </ul>

                          <div className="buy_area">
                            <Link href="#">Get started</Link>
                            <p className="price">$10</p>
                            <p className="cut_price">$20</p>
                          </div>

                          <div className="enroll_area">
                            <h3>
                              <span className="icon_area">
                                <FontAwesomeIcon icon={['fas', 'users']} />
                              </span>
                              200k learners already enrolled
                            </h3>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="card_area">
                        <div className="video_area">
                          <iframe
                            width="100%"
                            height="230"
                            src="https://www.youtube.com/embed/ScMzIvxBSi4?autoplay=1&mute=1&controls=0&loop=1"
                            title="YouTube video"
                            frameBorder="0"
                            allow="autoplay; fullscreen"
                            allowFullScreen
                          ></iframe>
                        </div>

                        <div className="down_area">
                          <h3 className="heading">
                            Data Scientist Career Accelerator
                          </h3>

                          <p className="desc">
                            Your career in data science starts here. Fast-track
                            learning and interview prep. Grow skills at your own
                            pace. Expand your earnings potential.
                          </p>

                          <ul>
                            <li>
                              <div className="one">
                                <h3>
                                  <span className="icon_area">
                                    <FontAwesomeIcon icon={['fas', 'star']} />
                                  </span>
                                  4.6
                                </h3>
                                <p>Average course rating</p>
                              </div>
                            </li>
                            <li>
                              <div className="two">
                                <h3>
                                  432
                                  <span className="icon_area">
                                    <FontAwesomeIcon
                                      icon={['fas', 'clipboard']}
                                    />
                                  </span>
                                </h3>
                                <p>Practice Excercises*</p>
                              </div>
                            </li>
                            <li>
                              <div className="two">
                                <h3>
                                  47.1
                                  <span className="icon_area">
                                    <FontAwesomeIcon icon={['fas', 'clock']} />
                                  </span>
                                </h3>
                                <p>Hours of content</p>
                              </div>
                            </li>
                          </ul>

                          <div className="buy_area">
                            <Link href="#">Get started</Link>
                            <p className="price">$80</p>
                            <p className="cut_price">$100</p>
                          </div>

                          <div className="enroll_area">
                            <h3>
                              <span className="icon_area">
                                <FontAwesomeIcon icon={['fas', 'users']} />
                              </span>
                              1M learners already enrolled
                            </h3>
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
      </section>
    </>
  );
};

export default Banner;

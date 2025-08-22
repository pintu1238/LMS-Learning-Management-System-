"use client";
import React from "react";
import "../../../public/sass/pages/third_sec.scss";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import Card3_1 from "../../../public/images/third_sec1.webp";
import Card3_2 from "../../../public/images/third_sec2.webp";
import Card3_3 from "../../../public/images/third_sec3.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination, Scrollbar} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Third_sec = () => {
  return (
    <section className="third">
      <Container>
        <div className="inner_parent">
          <div className="content">
            <h3>Ready to reimagine your career?</h3>
            <p>
              Get the skills and real-world experience employers want with
              Career Accelerators.
            </p>
          </div>
          <Row>
            <Swiper
              modules={[Navigation, Pagination, Scrollbar]}
              spaceBetween={50}
              slidesPerView={3}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
              navigation
              pagination={{ clickable: true }}
              // scrollbar={{ draggable: true }}
            >
              <SwiperSlide>
                <div className="career_card">
                  <div className="card_image">
                    <Image
                      src={Card3_1}
                      alt="Full Stack Web Developer"
                      title="images"
                      fetchPriority="low"
                    />
                  </div>
                  <div className="card_content">
                    <h4>Full Stack Web Developer</h4>
                    <div className="rating_row">
                      <div className="star_logo badge_item">
                        <FontAwesomeIcon
                          icon={["fas", "star"]}
                          className="star_icon"
                        />
                        4.7
                      </div>
                      <p className="badge_item">455K ratings</p>
                      <p className="badge_item">87.8 total hours</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="career_card">
                  <div className="card_image">
                    <Image
                      src={Card3_2}
                      alt="Full Stack Web Developer"
                      title="images"
                      fetchPriority="low"
                    />
                  </div>
                  <div className="card_content">
                    <h4>Data Science</h4>
                    <div className="rating_row">
                      <div className="star_logo badge_item">
                        <FontAwesomeIcon
                          icon={["fas", "star"]}
                          className="star_icon"
                        />
                        4.9
                      </div>
                      <p className="badge_item">200K ratings</p>
                      <p className="badge_item">30.8 total hours</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="career_card">
                  <div className="card_image">
                    <Image
                      src={Card3_1}
                      alt="Full Stack Web Developer"
                      title="images"
                      fetchPriority="low"
                    />
                  </div>
                  <div className="card_content">
                    <h4>Full Stack Web Developer</h4>
                    <div className="rating_row">
                      <div className="star_logo badge_item">
                        <FontAwesomeIcon
                          icon={["fas", "star"]}
                          className="star_icon"
                        />
                        4.7
                      </div>
                      <p className="badge_item">455K ratings</p>
                      <p className="badge_item">87.8 total hours</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </Row>

          {/* <Col xxl={4} xl={4} lg={4} md={6} sm={6} xs={12}>
            <div className="career_card">
              <div className="card_image">
                <Image
                  src={Card3_2}
                  alt="Full Stack Web Developer"
                  title="images"
                  fetchPriority="low"
                />
              </div>
              <div className="card_content">
                <h4>Data Science</h4>
                <div className="rating_row">
                  <div className="star_logo badge_item">
                    <FontAwesomeIcon
                      icon={["fas", "star"]}
                      className="star_icon"
                    />
                    4.9
                  </div>
                  <p className="badge_item">200K ratings</p>
                  <p className="badge_item">30.8 total hours</p>
                </div>
              </div>
            </div>
          </Col> */}
        </div>
      </Container>
    </section>
  );
};

export default Third_sec;

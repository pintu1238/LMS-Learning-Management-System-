'use client';
import Link from 'next/link';
import { Col, Container, Row } from 'react-bootstrap';
import '../../../public/sass/pages/plan.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

import React from 'react';

const Plan = () => {
  library.add(fab, fas);
  return (
    <>
      <section className="plans">
        <Container>
          <Row>
            <Col>
              <div className="header">
                <h3>Accelerate growth — for you or your organization</h3>
                <p>
                  Reach goals faster with one of our plans or programs. Try one
                  free today or contact sales to learn more.
                </p>
              </div>
            </Col>
          </Row>

          <Row>
            <Col xxl={4} xl={4} lg={6} md={6} sm={6} xs={12}>
              <div className="card">
                <div className="top">
                  <h3>Personal Plan</h3>
                  <p>For you</p>
                  <div className="icon_area">
                    <FontAwesomeIcon icon={['fas', 'user-graduate']} />
                    <p>Individual</p>
                  </div>
                </div>

                <div className="bottom">
                  <h3>Starting at ₹500 per month</h3>
                  <p>Billed monthly or annually. Cancel anytime.</p>

                  <div className="subs_area">
                    <Link href="#">Start subscription</Link>
                  </div>

                  <ul>
                    <li>
                      <FontAwesomeIcon icon={['fas', 'check']} />
                      <h3>Access to 26,000+ top courses</h3>
                    </li>
                    <li>
                      <FontAwesomeIcon icon={['fas', 'check']} />
                      <h3>Access to 26,000+ top courses</h3>
                    </li>
                    <li>
                      <FontAwesomeIcon icon={['fas', 'check']} />
                      <h3>Access to 26,000+ top courses</h3>
                    </li>
                    <li>
                      <FontAwesomeIcon icon={['fas', 'check']} />
                      <h3>Access to 26,000+ top courses</h3>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col xxl={4} xl={4} lg={6} md={6} sm={6} xs={12}>
              <div className="card">
                <div className="top">
                  <h3>Team Plan</h3>
                  <p>For you</p>
                  <div className="icon_area">
                    <FontAwesomeIcon icon={['fas', 'user-graduate']} />
                    <p>Individual</p>
                  </div>
                </div>

                <div className="bottom">
                  <h3>Starting at ₹500 per month</h3>
                  <p>Billed monthly or annually. Cancel anytime.</p>

                  <div className="subs_area">
                    <Link href="#">Start subscription</Link>
                  </div>

                  <ul>
                    <li>
                      <FontAwesomeIcon icon={['fas', 'check']} />
                      <h3>Access to 13,000+ top courses</h3>
                    </li>
                    <li>
                      <FontAwesomeIcon icon={['fas', 'check']} />
                      <h3>Certification prep</h3>
                    </li>
                    <li>
                      <FontAwesomeIcon icon={['fas', 'check']} />
                      <h3>Goal-focused recommendations</h3>
                    </li>
                    <li>
                      <FontAwesomeIcon icon={['fas', 'check']} />
                      <h3>AI-powered coding exercises</h3>
                    </li>
                    <li>
                      <FontAwesomeIcon icon={['fas', 'check']} />
                      <h3>Analytics and adoption reports</h3>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>

            <Col xxl={4} xl={4} lg={6} md={6} sm={6} xs={12}>
              <div className="card">
                <div className="top">
                  <h3>Enterprise Plan</h3>
                  <p>For you</p>
                  <div className="icon_area">
                    <FontAwesomeIcon icon={['fas', 'user-graduate']} />
                    <p>Individual</p>
                  </div>
                </div>

                <div className="bottom">
                  <h3>Starting at ₹500 per month</h3>
                  <p>Billed monthly or annually. Cancel anytime.</p>

                  <div className="subs_area">
                    <Link href="#">Start subscription</Link>
                  </div>

                  <ul>
                    <li>
                      <FontAwesomeIcon icon={['fas', 'check']} />
                      <h3>Access to 30,000+ top courses</h3>
                    </li>
                    <li>
                      <FontAwesomeIcon icon={['fas', 'check']} />
                      <h3>Certification prep</h3>
                    </li>
                    <li>
                      <FontAwesomeIcon icon={['fas', 'check']} />
                      <h3>Goal-focused recommendations</h3>
                    </li>
                    <li>
                      <FontAwesomeIcon icon={['fas', 'check']} />
                      <h3>AI-powered coding exercises</h3>
                    </li>
                    <li>
                      <FontAwesomeIcon icon={['fas', 'check']} />
                      <h3>Advanced analytics and insights</h3>
                    </li>
                    <li>
                      <FontAwesomeIcon icon={['fas', 'check']} />
                      <h3>Dedicated customer success team</h3>
                    </li>
                    <li>
                      <FontAwesomeIcon icon={['fas', 'check']} />
                      <h3>
                        International course collection featuring 15 languages
                      </h3>
                    </li>
                    <li>
                      <FontAwesomeIcon icon={['fas', 'check']} />
                      <h3>Customizable content</h3>
                    </li>
                    <li>
                      <FontAwesomeIcon icon={['fas', 'check']} />
                      <h3>Hands-on tech training with add-on</h3>
                    </li>
                    <li>
                      <FontAwesomeIcon icon={['fas', 'check']} />
                      <h3>Strategic implementation services with add-on</h3>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Plan;

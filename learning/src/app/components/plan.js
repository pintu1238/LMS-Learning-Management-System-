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
            <Col></Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Plan;

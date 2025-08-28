

import React from 'react';
import "../../../public/sass/pages/skill_banner.scss";
import { Col, Container, Row } from 'react-bootstrap';
import Link from 'next/link';

const Skill_banner = () => {
  return (
    <section className="banner">
      <Container>
        <Row>
          <Col>
            <div className="inner_parent">
              <div className="content">

                {/* Breadcrumbs */}
                <div className="breadcrumbs">
                  <ul>
                    <li><Link href="#">Office Productivity</Link> &gt;</li>
                    <li><Link href="#">Other Office Productivity</Link> &gt;</li>
                    <li><Link href="#">ChatGPT</Link></li>
                  </ul>
                </div>

                {/* Course Title */}
                <h3>The Complete AI Guide: Learn ChatGPT, Generative AI & More</h3>

                {/* Subtitle */}
                <p>
                  50+ Generative AI Tools to 10x Business, Productivity, Creativity | ChatGPT, Artificial Intelligence, Prompt Engineering
                </p>

                

                {/* Creator Info */}
                <p className="creator">
                  Created by <Link href="#">Julian Melanson</Link>, <Link href="#">Benza Maman</Link>, <Link href="#">Leap Year Learning</Link>
                </p>

                {/* Footer Info */}
                <div className="footer_info">
                  <p>Last updated 8/2025</p>

                </div>

              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Skill_banner;


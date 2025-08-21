import React from 'react';
import '../../../public/sass/pages/demo.scss';
import { Col, Container, Row } from 'react-bootstrap';

import Image from 'next/image';
const Header = () => {
  return (
    <>
      <section className="header_section">
        <Container>
          <Row>
            <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
              <div className="inner_area">
                <div className="left_area">
                  <div className="image_area">
                    <Image
                      src="/images/logo.png"
                      alt="Hero Image"
                      width={120}
                      height={80}
                    />
                  </div>
                </div>
                <div className="right_area"></div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Header;

import React from 'react';
import '../../../public/sass/pages/demo.scss';
import Blog from '../components/blog';
import { Col, Container, Row } from 'react-bootstrap';

const Homepage = () => {
  return (
    <>
      <section className="banner_section">
        <Container>
          <Row>
            <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
              <div className="inner_area">
                <div className="left_area">
                  <div className="content">
                    <h3 className="heading">Always something new to learn</h3>
                    <p className="desc">
                      With courses addded regularly to our catalog you can get
                      acces to our latest skills sale drom 479 today.
                    </p>
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

export default Homepage;

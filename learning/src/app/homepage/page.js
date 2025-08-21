import React from 'react';
import "../../../public/sass/pages/demo.scss"
import Blog from '../components/blog';
import { Col, Container, Row } from 'react-bootstrap';

const Homepage = () => {
  return (
    <>
      <section className='banner_section'>
        <Container>
          <Row>
            <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
            <div className="inner_area">
              <h3>Banner section</h3>
            </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Homepage

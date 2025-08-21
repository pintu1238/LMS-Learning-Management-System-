import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Header = () => {
  return (
    <>
        <section className='header_section'>
            <Container>
            <Row>
                <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                <div className="inner_area">
                    <h3>Header section homepage </h3>
                </div>
                </Col>
            </Row>
            </Container>
        </section>
    </>
  )
}

export default Header

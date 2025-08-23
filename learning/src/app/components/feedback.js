import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../../../public/sass/pages/feedback.scss";


const Feedback = () => {
  return (
    <>
      <div className="feedback">
        <Container>
          <Row>
            <div className="inner_parent">
                <div className="content">
                    <h3>See what others are achieving through learning
</h3>

                </div>

                <Col xxl={3} xl={3} lg={3} md={4} sm={6} xs={12}>
                
                </Col>
            </div>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Feedback;

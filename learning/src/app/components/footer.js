import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import "../../../public/sass/pages/footer.scss";
import udemy_footer from "../../../public/images/udemy_logo.jpg";

const Footer = () => {
  return (
    <>
      <section className="footer">
        <Container>
          <Row>
            <Col xxl={3} xl={3} lg={3} md={6} sm={12}>
              <div className="inner_area">
                <h3>About</h3>
                <ul>
                  <li>
                    <Link href="#">About us</Link>
                  </li>
                  <li>
                    <Link href="#">Careers</Link>
                  </li>
                  <li>
                    <Link href="#">Contact us</Link>
                  </li>
                  <li>
                    <Link href="#">Blog</Link>
                  </li>
                  <li>
                    <Link href="#">Investors</Link>
                  </li>
                </ul>
              </div>
            </Col>

            <Col xxl={3} xl={3} lg={3} md={6} sm={12}>
              <div className="inner_area">
                <h3>Discover Udemy</h3>
                <ul type="none">
                  <li>
                    <Link href="#">Get the app</Link>
                  </li>
                  <li>
                    <Link href="#">Teach on Udemy</Link>
                  </li>
                  <li>
                    <Link href="#">Plans and Pricing</Link>
                  </li>
                  <li>
                    <Link href="#">Affiliate</Link>
                  </li>
                  <li>
                    <Link href="#">Help and Support</Link>
                  </li>
                </ul>
              </div>
            </Col>

            <Col xxl={3} xl={3} lg={3} md={6} sm={12}>
              <div className="inner_area">
                <h3>Udemy for Business</h3>
                <ul>
                  <li>
                    <Link href="#">Udemy Business</Link>
                  </li>
                </ul>
              </div>
            </Col>

            <Col xxl={3} xl={3} lg={3} md={6} sm={12}>
              <div className="inner_area">
                <h3>Legal & Accessibility</h3>
                <ul>
                  <li>
                    <Link href="#">Accessibility statement</Link>
                  </li>
                  <li>
                    <Link href="#">Privacy policy</Link>
                  </li>
                  <li>
                    <Link href="#">Sitemap</Link>
                  </li>
                  <li>
                    <Link href="#">Terms</Link>
                  </li>
                </ul>
              </div>
            </Col>
            <hr />

            <div className="below_footer">
              <div className="footer_img">
                <div className="footer_logo">
                  <Image
                    src={udemy_footer}
                    alt="udemy"
                    title="udemy_logo"
                    fetchPriority="high"
                    height={40}
                    width={100}
                  />
                </div>
                <p>2025 Udemy inc.</p>
              </div>
            </div>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Footer;

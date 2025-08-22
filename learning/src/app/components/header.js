import React from 'react';
import '../../../public/sass/pages/demo.scss';
// import "../../../public/sass/pages/header.scss";
// import '../../public/sass/pages/header.scss';
import { Col, Container, Row } from 'react-bootstrap';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
// import { far } from '@fortawesome/free-brands-svg-icons';
const Header = () => {
  library.add(fab, fas);
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
                      alt="Logo"
                      width={120}
                      height={50}
                    />
                  </div>

                  <nav>
                    <Link href="#">Explore</Link>
                  </nav>

                  <div className="search_box">
                    <FontAwesomeIcon icon={['fab', 'searchengin']} />
                    <input type="text" placeholder="Search for anything" />
                  </div>
                </div>

                <div className="right_area">
                  <div className="cart_area">
                    <Link href="#">
                      <FontAwesomeIcon
                        icon={['fas', 'cart-plus']}
                        className="cart_logo"
                      />
                    </Link>
                  </div>
                  <nav className="plans_area">
                    <Link href="#">Plans & Pricing</Link>
                  </nav>

                  <div className="menu_area">
                    <FontAwesomeIcon
                      icon={['fas', 'bars']}
                      className="three_lines"
                    />
                  </div>
                  <ul className="auth_links">
                    <li>
                      <Link href="#">Log in</Link>
                    </li>
                    <li>
                      <Link href="#">Sign up</Link>
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

export default Header;

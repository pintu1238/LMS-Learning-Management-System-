import React from 'react';
import '../../../public/sass/pages/demo.scss';
import Blog from '../components/blog';
import { Col, Container, Row } from 'react-bootstrap';
import Career_sectiontwo from '../components/career_sectiontwo';
import Career_banner from '../components/career_banner';
// import Aboutus_sectiontwo from '../components/about_sectiontwo';
const Homepage = () => {
  return (
    <>
      <Career_banner />
      <Career_sectiontwo />
      {/* <Aboutus_sectiontwo/> */}
    </>
  );
};

export default Homepage;

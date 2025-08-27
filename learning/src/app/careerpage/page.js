import React from 'react';
import '../../../public/sass/pages/demo.scss';
import Blog from '../components/blog';
import { Col, Container, Row } from 'react-bootstrap';
import Career_sectiontwo from '../components/career_sectiontwo';
import Career_banner from '../components/career_banner';
const Homepage = () => {
  return (
    <>
      <Career_banner />
      <Career_sectiontwo />
    </>
  );
};

export default Homepage;

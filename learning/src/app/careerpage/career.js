import React from 'react';
import '../../../public/sass/pages/demo.scss';
import Blog from '../components/blog';
import { Col, Container, Row } from 'react-bootstrap';
import Career_sectiontwo from '../components/career_sectiontwo';
import Career_banner from '../components/career_banner';
<<<<<<< Updated upstream
// import Aboutus_sectiontwo from '../components/about_sectiontwo';
=======
import Career_sectionthree from '../components/career_sectionthree';
import Career_sectionfour from '../components/career_sectionfour';
>>>>>>> Stashed changes
const Homepage = () => {
  return (
    <>
      <Career_banner />
      <Career_sectiontwo />
<<<<<<< Updated upstream
      {/* <Aboutus_sectiontwo/> */}
=======
      <Career_sectionthree />
      <Career_sectionfour />
>>>>>>> Stashed changes
    </>
  );
};

export default Homepage;

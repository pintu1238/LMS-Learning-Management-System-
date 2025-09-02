// import React from "react";
// import "../../../public/sass/pages/skillpage_paid.scss";
// import { Col, Container, Row } from "react-bootstrap";
// import Link from "next/link";

// const Skillpage_paid = () => {
//   return (
//     <>
//     <section className="paid_section">
//       <Container>
//         <Row>
//           <Col>
//             <div className="inner_parent">
//               <div className="video_section">
//                 <h3>Data Science: Python for Data Analysis Full Bootcamp</h3>
//                 <div className="left">
//                   <div className="video_area"></div>
//                 </div>
//                 <div className="right"></div>
//               </div>
//             </div>
//           </Col>
//         </Row>
//       </Container>
//       </section>
//     </>
//   );
// };

// export default Skillpage_paid;



"use client";
import React, { useState } from "react";
import "../../../public/sass/pages/skillpage_paid.scss";
import { Col, Container, Row } from "react-bootstrap";

// Example mock data
const courseData = {
  title: "Data Science: Python for Data Analysis 2022 Full Bootcamp",
  videoUrl: "https://www.youtube.com/embed/rfscVS0vtbw", // sample video
  sections: [
    {
      title: "Section 1: Mastering Python, Data Handling",
      lectures: [
        { title: "Intro to Python", video: "https://www.youtube.com/embed/rfscVS0vtbw" },
        { title: "Installing Python", video: "https://www.youtube.com/embed/YYXdXT2l-Gg" },
      ],
    },
    {
      title: "Section 2: Data Structures",
      lectures: [
        { title: "Lists and Tuples", video: "https://www.youtube.com/embed/W8KRzm-HUcc" },
        { title: "Dictionaries in Python", video: "https://www.youtube.com/embed/daefaLgNkw0" },
      ],
    },
  ],
};

const Skillpage_paid = () => {
  const [currentVideo, setCurrentVideo] = useState(courseData.videoUrl);
  const [activeSection, setActiveSection] = useState(null);

  return (
    <>
      <section className="paid_section">
        <Container fluid>
          <Row>
            <Col>
              <div className="inner_parent">
                <div className="video_section">
                  <h3>{courseData.title}</h3>
                  <div className="content_row">
                    {/* Left side - Video Player */}
                    <div className="left">
                      <div className="video_area">
                        <iframe
                          src={currentVideo}
                          frameBorder="0"
                          allowFullScreen
                          title="Video Player"
                        ></iframe>
                      </div>
                    </div>

                    {/* Right side - Accordion */}
                    <div className="right">
                      <h4>Course Content</h4>
                      {courseData.sections.map((section, index) => (
                        <div key={index} className="accordion-item">
                          <div
                            className="accordion-header"
                            onClick={() =>
                              setActiveSection(activeSection === index ? null : index)
                            }
                          >
                            {section.title}
                          </div>
                          {activeSection === index && (
                            <ul className="lecture-list">
                              {section.lectures.map((lecture, idx) => (
                                <li
                                  key={idx}
                                  onClick={() => setCurrentVideo(lecture.video)}
                                >
                                  {lecture.title}
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Skillpage_paid;

"use client";
import React, { useState } from "react";

import "../../../public/sass/pages/skill_content.scss";
import { Col, Container, Row } from "react-bootstrap";

const Skill_content = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => setShowMore(!showMore);

  return (
    <section className="learn_section">
      <Container>
        <Row>
          <Col>
            <div className="inner_parent">
              <div className="learn_box">
                <h3>What You will learn</h3>
                <div className="learn_list">
                  <ul>
                    <li>
                      Generative AI: Create content, synthesize information, and
                      learn faster than ever with effective prompt engineering!
                    </li>
                    <li>
                      Productivity: Achieve goals faster with artificial
                      intelligence, manage time, prioritize tasks, and create an
                      optimized daily schedule!
                    </li>
                    <li>
                      Soft Skills: Improve your communication, leadership,
                      problem-solving, and social skills with personalized
                      ChatGPT feedback!
                    </li>

                    {showMore && (
                      <>
                        <li>
                          AI Video Tools: Create an AI avatar that transforms
                          scripts into presentations and quickly generate social
                          media content!
                        </li>
                        <li>
                          AI Writing Tools: Automate writing tasks, generate
                          effective copy, and integrate with Google
                          Sheets/Excel!
                        </li>
                        <li>
                          Branding: Develop a visual identity, design logos, and
                          generate content to establish a strong online
                          presence!
                        </li>
                        <li>
                          Business: Streamline your AI workflow, automate
                          repetitive tasks, and gain insights for your business!
                        </li>
                        <li>
                          Midjourney: Use prompts, parameters, and modifiers to
                          create amazing images that showcase your creativity!
                        </li>
                        <li>
                          Custom GPTs & AI Assistants: Build and optimize your
                          workflows, tailoring AI to your needs!
                        </li>
                      </>
                    )}
                  </ul>

                  <ul>
                    <li>
                      ChatGPT: Turn your creativity into paid work, generate
                      fresh ideas, reach new audiences, and scale your projects!
                    </li>
                    <li>
                      Marketing: Generate targeted content with generative AI,
                      capitalize on trends, create ads, newsletters, specialized
                      content, and media campaigns!
                    </li>
                    <li>
                      AI Voice Tools: Easily create AI-generated speech for any
                      use case and even clone your own voice entirely!
                    </li>

                    {showMore && (
                      <>
                        <li>
                          AI Photo Tools: Add motion to images, dynamically
                          enhance image aesthetics, and create custom images in
                          bulk!
                        </li>
                        <li>
                          AI Music Tools: Create unique compositions for any
                          type of video and save time with a streamlined
                          creative process.
                        </li>
                        <li>
                          AI Art Generation: Create photos from prompts, fill in
                          or remove elements using inpainting and outpainting
                          techniques!
                        </li>
                        <li>
                          Multimodal: Combine multiple AI tools to create
                          immersive content that would previously take a team!
                        </li>
                        <li>
                          Coding: Combine the power of ChatGPT with programming
                          fundamentals, algorithms, debugging, and
                          documentation!
                        </li>
                        <li>
                          AI Automation: Automate tasks with Zapier, Make, and
                          OpenAI APIs, integrating AI efficiently and scalably!
                        </li>
                      </>
                    )}
                  </ul>
                </div>

                <div className="show_more">
                  <a onClick={toggleShowMore} role="button">
                    {showMore ? "Show less" : "Show more"}{" "}
                    <span>{showMore ? "▲" : "▼"}</span>
                  </a>
                </div>
              </div>

              <div className="course_info_section">
                <div className="related_topics">
                  <h4>Explore related topics</h4>
                  <div className="tags">
                    <span>ChatGPT</span>
                    <span>Other Office Productivity</span>
                    <span>Office Productivity</span>
                  </div>
                </div>

                <div className="course_includes">
                  <h4>This course includes:</h4>
                  <div className="includes_grid">
                    <ul>
                      <li>👤 Role Play</li>
                      <li>💻 39.5 hours on-demand video</li>
                      <li>📄 22 articles</li>
                      <li>📥 141 downloadable resources</li>
                    </ul>
                    <ul>
                      <li>📱 Access on mobile and TV</li>
                      <li>💬 Closed captions</li>
                      <li>🎧 Audio description in existing audio</li>
                      <li>🏆 Certificate of completion</li>
                    </ul>
                  </div>
                </div>
              </div>


              
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Skill_content;

// import React, { useState } from "react";
// import "../../../public/sass/pages/skill_content.scss";
// import { Col, Container, Row } from "react-bootstrap";
// import Link from "next/link";
// // import { FaUser } from 'react-icons/fa';
// // import { BsPatchCheck } from 'react-icons/bs';

// const Skill_content = () => {
//   const [showMore, setShowMore] = useState(false);

//   const toggleShowMore = () => setShowMore(!showMore);
//   return (
//     <>
//       <section className="learn_section">
//         <Container>
//           <Row>
//             <Col>
//               <div className="inner_parent">
//                 <div className="learn_box">
//                   <h3>What you'll learn</h3>
//                   <div className="learn_list">
//                     <ul>
//                       <li>
//                         Generative AI: Create content, synthesize information,
//                         and learn faster than ever with effective prompt
//                         engineering!
//                       </li>
//                       <li>
//                         Productivity: Achieve goals faster with artificial
//                         intelligence, manage time, prioritize tasks, and create
//                         an optimized daily schedule!
//                       </li>
//                       <li>
//                         Soft Skills: Improve your communication, leadership,
//                         problem-solving, and social skills with personalized
//                         ChatGPT feedback!
//                       </li>
//                     </ul>
//                     <ul>
//                       <li>
//                         ChatGPT: Turn your creativity into paid work, generate
//                         fresh ideas, reach new audiences, and scale your
//                         projects!
//                       </li>
//                       <li>
//                         Marketing: Generate targeted content with generative AI,
//                         capitalize on trends, create ads, newsletters,
//                         specialized content, and media campaigns!
//                       </li>
//                       <li>
//                         AI Voice Tools: Easily create AI-generated speech for
//                         any use case and even clone your own voice entirely!
//                       </li>
//                     </ul>
//                   </div>
//                   <div className="show_more">
//                     <a href="#">Show more</a>
//                   </div>
//                 </div>
//               </div>
//             </Col>
//           </Row>
//         </Container>
//       </section>
//     </>
//   );
// };

// export default Skill_content;

// import React from 'react';
// import "../../../public/sass/pages/skill_content.scss";
// import { Col, Container, Row } from 'react-bootstrap';
// import Link from 'next/link';
// // import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// // import { library } from "@fortawesome/fontawesome-svg-core";

// // import {
// //   faChevronRight,
// //   faCartPlus,
// //   faBars,
// // } from "@fortawesome/free-solid-svg-icons";
// // import { faSearchengin } from "@fortawesome/free-brands-svg-icons";

// // Add specific icons to the library
// // library.add(faChevronRight, faCartPlus, faBars, faSearchengin);

// const Skill_content = () => {
//   return (
//     <>
//       <section className="learn_section">
//         <Container>
//           <Row>
//             <Col>
//             <div className="inner_parent">
//               <div className="box">

//               </div>
//             </div>

//             </Col>
//           </Row>
//         </Container>
//       </section>
//     </>
//   );
// };

// export default Skill_content;

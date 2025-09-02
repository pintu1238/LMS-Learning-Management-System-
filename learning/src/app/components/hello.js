"use client";
import React, { useState } from "react";
import "../../../public/sass/pages/hello.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core'
import { far } from "@fortawesome/free-regular-svg-icons";
import { Col, Container, Row } from "react-bootstrap";
import Link from "next/link";

export default function CoursePlayer() {
    const [activeTab, setActiveTab] = useState("overview");
    library.add(far);

    return (
        <section className="area">
            <Container>
                <Row>
                    <Col>
                        <div className="course-player">
                            <div className="tabs">
                                {["overview", "notes", "announcements", "reviews", "tools"].map((tab) => (
                                    <button
                                        key={tab}
                                        className={activeTab === tab ? "active" : ""}
                                        onClick={() => setActiveTab(tab)}
                                    >
                                        {tab.toUpperCase()}
                                    </button>
                                ))}
                            </div>

                            <div className="tab-content">
                                {activeTab === "overview" && <div className="overview">
                                    <h3 className="learn">Learn web design in 1 hour with 25+ simple-to-use rules and guidelines — tons of amazing web design resources included!</h3>
                                    <ul typw="none">
                                        <li>
                                            <span> 4.5 </span>
                                            <p>44,384 ratings</p>
                                        </li>
                                        <li>
                                            <span> 810,776 </span>
                                            <p>Students</p>
                                        </li>
                                        <li>
                                            <span> 2.5 hours</span>
                                            <p>Total</p>
                                        </li>
                                    </ul>
                                    <div className="area">
                                        <div className="row_Area">
                                            <FontAwesomeIcon icon={["far", "clock"]} className="icon" />
                                            <p>Last updated November 2024</p>
                                        </div>
                                        <div className="row_Area">
                                            <FontAwesomeIcon icon={["fas", "globe"]} className="icon" />
                                            <p>Last updated November 2024</p>
                                        </div>
                                    </div>
                                    <div className="card_area">
                                        <div className="card_left">
                                            <FontAwesomeIcon icon={["far", "clock"]} className="clockIcon" />
                                        </div>
                                        <div className="card_right">
                                            <div className="contant_area">
                                                <h3 className="learning">Schedule learning time</h3>
                                                <p className="p_learning">Learning a little each day adds up. Research shows that students who make learning a habit are more likely to reach their goals. Set time aside to learn and get reminders using your learning scheduler.</p>
                                                <ul type="none">
                                                    <li>
                                                        <Link href="#">Get Started</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="#">Dismiss</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>}
                                {activeTab === "notes" && <p>Notes ka content yaha dikhayega.</p>}
                                {activeTab === "announcements" && <p>Announcements ka content yaha dikhayega.</p>}
                                {activeTab === "reviews" && <p>Reviews ka content yaha dikhayega.</p>}
                                {activeTab === "tools" && <p>Learning Tools ka content yaha dikhayega.</p>}
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

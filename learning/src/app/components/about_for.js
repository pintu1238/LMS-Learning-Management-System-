'use client';
import Link from 'next/link';
import { Col, Container, Row } from 'react-bootstrap';
import "../../../public/sass/pages/about.for.scss"
import { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Aboutus_for = () => {
    return (
        <>
            <section className="for_section">
                <Container>
                    <Row>
                        <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>

                            <Swiper
                                modules={[Navigation, Pagination, Scrollbar, Autoplay]}
                                slidesPerView={1}
                                loop={true}
                                autoplay={{
                                    delay: 3000,
                                    disableOnInteraction: false,
                                }}

                                breakpoints={{
                                    // Smaller phones
                                    320: { slidesPerView: 1, spaceBetween: 10 },

                                    // 361px - 575px
                                    361: { slidesPerView: 1, spaceBetween: 15 },

                                    // 576px - 767px
                                    576: { slidesPerView: 2, spaceBetween: 20 },

                                    // 768px - 991px (tablets)
                                    768: { slidesPerView: 2, spaceBetween: 20 },

                                    // 992px - 1199px (medium desktops)
                                    992: { slidesPerView: 3, spaceBetween: 25 },

                                    // 1200px - 1299px
                                    1200: { slidesPerView: 3, spaceBetween: 25 },
                                    

                                    // 1300px - 1399px
                                    1300: { slidesPerView: 3 , spaceBetween: 30 },

                                    // 1400px - 1599px
                                    1400: { slidesPerView: 2, spaceBetween: 30 },

                                    // 1600px - 1679px
                                    1600: { slidesPerView: 3, spaceBetween: 35 },

                                    // 1680px - 1919px
                                    1680: { slidesPerView: 3, spaceBetween: 35 },

                                    // 1920px and above
                                    1920: { slidesPerView: 3, spaceBetween: 40 },
                                }}
                                // navigation={true}
                                scrollbar={{ draggable: true }}
                                pagination={{ clickable: true }}
                                onSwiper={(swiper) => console.log(swiper)}
                                onSlideChange={() => console.log('slide change')}
                            >

                                <SwiperSlide className="slide1">

                                    <div className="video_text">
                                        <div className="left_area">
                                            <div className="video_area">
                                                <iframe
                                                    width="560"
                                                    height="315"
                                                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                                                    title=""
                                                    frameBorder="0"
                                                    allow=""

                                                ></iframe>
                                            </div>
                                        </div>

                                        <div className="right_area">
                                            <div className="text_area">
                                                <h1 >Learning and leading through change</h1>
                                            </div>

                                            <div className="para">
                                                <p>Chris and Vital live a world apart, but their shared passion for learning brought them together to create Project Magu — an internet-enabled school in Vital’s remote village in Rwanda.</p>
                                            </div>
                                        </div>
                                    </div>


                                </SwiperSlide>

                                <SwiperSlide className="slide1">

                                    <div className="video_text">
                                        <div className="left_area">
                                            <div className="video_area">
                                                <iframe
                                                    width="560"
                                                    height="315"
                                                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                                                    title=""
                                                    frameBorder="0"
                                                    allow=""

                                                ></iframe>
                                            </div>
                                        </div>

                                        <div className="right_area">
                                            <div className="text_area">
                                                <h1 >Learning and leading through change</h1>
                                            </div>

                                            <div className="para">
                                                <p>Chris and Vital live a world apart, but their shared passion for learning brought them together to create Project Magu — an internet-enabled school in Vital’s remote village in Rwanda.</p>
                                            </div>
                                        </div>
                                    </div>


                                </SwiperSlide>

                                <SwiperSlide className="slide1">

                                    <div className="video_text">
                                        <div className="left_area">
                                            <div className="video_area">
                                                <iframe
                                                    width="560"
                                                    height="315"
                                                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                                                    title=""
                                                    frameBorder="0"
                                                    allow=""

                                                ></iframe>
                                            </div>
                                        </div>

                                        <div className="right_area">
                                            <div className="text_area">
                                                <h1 >Learning and leading through change</h1>
                                            </div>

                                            <div className="para">
                                                <p>Chris and Vital live a world apart, but their shared passion for learning brought them together to create Project Magu — an internet-enabled school in Vital’s remote village in Rwanda.</p>
                                            </div>
                                        </div>
                                    </div>


                                </SwiperSlide>
                                <SwiperSlide className="slide1">

                                    <div className="video_text">
                                        <div className="left_area">
                                            <div className="video_area">
                                                <iframe
                                                    width="560"
                                                    height="315"
                                                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                                                    title=""
                                                    frameBorder="0"
                                                    allow=""

                                                ></iframe>
                                            </div>
                                        </div>

                                        <div className="right_area">
                                            <div className="text_area">
                                                <h1 >Learning and leading through change</h1>
                                            </div>

                                            <div className="para">
                                                <p>Chris and Vital live a world apart, but their shared passion for learning brought them together to create Project Magu — an internet-enabled school in Vital’s remote village in Rwanda.</p>
                                            </div>
                                        </div>
                                    </div>


                                </SwiperSlide>
                            </Swiper>




                        </Col>
                    </Row>
                </Container>
            </section>

        </>
    )
}

export default Aboutus_for
import React from "react";
import "./testimonial.css";
import { Container, Row, Col } from "reactstrap";
import Slider from "react-slick";

import img from "../../assests/images/testimonial01.png";

const Testimonials = () => {
  const settings = {
    infinite: true,
    dots: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToScroll: 1,
  };
  return (
    <section>
      <Container>
        <Row>
          <Col lg="10" md="12" className="m-auto">
            <div className="testimonial__wrapper d-flex justify-content-between align-items-center ">
              <div className="testimonial__img w-50">
                <img src={img} alt="" className="w-100" />
              </div>

              <div className="testimonial__content w-50">
                <h2 className="mb-4">Our Students Voice</h2>

                <Slider {...settings}>
                  <div>
                    <div className="single__testimonial">
                      <h6 className="mb-3 fw-bold">
                        Excellent course of materials
                      </h6>
                      <p>
                      Choose our e-learning platform for an exceptional educational 
                      experience supported by top-notch course materials. Our cutting-edge technology 
                      ensures fast and seamless access to a vast array of courses, designed to meet diverse learning needs!!
                      </p>

                      <div className="student__info mt-4">
                        <h6 className="fw-bold">Yugadharshinni</h6>
                        <p>Meepe, Padukka</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="single__testimonial">
                      <h6 className="mb-3 fw-bold">
                        Excellent course of materials
                      </h6>
                      <p>
                      Our expertly curated content, created by industry professionals, guarantees you receive the 
                      highest quality education. With an intuitive and user-friendly interface, navigating through our 
                      extensive course offerings is effortless!!
                      </p>

                      <div className="student__info mt-4">
                        <h6 className="fw-bold">Riznee</h6>
                        <p>Colombo</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="single__testimonial">
                      <h6 className="mb-3 fw-bold">
                        Excellent course of materials
                      </h6>
                      <p>
                      Plus, you’ll earn recognized certifications upon completion, enhancing your career prospects. 
                      Join us for a superior learning journey backed by excellent course materials and 24/7 support!!
                      </p>

                      <div className="student__info mt-4">
                        <h6 className="fw-bold">Thiru</h6>
                        <p>Nuwereliya</p>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;

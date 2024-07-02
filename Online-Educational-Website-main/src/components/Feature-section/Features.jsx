import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./features.css";

const FeatureData = [
  {
    title: "Quick Learning",
    desc: "Choose our e-learning platform for a fast and efficient learning experience. Our state-of-the-art technology ensures quick access and smooth performance, ",







    icon: "ri-draft-line",
  },

  {
    title: "All Time Support",
    desc: "Choose our e-learning platform for a seamless educational experience backed by round-the-clock support. Our cutting-edge technology ensures quick.",
    icon: "ri-discuss-line",
  },

  {
    title: "Certification",
    desc: "Choose our e-learning platform for a comprehensive and rewarding educational experience. Our state-of-the-art technology provides fast.",
    icon: "ri-contacts-book-line",
  },
];

const Features = () => {
  return (
    <section>
      <Container>
        <Row>
          {FeatureData.map((item, index) => (
            <Col lg="4" md="6" key={index}>
              <div className="single__feature text-center px-4">
                <h2 className="mb-3">
                  <i class={item.icon}></i>
                </h2>
                <h6>{item.title}</h6>
                <p>{item.desc}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Features;

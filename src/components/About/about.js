import React from "react";
import Headshot from "../../assets/headshot/headshot.jpg"
import { Container, Row, Col, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function About() {
  return (
    <section id="about-me" className="about-me">
      <Container>
        <Row>
        <Col xs={6}>
      <div className="bio">
        <h2>About Me</h2>
        <p>Welcome! My name is Krista McPherson.</p>
        <p>
          Full Stack Web Developer with an extensive background in social media
          marketing and digital strategy looking to combine two unique but
          complementary skill sets to create a seamless, efficient user and team
          experience. These two backgrounds give me a special perspective on the
          user experience from both the front-end and back-end which can be
          utilized to move customers down the purchase funnel towards
          conversions. I have a Certificate in Social Media Marketing from
          Scottsdale Community College, a B.S. in Communications with a minor in
          Digital Audiences from Arizona State University, and a Certificate in
          Full-Stack Development from the University of Arizona Coding Bootcamp.
          These accreditations have sharpened my time management, collaboration,
          and effective communication skills all while learning the platforms,
          software, and languages needed to run social campaigns and build
          applications. I have a passion for content creation and can find
          numerous ways of connecting with your audience either by social media,
          website, or app.
        </p>
      </div>
      </Col>
      <Col>
      <div className="headshot">
        <Image  width={500}
    height={500} src={Headshot} rounded alt="" />
      </div>
      </Col>
      </Row>
      </Container>
    </section>
  );
}

export default About;

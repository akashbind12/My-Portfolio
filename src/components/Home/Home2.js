import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ImPointRight } from "react-icons/im";
import Card from "react-bootstrap/Card";


import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";

import Aos from "aos";
import "aos/dist/aos.css";
import { FaLinkedinIn } from "react-icons/fa";
import TransitionsModal from "../Modal/ContactModal.jsx";
import About from "../About/About.js";
import Projects from "../Projects/Projects.js";
// import Techstack from "../About/Techstack.js";
// import Toolstack from "../About/Toolstack.js";
// import Github from "../About/Github.js";
function Home2() {
  useEffect(() => {
    Aos.init({ duration: 1200 });
  });

  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }

  return (
    <Container fluid className="home-about-section" id="about">
      <Container fluid>
        <Row>
          <Col md={8} className="home-about-description" data-aos="fade-right">
            <h1 style={{ fontSize: "2.6em" }}>
              ABOUT ME
            </h1>
            <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple"> Akash Bind </span>
            from <span className="purple"> Navi Mumbai, Maharashtra, India.</span>
            {/* <br /> I have completed my graduation in Electronics Engineering. */}<br/><br />
            A highly dedicated and passionate full-stack web developer with excellent administrative and communication skills and the ability to write efficient code.
            Looking forward to an exciting opportunity in a challenging role as a full-stack developer
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Sketching
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Video Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Akash</footer>
        </blockquote>
      </Card.Body>
    </Card>
          </Col>
          <Col
            md={4}
            className="myAvtar"
            data-aos="fade-down"
            style={{ marginTop: "-32px" }}
          >
            <Tilt>
              <img
                src="https://qtcinfotech.com/images/web-development/cms-website-development-service.gif"
                className="img-fluid"
                alt="avatar"
              />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col lg={12} md={12}>
            <About />
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <Projects />
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social" data-aos="fade-up">
            <h1>FIND ME ON</h1>
            <div style={{display: 'grid', marginLeft: 'auto', marginRight:'auto', width:'300px', gridTemplateColumns:'30% 30% 30%'}}>
              <div>
                <a onClick={() => openInNewTab("https://github.com/akashbind12")}
                   style={{ textDecoration: 'none', color: 'white', cursor : "pointer" }}> <AiFillGithub style={{ height: '40px', width: '40px' }} /> </a>
              </div>
              <div>
                <a  style={{textDecoration: 'none', color:'white', cursor : "pointer" }}><AiOutlineTwitter style={{height: '40px', width: '40px'}} /></a>
              </div>
              <div>
                <a onClick={() => openInNewTab("https://www.linkedin.com/in/akashbind12/")}
                   style={{ textDecoration: 'none', color: 'white', cursor : "pointer"  }}><FaLinkedinIn style={{ height: '40px', width: '40px' }} /></a>
              </div>
          </div>
          <br/>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            
            
            <h3>
              Contact No:
              <p
                href="tel:+7039746800"
                style={{
                  color: "#f0195a",
                }}
              >
                +917039746800
              </p>
            </h3>
            
            <h3>
              Email:
              <p
                href="tel:+7039746800"
                style={{
                  color: "#f0195a",
                }}
              >
                akashbind12@gmail.com
              </p>
            </h3>
            <br /> <br />
            <TransitionsModal />
          </Col>
        </Row>
      </Container>
    </Container>
    
  );
}
export default Home2;
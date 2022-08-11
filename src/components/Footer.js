import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {

  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }

  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Made by Akash Bind with ❤️</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3> </h3>
        </Col>
        <Col md="4" className="footer-body">
         <div style={{display: 'grid', marginLeft: 'auto',  width:'200px', gridTemplateColumns:'30% 30% 30%'}}>
              <div>
              <a onClick={() => openInNewTab("https://github.com/akashbind12")}
                 style={{textDecoration: 'none', color:'white', cursor : "pointer"}}> <AiFillGithub style={{height: '20px', width: '20px'}} /> </a>
              </div>
              <div>
                <a  style={{textDecoration: 'none', color:'white'}}><AiOutlineTwitter style={{height: '20px', width: '20px'}} /></a>
              </div>
              <div>
              <a onClick={() => openInNewTab("https://www.linkedin.com/in/akashbind12/")}
                 style={{ textDecoration: 'none', color: 'white', cursor : "pointer" }}><FaLinkedinIn style={{ height: '20px', width: '20px' }} /></a>
              </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
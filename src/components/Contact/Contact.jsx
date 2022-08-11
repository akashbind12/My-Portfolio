import React from 'react'
import TransitionsModal from '../Modal/ContactModal'
import { Container, Row, Col } from "react-bootstrap";
import Particle from '../Particle';
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";


export const Contact = () => {

  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }

    return (
        <div>
            <Container fluid className="contact-section">
                <Particle />
                <Container fluid>
             <h1>FIND ME ON</h1>
             <br />
             <div style={{display: 'grid', marginLeft: 'auto', marginRight:'auto', width:'300px', gridTemplateColumns:'30% 30% 30%'}}>
              <div>
                <a onClick={() => openInNewTab("https://github.com/akashbind12")}
                   style={{ textDecoration: 'none', color: 'white', cursor : "pointer" }}> <AiFillGithub style={{ height: '40px', width: '40px' }} /> </a>
              </div>
              <div>
                <a href="" style={{textDecoration: 'none', color:'white', cursor : "pointer" }}><AiOutlineTwitter style={{height: '40px', width: '40px'}} /></a>
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
            </Container>
            </Container>
        </div>
    )
}

import React from "react";
import { Col, Row } from "react-bootstrap";
import { AiOutlineHtml5 } from "react-icons/ai";
import { SiExpress,SiRedux } from "react-icons/si";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiCss3,
  DiGit,
} from "react-icons/di";
import { SiPytorch, SiTensorflow, SiFirebase } from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <AiOutlineHtml5 />
        <p style={{fontSize:"20px", marginTop: "10px" }}>HTML</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
        <p style={{fontSize:"20px", marginTop: "10px" }}>CSS</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <p style={{fontSize:"20px", marginTop: "10px" }}>JAVASCRIPT</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <p style={{fontSize:"20px", marginTop: "10px" }}>NODE JS</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiExpress />
        <p style={{fontSize:"20px", marginTop: "10px" }}>EXPRESS JS</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <p style={{fontSize:"20px", marginTop: "10px" }}>REACT</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedux />
        <p style={{fontSize:"20px", marginTop: "10px" }}>REDUX</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
        <p style={{fontSize:"20px", marginTop: "10px" }}>MONGODB</p>
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <p style={{fontSize:"20px", marginTop: "10px" }}>GIT</p>
      </Col>
    </Row>
  );
}

export default Techstack;
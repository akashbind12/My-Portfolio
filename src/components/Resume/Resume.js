import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import axios from "axios";
import pdf from "../../Assets/Akash_Bind_Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import Aos from "aos";
import "aos/dist/aos.css";
function Resume() {
  const uri = "https://porfolio-backend.vercel.app/ranks/getRanks";
  const [spojRank, upadteSpojRank] = useState(0);
  const [hackerrank, upadteHackerank] = useState(0);
  const [sem, upadateSem] = useState(0);
  const [cgpa, upadteCgpa] = useState(0);

  useEffect(() => {
    axios
      .get(uri)
      .then((res) => {
        upadteSpojRank(res.data.message[0].spojRank);
        upadteHackerank(res.data.message[1].hackerrank);
        upadteCgpa(res.data.message[2].cgpa);
        upadateSem(res.data.message[3].sem);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    Aos.init({ duration: 2000 });
  });

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row
          style={{ justifyContent: "center", position: "relative" }}
          data-aos="fade-up"
        >
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download Resume
          </Button>
        </Row>
        <Row className="resume" data-aos="fade-up">
          {/* <Col md={6} className="resume-left">
            <h3 className="resume-title">EXPERIENCE</h3>
            <Resumecontent
              title="Software Engineer @Vyapar"
              date="December 2021 - Present"
              content={[
                "Currently working on Bank reconciliation project",
                "Working on Desktop app",
              ]}
            />
            <h3 className="resume-title">Internship</h3>
            <Resumecontent
              title="STUDENT INTERN [ IIT Guwahati ]"
              date="March 2019 - July 2019"
              content={[
                "Built a portable vein viewer device using raspberry pi, which can be used by nurses to see the veins of patients while giving injections",
              ]}
            />
            <h3 className="resume-title">Extracurricular Activities</h3>
            <Resumecontent
              title="ANNUAL COLLEGE TECH FEST"
              content={[
                "Won cash prize of Rs 22,000 in a team of 4 members in our annual technical events where we made working bots and compete with other bots ",
              ]}
            />
            <Resumecontent
              title="Intra-Collegiate Cricket Tournament"
              content={[
                "Won first place at Intra-Collegiate Cricket Tournament",
              ]}
            />
          </Col> */}
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title=" FULL STACK WEB DEVELOPMENT - Full Time  [ MASAI SCHOOL ] "
              date="NOV 2021 - JULY 2022"
              content={[
                "1300+ hours of hands-on coding experience.",
                " Solved 300+ Data Structure & Algorithm problems.",
                "Received 50+ hours of Soft Skills training.",
              ]}
            />
            <Resumecontent
              title=" B.Tech CIVIL ENGINEERING   [ SARASWATI COLLEGE OF ENGINEERING`, Navi Mumbai ] "
              date="2017 - 2021"
              content={["CGPA: 7.05 "]}
            />
            <Resumecontent
              title="12TH BOARD [ S.K. Somaya Vinay Mandir Junior College, Mumbai ]"
              date="2016 - 2017"
              content={["Precentage: 70.77%"]}
            />
            <Resumecontent
              title="10TH BOARD [ Sainath High School, Navi Mumbai ] "
              date="2014 - 2015"
              content={["Precentage: 86.40%"]}
            />
            {/* <h3 className="resume-title">Ranks and Achivements</h3> */}
            {/* <Resumecontent
              title=""
              content={[
                `Current rank in Spoj ${spojRank}`,
                `Current rank in HackerRank  ${hackerrank}`,
                "Top Performer in Code-Break 1.0",
                "Participant in Hack-A-Bit 2019",
              ]}
            /> */}
          </Col>
        </Row>
        <Row
          style={{ justifyContent: "center", position: "relative" }}
          data-aos="fade-right"
        >
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download Resume
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;

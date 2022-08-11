import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple"> Asutosh Behera </span>
            from <span className="purple"> Bhubaneswar, Odisha, India.</span>
            {/* <br /> I have completed my graduation in Electronics Engineering. */}<br/><br />
            A highly dedicated and passionate web developer with excellent administrative and communication skills and the ability to write efficient code.
            Looking forward to an exciting opportunity in a challenging role as a full-stack developer
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Reading Novels
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Cricket
            </li>
            <li className="about-activity">
              <ImPointRight /> Writting Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Asutosh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
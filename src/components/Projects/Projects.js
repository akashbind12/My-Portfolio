import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
// import Particle from "../Particle";


import Intertheory from "../../Assets/Projects/intertheory.png";
// import emotion from "../../Assets/Projects/emotion.jpeg";
import Fabbag from "../../Assets/Projects/fabbag.png";
import Kindmeal from "../../Assets/Projects/kindmeal.png";
// import suicide from "../../Assets/Projects/suicide.png";
import Youtube from "../../Assets/Projects/youtube.png";
import Puma from "../../Assets/Projects/puma.png";
import Geekbuying from "../../Assets/Projects/Geekbuying.png";
import WeatherApp from "../../Assets/Projects/Weather-App.png";
import TicTacToe from "../../Assets/Projects/Tic-Tac-Toe.png";
import GifPoster from "../../Assets/Projects/GIF-Poster.png";
import GoogleTimer from "../../Assets/Projects/Google_timer.png";
import Aos from "aos";
import "aos/dist/aos.css";
function Projects() {
  useEffect(() => {
    Aos.init({ duration: 1200 });
  });

  return (
    <Container fluid className="project-section">
      {/* <Particle /> */}
      <Container>
        <h1 className="project-heading" data-aos="fade-right">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }} data-aos="fade-up">
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={5} className="project-card" data-aos="fade-right">
            <ProjectCard
              imgPath={Puma}
              isBlog={false}
              title="PUMA Clone "
              description="Puma SE, branded as Puma, is a German multinational corporation that designs and manufactures athletic and casual footwear, apparel and accessories. "
              tech="ReactJs  |  Redux  |  NodeJs  |  ExpressJs  |  MongoDB  |  CSS | Material-ui | Firebase"
              link="https://github.com/akashbind12/PUMA_Clone.git"
              // linkmedium="https://asutoshblog.hashnode.dev/experience-of-cloning-quora"
              linklive="https://puma-clone-eight.vercel.app/"
            />
          </Col>

          <Col md={5} className="project-card" data-aos="fade-right">
            <ProjectCard
              imgPath={Intertheory}
              isBlog={false}
              title="Interntheory Clone"
              description="Provider of an online internship portal intended to offer Internships courses and connect students with companies looking for interns."
              tech="HTML | CSS | JavaScript |  MongoDB  |  NodeJs | ExpressJs"
              link="https://github.com/akashbind12/intern_theory_clone_project.git"
              // linkmedium="https://asutoshblog.hashnode.dev/medium-clone"
              linklive="https://intern-theory-clone-project.vercel.app/"
            />
          </Col>

          <Col md={5} className="project-card" data-aos="fade-up">
            <ProjectCard
              imgPath={Fabbag}
              isBlog={false}
              title="FAB BAG Clone"
              description="FAB BAG (www.fabbag.com) is a beauty/grooming discovery and subscription platform."
              tech="ReactJs  |  Redux  |  Thunk  |  CSS | Chakra-ui | Json-server"
              link="https://github.com/akashbind12/FAB-BAG_clone.git"
              // linkmedium="https://asutoshblog.hashnode.dev/frontend-masters-clone-using-mongodb-database"
              linklive="https://fab-bag-clone.vercel.app/"
            />
          </Col>

          <Col md={5} className="project-card" data-aos="fade-down">
            <ProjectCard
              imgPath={Kindmeal}
              isBlog={false}
              title="KindMeal Clone"
              description="KindMeal.my is Malaysia's leading meat-free lifestyle platform, indulging you with delicious discounted vegetarian meals to save animals, health, environment and money."
              tech="ReactJs |  Redux  |  MongoDB  |  NodeJs  |  ExpressJs  |  Material-ui"
              link="https://github.com/rishianand39/Kindmeal-clone.git"
              // linkmedium=""
              linklive="https://kindmeal.vercel.app/"
            />
          </Col>

          <Col md={5} className="project-card" data-aos="fade-right">
            <ProjectCard
              imgPath={Geekbuying}
              isBlog={false}
              title="Geekbuying Clone"
              description="Geekbuying is the ultimate shopping hub for new releases covering smart home products, fitness equipment  and office furniture, outdoor items and other consumer goods like TV boxes, RC Toys and so much more! "
              tech="HTML | CSS | JavaScript"
              link="https://github.com/RaviRanjan02/GeekbuyingClone.git"
              linkmedium="#"
              linklive="https://geekbuying-clone.vercel.app/"
            />
          </Col>

          <Col md={5} className="project-card" data-aos="fade-down">
            <ProjectCard
              imgPath={Youtube}
              isBlog={false}
              title="YouTube"
              description="A YouTube is an American online video sharing and social media platform."
              tech="HTML | CSS | JavaScript"
              link="https://github.com/akashbind12/Youtube-clone.git"
              linkmedium="#"
              linklive="https://youtube-clone-bice-gamma.vercel.app/"
            />
          </Col>

          <Col md={5} className="project-card" data-aos="fade-up">
            <ProjectCard
              imgPath={WeatherApp}
              isBlog={false}
              title="Weather App"
              description="It is a wheather-forcast app where use can see the current weather as well as next 7 days weather-forcast of any location"
              tech="ReactJs  | CSS | Chakra-ui "
              link="https://github.com/akashbind12/Weather-app.git"
              // linkmedium="https://asutoshblog.hashnode.dev/frontend-masters-clone-using-mongodb-database"
              linklive="https://weather-app-vqwj.vercel.app/"
            />
          </Col>

          
          <Col md={5} className="project-card" data-aos="fade-left">
            <ProjectCard
              imgPath={TicTacToe}
              isBlog={false}
              title="Tic-Tac-Toe App"
              description="developed the tic-tac-toe game using the concepts of objects and react.js"
              tech="ReactJs  | CSS "
              link="https://github.com/akashbind12/Tic-Tac-Toe.git"
              // linkmedium="https://asutoshblog.hashnode.dev/frontend-masters-clone-using-mongodb-database"
              linklive="https://tic-tac-toe-akashbind12.vercel.app/"
            />
          </Col>

          <Col md={5} className="project-card" data-aos="fade-right">
            <ProjectCard
              imgPath={GifPoster}
              isBlog={false}
              title="GIF image poster"
              description="User can search for the GIf by choosing gif option  and can select any gif-image for the post like a social media app"
              tech="ReactJs  | CSS | Chakra-ui "
              link="https://github.com/akashbind12/codemancers_assignment.git"
              // linkmedium="https://asutoshblog.hashnode.dev/frontend-masters-clone-using-mongodb-database"
              linklive="https://dulcet-khapse-d3ee68.netlify.app/"
            />
          </Col>

          <Col md={5} className="project-card" data-aos="fade-left">
            <ProjectCard
              imgPath={GoogleTimer}
              isBlog={false}
              title="Google Timer"
              description="developed the clone of google-timer using react.js"
              tech="ReactJs  | CSS"
              link="https://github.com/akashbind12/React-google_Timer.git"
              // linkmedium="https://asutoshblog.hashnode.dev/frontend-masters-clone-using-mongodb-database"
              linklive="http://react-google-timer.vercel.app/"
            />
          </Col>



        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
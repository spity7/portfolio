import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import mila from "../../Assets/Projects/WhatsApp Image 2025-05-14 at 13.31.33_1f0bd6ca.jpg";
import edvisors from "../../Assets/Projects/screencapture-edvisors-ai-2025-05-14-13_57_56.png";
import urbanfitx from "../../Assets/Projects/screencapture-urbanfitx-2025-05-14-14_09_13.jpg";
import appsido from "../../Assets/Projects/WhatsApp Image 2025-05-14 at 17.29.28_dd653f5b.jpg";
import buytfinder from "../../Assets/Projects/oie_14164414Ejh3jzs.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mila}
              isBlog={false}
              title="Mila"
              description="A real estate web application built with React.js, Node.js, and MongoDB. It helps users discover and connect with their dream residence through a smooth and engaging experience. It aims to assist clients in finding the perfect home tailored to their needs."
              ghLink="https://github.com/spity7/mila-react"
              demoLink="https://milaresidence.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={edvisors}
              isBlog={false}
              title="Edvisors"
              description="AI-powered EdTech platform built with React.js, Node.js, and MongoDB. We are committed to transforming education through innovative technology solutions that enhance learning experiences and outcomes."
              ghLink="https://github.com/spity7/edvisors"
              demoLink="https://edvisors.ai/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={urbanfitx}
              isBlog={false}
              title="Urban Fitx"
              description="It specializes in delivering high-quality fit-out services that transform interior spaces into functional, inspiring, and aesthetically pleasing environments. This project was built with React.js, Node.js, and MongoDB."
              ghLink="https://github.com/spity7/urbanFitx"
              demoLink="https://urbanfitx.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={appsido}
              isBlog={false}
              title="Appsido"
              description="Appsido is a cutting-edge IT services company specializing in delivering innovative solutions tailored for today's rapidly evolving digital world. This platform was built with React.js, Node.js, and MongoDB to provide robust, scalable, and modern digital services that empower businesses to innovate, grow, and excel."
              ghLink="https://hasansbait2001@bitbucket.org/bourjihellani/appsido-web"
              demoLink="https://www.appsido.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={buytfinder}
              isBlog={false}
              title="Buytfinder"
              description="Buytfinder is a Lebanese digital platform that helps individuals in need find housing solutions quickly and efficiently. It connects people with property owners, brokers, and associations offering shelter or aid, creating a vital bridge between those who need help and those who can provide it. Built with Laravel and MySQL."
              ghLink=""
              demoLink="https://buytfinder.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

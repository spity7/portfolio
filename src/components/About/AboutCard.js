import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Hasan Sbeity </span>
            from <span className="purple"> Beirut, Lebanon.</span>
            <br />
            I am a full-stack web developer with a passion for building
            impactful and scalable digital solutions.
            <br />I specialize in building applications using:
            <span className="purple">
              {" "}
              Laravel, React.js, Node.js, MongoDB, and React Native.
            </span>
            <br />
            <br />I also have experience in deploying and managing projects
            using <span className="purple">Hostinger</span> and{" "}
            <span className="purple">Render</span>.
            <br />
            <br />
          </p>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Code with purpose. Build with passion."{" "}
          </p>
          <footer className="blockquote-footer">Hasan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

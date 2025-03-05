import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ukwueze Pascaline  </span>
            from <span className="purple"> Nigeria.</span>
            <br />
            I am currently a frontend developer at Winnov8.
            <br />
            I have a Bsc in Nutrition and Dietetics.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing music
            </li>
            <li className="about-activity">
              <ImPointRight /> Trying out new recipes
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Pascaline</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

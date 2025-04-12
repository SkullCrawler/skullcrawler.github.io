import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Rayyan Waseem </span>
            from <span className="purple"> Lahore, Pakistan.</span>
            <br />
            I am currently freelancing as a software developer at Fiverr.
            <br />
            I have completed Bachelors (BS) in Computer Science.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Car Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Motorcycling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Writing testcases for your code is a sign of weakness. Real men test in production"{" "}
          </p>
          <footer className="blockquote-footer">Rayyan Waseem</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

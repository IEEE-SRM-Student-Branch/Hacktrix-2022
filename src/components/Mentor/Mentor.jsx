import React from "react";

import "../Mentor/mentor.css";
import styled from "styled-components";

const MENTOR = [
  {
    name: "Steve Wozniak",
    image: "./img/speaker/judge1.svg",
    designation: "CEO",
    company: "echoAR",
    link: "https://www.linkedin.com/in/alongrinshpoon/",
  },
  {
    name: "Steve Wozniak",
    image: "./img/speaker/judge1.svg",
    designation: "CEO",
    company: "echoAR",
    link: "https://www.linkedin.com/in/alongrinshpoon/",
  },
  {
    name: "Steve Wozniak",
    image: "./img/speaker/judge1.svg",
    designation: "CEO",
    company: "echoAR",
    link: "https://www.linkedin.com/in/alongrinshpoon/",
  },
  {
    name: "Steve Wozniak",
    image: "./img/speaker/judge1.svg",
    designation: "CEO",
    company: "echoAR",
    link: "https://www.linkedin.com/in/alongrinshpoon/",
  },
  {
    name: "Steve Wozniak",
    image: "./img/speaker/judge1.svg",
    designation: "CEO",
    company: "echoAR",
    link: "https://www.linkedin.com/in/alongrinshpoon/",
  },
  {
    name: "Steve Wozniak",
    image: "./img/speaker/judge1.svg",
    designation: "CEO",
    company: "echoAR",
    link: "https://www.linkedin.com/in/alongrinshpoon/",
  },
  {
    name: "Steve Wozniak",
    image: "./img/speaker/judge1.svg",
    designation: "CEO",
    company: "echoAR",
    link: "https://www.linkedin.com/in/alongrinshpoon/",
  },
  {
    name: "Steve Wozniak",
    image: "./img/speaker/judge1.svg",
    designation: "CEO",
    company: "echoAR",
    link: "https://www.linkedin.com/in/alongrinshpoon/",
  },
];

const Heading = styled.h2`
  text-align: center;
  font-size: 65px;
  color: rgba(255, 255, 255, 0.95);
  margin-bottom: 50px;
  margin-top: 20px;
  font-weight: 800;
  text-decoration-color: 2px solid #deb7f5;
  text-shadow: 0px 0px 50px #b741ff;
`;

const Mentor = () => {
  return (
    <div class="myStyle" id="Mentor">
      <Heading>Mentor</Heading>
      <div className="row py-5 gx-0 justify-content-center">
        {MENTOR.map((item, index) => {
          return (
            <div className="col-12 col-lg-3 mb-15 speaker">
              <div className="speakers">
                <div className="speaker-img">
                  <img src={`${item.image}`} alt={`${item.name}`} />
                </div>
                <div className="speaker-details ">
                  <div className="speaker-name">{item.name}</div>
                  <div className="speaker-desg">
                    {item.designation}, {item.company}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Mentor;

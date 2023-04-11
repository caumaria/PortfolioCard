import React from "react";
import styled from "styled-components";
import Github from "../assets/github.svg";
import Linkedin from "../assets/linkedin.svg";



const Info = styled.div`
  width: 12rem;
  color: #c3c3c3;
  margin: 1.6rem;
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 99;
`;

const Social = styled.img`
  background-color: black;
  border-radius: 100%;
  width: 32px;
  height: 32px;
  cursor: pointer;
`;

const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin: 1.6rem;
`;

const Contact = () => {
  return (
    <>
      <Info>
        <p>What's next?</p>
        <h1>Get In 
          <a 
            href="mailto: cau.ugolini@gmail.com"
            style={{ color: "white", paddingLeft: "14px" }}
          >Touch
          </a>
        </h1>
        <Center>
          <a 
            href="https://github.com/caumaria" 
            target="blank"
          >
              <Social src={Github} alt="Cau's Github" />
          </a>
          <a
            href="https://www.linkedin.com/in/cau-ugolini-923a4a185/"
            target="blank"
          >
            <Social src={Linkedin} alt="Cau's Linkedin" />
          </a>
        </Center>
      </Info>
    </>
  );
};

export default Contact;

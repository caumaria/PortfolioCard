import React from 'react';
import styled from 'styled-components';

const AboutDiv = styled.div`
  width: 12rem;
  height: 16rem;
  color: #c3c3c3;
  margin: 1.6rem;
  position: absolute;
  bottom: 0;
  right: 0;  
  font-family: "Inconsolata", monospace;
`;

const About = () => {
  return (
    <AboutDiv>
          <p>
            Born in 1815.
          </p>
          <p>
            Caindo aos pedaços, lutando pela  
            sobrevivencia nesse mundo cruel.
            asha ara ara lal ala alalala
            ashalalala lenga lenga WE NEED MORE WORDS, WATSON.
            <br></br>
            <br></br>
            Resume about cacadinha's life.
            <br></br>
            <br></br>
            Coming soon.
          </p>
    </AboutDiv>
  )
}

export default About

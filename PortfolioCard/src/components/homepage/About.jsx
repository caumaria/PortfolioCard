import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../data/motion';
import { ContainerSlideIn } from '../../pages/Projects';

const AboutDiv = styled(motion.div)`
  width: 12rem;
  height: 16rem;
  color: #c3c3c3;
  position: absolute;
  padding: 1.6rem;
  bottom: 0;
  right: 0;  
  font-family: "Inconsolata", monospace;
  overflow: hidden;
`;

const About = () => {
  return (
    <AboutDiv
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    >
      <ContainerSlideIn
      variants={fadeIn("left", "tween", 0.2, 1)}
      >
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
        </ContainerSlideIn>
    </AboutDiv>
  )
}

export default About

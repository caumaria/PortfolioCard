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
      variants={fadeIn("left", "tween", 1.4, 1)}
      >
          <p>
            Self-taught Front-end Developer Jr.
            <br></br>
            <br></br>
            Born in Brazil.
          </p>
          <br></br>
          <p>
            I'm open to Job opportunities where I can contribute, learn and grow.
            <br></br>
            <br></br>
            We can chat about ReactJS, JS, Styled Components, SCSS, CSS, HTML.
          </p>
        </ContainerSlideIn>
    </AboutDiv>
  )
}

export default About

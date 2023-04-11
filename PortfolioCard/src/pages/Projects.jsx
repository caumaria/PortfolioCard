import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Conteiner = styled(motion.div)`
  width: auto;
  height: 16rem;
  color: #c3c3c3;
  position: absolute;
  bottom: 0;
  right: 0;
  font-family: "Inconsolata", monospace;
  z-index: 99;
`;

const staggerContainer = (staggerChildren, delayChildren) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

const ContainerSlideIn = styled(motion.div)`
  position: relative;
`;

const StyledProject = styled.div`
  width: 16rem;
  color: rgb(195, 195, 195);
  margin: 1.6rem;
`;

const fadeIn = (direction, type, delay, duration) => ({
  hidden: {
    x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
    y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
    opacity: 0,
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type,
      delay,
      duration,
      ease: "easeOut",
    },
  },
});

const projects = [
  {
    name: "Design to HTML/CSS",
    projects: "Fully Responsive Application",
  },
  {
    name: "Web & Mobile App",
    projects: "19 projects",
  },
  {
    name: "JavaScript Support",
    projects: "Front-end Behaviorial Support",
  },
];

const Projects = () => {
  return (
    <>
      <Conteiner
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        {projects.map((exp, i) => {
          return (
            <ContainerSlideIn
              variants={fadeIn("left", "tween", (i + 1) * 0.2, 1)}
              key={i}
            >
              <StyledProject>
                <p>{exp.name}</p>
                <p>{exp.projects}</p>
              </StyledProject>
            </ContainerSlideIn>
          );
        })}
      </Conteiner>
    </>
  );
};

export default Projects;

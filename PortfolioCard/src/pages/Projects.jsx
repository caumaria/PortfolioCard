import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Conteiner = styled(motion.div)`
  width: auto;
  height: auto;
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
  cursor: pointer;
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
    name: "DESIGN To HTML/CSS",
    projects: "Fully Responsive Application",
    year: "Study case, 2023."
  },
  {
    name: "WEB & MOBILE APP",
    projects: "19 projects",
    year: "Personal, 2023."
  },
  {
    name: "JavaScript Support",
    projects: "Front-end Behaviorial Support",
    year: "Study case, 2023."
  },
  {
    name: "Design to HTML/CSS",
    projects: "Fully Responsive Application",
    year: "Study case, 2023."
  },
  {
    name: "Web & Mobile App",
    projects: "19 projects",
    year: "Study case, 2023."
  },
  {
    name: "JavaScript Support",
    projects: "Front-end Behaviorial Support",
    year: "Study case, 2023."
  },
  {
    name: "JavaScript Support",
    projects: "Front-end Behaviorial Support",
    year: "Study case, 2023."
  },
  {
    name: "JavaScript Support",
    projects: "Front-end Behaviorial Support",
    year: "Study case, 2023."
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
                <h3 style={{ fontWeight: 400}}>
                  • {exp.name}
                </h3>
                <p style={{ fontWeight: 350}}>
                  {exp.projects}
                </p>
                <p style={{fontSize: 11, fontWeight: 700, float: 'right'}}>
                  {exp.year}
                </p>
              </StyledProject>
            </ContainerSlideIn>
          );
        })}
      </Conteiner>
    </>
  );
};

export default Projects;

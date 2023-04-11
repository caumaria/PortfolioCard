import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../components/data/motion"
import { projects } from "../components/data/data";

const Conteiner = styled(motion.div)`
  width: auto;
  height: auto;
  color: #c3c3c3;
  position: absolute;
  bottom: 0;
  right: 0;
  font-family: "Inconsolata", monospace;
  z-index: 99;
  overflow: hidden;
`;

export const ContainerSlideIn = styled(motion.div)`
  position: relative;
`;

const StyledProject = styled.div`
  width: 16rem;
  color: rgb(195, 195, 195);
  margin: 1.6rem;
  cursor: pointer;
`;

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
              variants={fadeIn("left", "tween", (i + 1) * 0.2, 0.8)}
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

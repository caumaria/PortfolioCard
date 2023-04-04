import Typed from "typed.js";
import { useEffect, useRef } from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: hsl(0, 0%, 5%);
`;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: white;
  display: flex;
`;

const Splash = () => {
  const name = useRef(null);

  useEffect(() => {
    const typed = new Typed(name.current, {
      strings: ["cau. "],
      startDelay: 600,
      typeSpeed: 180,      
    });

    return () => {
      typed.destroy();
    };
  }, []);


  return (
    <Container>
      <Title>
        <pre ref={name}></pre>
        <pre id="portfolio">portfolio</pre>
      </Title>
    </Container>
  );
};

export default Splash;

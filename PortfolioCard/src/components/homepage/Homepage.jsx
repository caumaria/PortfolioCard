import { useEffect, useRef, useState } from "react";
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Background = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: hsl(0, 0%, 5%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Inconsolata', monospace;
`;

const Container = styled.div`
  height: calc(100vh - 50px);
  width: calc(100vw - 50px);
  border: 1px solid #c3c3c3;
  background-color: hsl(0, 0%, 5%);
  position: fixed;
  animation: ${fadeIn} 1s ease-in-out forwards;
`;

const Header = styled.div`
  width: 16rem;
  height: 20rem;
  color: #c3c3c3;
  margin: 1.6rem;
`;

const H1 = styled.h1`
  font-weight: 200;
  font-size: 40px;
  padding-bottom: .5rem;
`;

const Flex = styled.div`
  display: flex,
`;

const Ul = styled.ul`
  list-style: none;
  cursor: pointer;
  padding-top: 2rem;  
`;

const Li = styled.li`
  padding-top: .8rem;
  font-weight: 900;
`;

const About = styled.div`
  width: 12rem;
  height: 16rem;
  color: #c3c3c3;
  margin: 1.6rem;
  position: absolute;
  bottom: 0;
  right: 0;  
`;

const Homepage = () => {
  const webD = useRef(null);

  useEffect(() => {
    const typedWeb = new Typed(webD.current, {
      strings: ['.web developer'],
      startDelay: 400,
      typeSpeed: 70,
      backDelay: 500,           
    });

    return () => {
      typedWeb.destroy();
    };
  }, []);

  return (
    <Background>
      <Container>
        <Header>
          <H1>Cau Ugolini</H1>
          <Flex>
            <pre ref={webD}></pre>
          </Flex>         

          <Ul>
            <Li>Home</Li>
            <Li>Projects</Li>
            <Li>Contact</Li>
          </Ul>

        </Header>

        <About>
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
        </About>


      </Container>      
    </Background>
  )
}

export default Homepage;

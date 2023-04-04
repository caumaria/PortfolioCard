import React from 'react'
import styled from 'styled-components';


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
`;


const Splash = () => {
  return (
    <Container>
      <Title>
        cau. portfolio
      </Title>
    </Container>
  )
};

export default Splash;

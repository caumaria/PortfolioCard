import React from 'react'
import styled from 'styled-components';

const Background = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: hsl(0, 0%, 5%);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  height: 90vh;
  width: 96vw;
  border: 2px solid white;
  background-color: hsl(0, 0%, 5%);
`;


const Homepage = () => {
  return (
    <Background>
      <Container>
        this is the HOME PAGE
      </Container>      
    </Background>
  )
}

export default Homepage;

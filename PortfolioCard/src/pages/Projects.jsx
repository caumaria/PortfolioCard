import React from 'react';
import styled from 'styled-components';


const Conteiner = styled.div`
  width: 12rem;
  color: rgb(195, 195, 195);
  margin: 1.6rem;
  position: absolute;
  bottom: 0;
  right: 0;  
  z-index: 99;
`;

const Projects = () => {
  return (
    <>
    <Conteiner>
      <h1>Coming soon</h1>
      <p>No, seriously.
        <br></br>
        I am actually building this
        </p>      
    </Conteiner>    
    </>  
  )
}

export default Projects

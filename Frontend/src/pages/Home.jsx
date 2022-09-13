import React from 'react';
import styled from 'styled-components';
import Card from '../components/Card';

const Container=styled.div`
display: flex;
justify-content:space-between;
flex-wrap:wrap ;
@media (max-width: 500px) {
    flex-direction: column;
  }
`;
const Home = () => {
  return (
    <Container>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      
    </Container>
  )
}

export default Home
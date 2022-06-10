import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
  padding: 10px 20px;
  background: #194F92;
  position: relative;
  bottom: 0;
  width: 100%;
  height:150px;
  @media (max-width: 1000px) {
    padding: 30px 30px;
  }
  
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1000px;
  margin: 0 auto;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 20px;
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));
  grid-gap: 30px;
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

const Flinks = styled.a`
  color: #ffff;
  margin-bottom: 5px;
  font-size: 15px;
  text-decoration: none;
  &:hover {
    color: #CBD5F0;
    transition: 200ms ease-in;
  }
`;

const Heading = styled.p`
  font-size: 20px;
  color: black;
  margin-bottom: 10px;
  font-weight: bold;
`;

 const Footer = () => {
  return (
    <Box>
      <Container>
        <Row>
          <Column>
            <Heading>Qui sommes nous?</Heading>
            <Flinks>Find more about us</Flinks>
          </Column>
          <Column>
            <Heading>Careers</Heading>
            <Flinks>Call us on ***</Flinks>
            <Flinks>Email us</Flinks>
          </Column>
          <Column>
            <Heading>Adresse</Heading>
            <Flinks>rue foulen ville falten</Flinks>
            
          </Column>
          <Column>
            <Heading>Résaux sociaux</Heading>
            <Flinks href='#'>
              <i className='fab fa-facebook-f'>
                <span style={{ marginLeft: '10px' }}>Facebook</span>
              </i>
            </Flinks>
            <Flinks href='#'>
              <i className='fab fa-instagram'>
                <span style={{ marginLeft: '10px' }}>Instagram</span>
              </i>
            </Flinks>
           
            
          </Column>
        </Row>
      </Container>
      <br/>
      <Flinks> 
      <h5 style={{textAlign: "center"}}> Copyright tous droits réservés  |  Mentions légales  | Conditions générales de ventes</h5>
      <h5 style={{textAlign: "center"}}> Réalisé par Youssef & Amani </h5>
      </Flinks>
     
    </Box>
  );
};
export default Footer;
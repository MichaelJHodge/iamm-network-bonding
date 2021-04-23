import styled from 'styled-components';

export const InfoSec = styled.div`

  color: #fff;
  padding: 160px 0;
  background: #0e0b36;
`;


export const InfoColumn = styled.div`
  text-align: center;
align-items: center;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: center;


  
  }
`;

export const TextWrapper = styled.div`
  max-width: 740px;
  text-align: center;
  padding-bottom: 60px;
  @media screen and (max-width: 768px) {
    padding-bottom: 0px;
    justify-content: center;
    align-items: center;
    align-self: center;
    flex-basis: 100%;

  }
`;




export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 90px;
  line-height: 1.3;
  font-weight: bold;
  text-align: center;


  color: white;
  
`;

export const Subtitle = styled.p`
  text-align: center;
  margin-bottom: 2.5rem;
  margin-top: 2.5rem;
  font-weight: bolder;
  font-size: 55px;
line-height: 1.3;
font-family: "Poppins";

  color: white;
`;
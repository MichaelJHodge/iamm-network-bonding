import styled from 'styled-components';

export const InfoSec = styled.div`

  color: #fff;
  padding: 160px 0;
  background: #0e0b36;
`;


export const InfoColumn = styled.div`
  padding-top: 60px;
  padding-left: 15px;
  text-align: center;
align-items: center;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const TextWrapper = styled.div`
  max-width: 740px;
  text-align: center;
  padding-top: 0;
  padding-bottom: 60px;
  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
  }
`;





export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 90px;
  line-height: 1.3;
  font-weight: bolder;
  text-align: center;

  color: white;
`;

export const Subtitle = styled.p`
  text-align: center;
  margin-bottom: 2.5rem;
  margin-top: 2.5rem;
  font-weight: bold;
  font-size: 48px;
line-height: 1.3;

  color: white;
`;
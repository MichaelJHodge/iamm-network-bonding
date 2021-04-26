import styled from "styled-components";

export const BondingCurveContainer = styled.div`
display: grid;
grid-template-columns: repeat(2, 2fr);
grid-gap: 50px;
height: 750px;
padding: 25px;
`

export const CurveOfferingHeader = styled.div`
  display: flex;
  position: relative;
  align-self: center;
  justify-content: center;
  align-content: center;
  height: 84px;
  margin: 25px;
  border-radius: 8px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  background-color: rgba(139, 64, 244, 1);
`;

export const HeaderAlert = styled.div`
  max-width: 36px;
  color: rgba(26, 26, 26, 1);
  font-size: 28px;
  letter-spacing: 0%;
  text-align: left;
  align-self: center;

  font-family: Montserrat, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 36px;
  width: 36px;
  border-radius: 30px;
  background-color: rgba(255, 255, 255, 1);
`;

export const HeaderTitle = styled.div`
  color: rgba(255, 255, 255, 1);
  font-size: 40px;
  letter-spacing: 0%;
  text-align: center;
  justify-content: center;
  align-content: center;  
  align-self: center;
  padding-left: 20px;
  font-family: Montserrat, sans-serif;
  font-weight: bold;

`;



export const ChartContainer = styled.div`
background-color: black;
display: flex;
height: 100%;
padding-top: 25px;
padding-left: 25px;
width: 1000px;

`

export const PurchaseColumn = styled.div`
background-color: blue;
height: 100%;
padding-top: 25px;
padding-right: 25px;
padding-left: 25px;

display: grid;
grid-template-rows: repeat(2, 2fr);

`

export const WalletContainer = styled.div`
width: 100%;
background-color: red;

height: 300px;


`



export const PurchaseContainer = styled.div`
height: 300px;
background-color: black;
width: 100%;


`
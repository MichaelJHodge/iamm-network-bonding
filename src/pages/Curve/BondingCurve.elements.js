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
display: grid;
      justify-content: flex-start;
      align-items: flex-start;
      height: 100%;
      width: 1100px;
      box-shadow: 0px 8px 8px 0px rgba(0, 0, 0, 0.25);
      padding-top: 10px;
      padding-bottom: 10px;
      padding-right: 10px;
      padding-left: 10px;
      border-color: rgba(128, 128, 128, 1);
      border-width: 1px;
      border-style: solid;

`

export const ChartDetailsRow = styled.div`
display: flex;
padding-left: 40px;


`
export const BuyPrice = styled.div`
    color: #777;
    font-size: 20px;
    padding-right: 40px;

`
export const Issuance = styled.div`
    color: #777;
    font-size: 20px;
    padding-right: 40px;

`
export const Reserve = styled.div`
    color: #777;
    font-size: 20px;
    padding-right: 40px;

`
export const Supply = styled.div`
    color: #777;
    font-size: 20px;
    padding-right: 40px;

`
export const PurchaseColumn = styled.div`
height: 100%;
width: 100%;
padding-right: 25px;
padding-left: 25px;
display: grid;
grid-template-rows: repeat(1, 2fr);

`

export const WalletContainer = styled.div`
width: 100%;
height: 250px;
box-shadow: 0px 8px 8px 0px rgba(0, 0, 0, 0.25);

border-color: rgba(128, 128, 128, 1);
  border-width: 1px;
  border-style: solid;

`

export const PurchaseContainer = styled.div`
height: 400px;
width: 100%;
box-shadow: 0px 8px 8px 0px rgba(0, 0, 0, 0.25);

border-color: rgba(128, 128, 128, 1);
  border-width: 1px;
  border-style: solid;

`
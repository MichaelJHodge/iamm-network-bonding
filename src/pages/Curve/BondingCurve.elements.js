import styled from "styled-components";
import {DownArrowAlt} from '@styled-icons/boxicons-solid/DownArrowAlt';


export const MainContainer = styled.div`
 display: grid;
 position: relative;
  align-self: center;
  justify-content: center;
  align-content: center;
  @media screen and (max-width: 768px) {


  }
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
  @media screen and (max-width: 768px) {
      margin-bottom: 350px;

    width: 450px;

  }
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
  letter-spacing: 0px;
  text-align: center;
  justify-content: center;
  align-content: center;  
  align-self: center;
  padding-left: 20px;
  font-family: "Poppins";
  font-weight: bold;

  @media screen and (max-width: 768px) {
    justify-content: center;
    align-items: center;
    align-self: center;
    font-size: 22px;

  }

`;

 

export const BondingCurveContainer = styled.div`
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 2rem;
      height: 750px;
      padding: 25px;

      @media screen and (max-width: 768px) {
      display:grid; 
      gap:1rem;
      grid-template-columns: repeat(1, 1fr);
      align-content: center;
      align-items: center;
      flex-direction: column;
      }

`



export const ChartContainer = styled.div`
      display: flex;
      flex-direction: column;
      position: relative;
      justify-content: flex-start;
      align-items: flex-start;
      height: 73vh;
      width: 70vw;
      box-shadow: 0px 8px 8px 0px rgba(0, 0, 0, 0.25);
      padding-top: 10px;
      padding-bottom: 25px;
      padding-right: 10px;
      padding-left: 50px;
      border-color: rgba(128, 128, 128, 1);
      border-width: 1px;
      border-style: solid;

      @media screen and (max-width: 768px) {
      grid-template-columns: repeat(1, 1fr);
      display: grid;
      gap:3rem;
      align-content: center;
      align-items: center;
      
  }

`
export const AreaChartContainer = styled.div`
      padding-top: 25px;
      margin-right: 30px;
      height: 600px;
      width: 100%;
      max-width: 1100px;
      min-width: 0;
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
height: 75%;
width: 100%;
padding-right: 25px;
padding-left: 25px;
display: grid;
grid-template-rows: repeat(1, 2fr);
@media screen and (max-width: 768px) {
      width: 85%;
      display: grid;
  }

`

export const WalletContainer = styled.div`
  display: flex;
    flex-direction: column;
    width: 100%;
    height: 95%;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.25);
    padding-top: 10px;
    padding-bottom: 10px;
    border-color: rgba(128, 128, 128, 1);
    border-width: 1px;
    border-style: solid;

    @media screen and (max-width: 768px) {
      height: 85%;

  }

`


export const ConnectWallet = styled.div`
 width: 175px;
    color: rgba(255, 255, 255, 1);
    font-size: 18px;
    letter-spacing: 0%;
    text-align: center;
    font-family: "Poppins";
    display: flex;
    flex-direction: row;
    justify-content: center;
    border-radius: 8px;
    padding-top: 12px;
    padding-bottom: 15px;
    padding-right: 12px;
    padding-left: 12px;
    background-color: rgba(139, 64, 244, 1);
    box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.25);
    
    &:hover{
    color: rgba(139, 64, 244, 1);
    background-color: white;
    border-width: 2px;
    border-style: solid;
    cursor: pointer;
    }

`


export const ImportWallet = styled.div`
 max-width: 200px;
    color: rgba(139, 64, 244, 1);
    font-size: 18px;
    letter-spacing: 0%;
    text-align: center;
    font-family: "Poppins";
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 10px;
    border-radius: 8px;
    padding-top: 12px;
    padding-bottom: 15px;
    padding-right: 12px;
    padding-left: 12px;
    border-color: rgba(139, 64, 244, 1);
    box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.25);
    border-width: 2px;
    border-style: solid;

    &:hover{
    color: white;
    background-color: rgba(139, 64, 244, 1);
    cursor: pointer;
    }
`

export const CreateWallet = styled.div`
  max-width: 200px;
      color: rgba(139, 64, 244, 1);
      font-size: 18px;
      letter-spacing: 0%;
      text-align: center;
      font-family: "Poppins";
      display: flex;
      flex-direction: row;
      justify-content: center;
      margin-top: 10px;
      border-radius: 8px;
      padding-top: 12px;
      padding-bottom: 15px;
      padding-right: 12px;
      padding-left: 12px;
      border-color: rgba(139, 64, 244, 1);
      box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.25);
      border-width: 2px;
      border-style: solid;

      &:hover{
        color: white;
    background-color: rgba(139, 64, 244, 1);
    cursor: pointer;
      }
`


export const PurchaseContainer = styled.div`
 display: flex;

      flex-direction: column;
      flex-wrap: wrap;
      height: 425px;
      align-self: center;
      align-content: center;
      align-items: center;
      box-shadow: 0px 8px 8px 0px rgba(0, 0, 0, 0.25);
      margin-top: 10px;
      padding-top: 10px;
      padding-bottom: 10px;
      border-color: rgba(128, 128, 128, 1);
      border-width: 1px;
      border-style: solid;

      @media screen and (max-width: 768px) {
            padding: 25px;

  }
`


export const Conversion = styled.div`
 max-width: 148px;
      color: black;
      font-size: 18px;
      letter-spacing: 0%;
      text-align: center;
      font-family: Montserrat, sans-serif;
      padding-bottom: 20px;
`


export const Switch = styled.div`
   display: flex;
      flex-direction: row;
      align-content: space-around;
      max-width: 350px;
      border-radius: 8px;
      border-color: rgba(111, 111, 111, 1);
      border-width: 1px;
      border-style: solid;
      margin-bottom: 20px;
`


export const BuySwitchActive = styled.div`
max-width: 168px;
      color: rgba(26, 26, 26, 1);
      font-size: 18px;
      letter-spacing: 0%;
      text-align: center;
      font-family: Montserrat, sans-serif;
      font-weight: bold;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 50px;
      width: 160px;
      margin-right: 10px;
      border-radius: 8px;
      background-color: #40F48B;
      box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.3);
      cursor: pointer;
      border: 1px solid rgba(0, 0, 0, 0.25); 
`

export const BuySwitchInActive = styled.div`
 max-width: 168px;
      color: rgba(0, 0, 0, 1);
      font-size: 18px;
      text-align: center;
      font-weight: bolder;
      font-family: Montserrat, sans-serif;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 50px;
      width: 160px;
      border-radius: 8px;
      cursor: pointer;
      background-color: white;
      overflow: visible;
      border: 1px solid grey;    
      &:hover{
          color: green;
      }
`



export const SellSwitchInactive = styled.div`
 max-width: 168px;
      color: rgba(0, 0, 0, 1);
      font-size: 18px;
      text-align: center;
      font-weight: bolder;
      font-family: Montserrat, sans-serif;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 50px;
      width: 160px;
      border-radius: 8px;
      cursor: pointer;
      background-color: white;
      overflow: visible;
      border: 1px solid grey;    
      &:hover{
          color: red;
      }
    
`

export const SellSwitchActive = styled.div`
 max-width: 168px;
      color: white;
      font-size: 18px;
      text-align: center;
      font-weight: bolder;
      font-family: Montserrat, sans-serif;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 50px;
      width: 160px;
      border-radius: 8px;
      cursor: pointer;
      background-color: red;
      overflow: visible;
      border: 1px solid grey;    
      box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.3);

      
    
`

export const AmountField = styled.div`
 display: flex;
      flex-direction: row;
      max-width: 330px;
      margin-bottom: 20px;
      align-self: flex-start;

`

export const Input = styled.input`
 width: 225px;
      color: rgba(0, 0, 0, 1);
      font-size: 20px;
      letter-spacing: 0%;
      text-align: center;
      font-family: Montserrat, sans-serif;
      display: flex;
      flex-direction: row;
      justify-content: center;
      border-radius: 8px;
      padding-top: 12px;
      padding-bottom: 12px;
      padding-right: 12px;
      padding-left: 12px;
      margin-right: 20px;

      border-color: rgba(139, 64, 244, 1);
      border-width: 2px;
      border-style: solid;
      box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.25);
      cursor: pointer;


`

export const Dropdown = styled.div`
  display: flex;
      align-self: flex-end;
      flex-direction: row;
      max-width: 93px;
      width: 90px;
      justify-content: center;
      border-radius: 8px;
      padding-top: 12px;
      padding-bottom: 12px;
      padding-right: 6px;
      padding-left: 6px;
      border-color: rgba(111, 111, 111, 1);
      border-width: 2px;
      border-style: solid;
      box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.25);
      cursor: pointer;


`

export const CKBText = styled.text`
color: rgba(0, 0, 0, 1);
      font-size: 16px;
      letter-spacing: 0%;
      text-align: left;
      font-family: Montserrat, sans-serif;
`

export const DownArrowIcon = styled(DownArrowAlt)` 
border: solid black;
  border-width: 0 3px 3px 0;
  padding:3px;

`


export const Percentages = styled.div`
display: flex;
      flex-direction: row;
      max-width: 336px;
      width: 330px;
      border-radius: 8px;
      border-color: rgba(111, 111, 111, 1);
      border-width: 1px;
      border-style: solid;
      margin-bottom: 20px;
      box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.25);
`

export const Percent25 = styled.div`
 max-width: 84px;
      color: rgba(26, 26, 26, 1);
      font-size: 18px;
      letter-spacing: 0%;
      text-align: center;
      font-family: Montserrat, sans-serif;
      display: flex;
      flex-direction: row;
      justify-content: center;
      border-radius: 8px;
      padding-top: 1px;
      padding-bottom: 1px;
      padding-right: 22px;
      padding-left: 22px;
      background-color: rgba(64, 244, 139, 1);
      cursor: pointer;
`
export const Percent50 = styled.div`
 max-width: 84px;
      color: rgba(128, 128, 128, 1);
      font-size: 18px;
      letter-spacing: 0%;
      text-align: center;
      font-family: Montserrat, sans-serif;
      display: flex;
      flex-direction: row;
      justify-content: center;
      border-radius: 8px;
      padding-top: 1px;
      padding-bottom: 1px;
      padding-right: 21px;
      padding-left: 21px;
      cursor: pointer;
`

export const Percent75 = styled.div`
  max-width: 84px;
      color: rgba(128, 128, 128, 1);
      font-size: 18px;
      letter-spacing: 0%;
      text-align: center;
      font-family: Montserrat, sans-serif;
      display: flex;
      flex-direction: row;
      justify-content: center;
      border-radius: 8px;
      padding-top: 1px;
      padding-bottom: 1px;
      padding-right: 21px;
      padding-left: 21px;
      cursor: pointer;
`

export const Percent100 = styled.div`
 max-width: 84px;
      color: rgba(128, 128, 128, 1);
      font-size: 18px;
      letter-spacing: 0%;
      text-align: center;
      font-family: Montserrat, sans-serif;
      display: flex;
      flex-direction: row;
      justify-content: center;
      border-radius: 8px;
      padding-top: 1px;
      padding-bottom: 1px;
      padding-right: 21px;
      padding-left: 21px;
      cursor: pointer;
`



export const TotalAmountContainer = styled.div`
 display: flex;
      flex-direction: column;
      max-width: 336px;
      width: 90%;
      margin-bottom: 20px;
      border-radius: 8px;

      box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.25);
`


export const TotalAmountField = styled.div`
display: flex;
      flex-direction: column;
      max-width: 336px;
      border-radius: 8px;
      padding-top: 12px;
      padding-bottom: 12px;
      padding-right: 12px;
      padding-left: 12px;
      border-color: rgba(111, 111, 111, 1);
      border-width: 2px;
      border-style: solid;
`

export const Amount = styled.div`
 max-width: 312px;
      color: rgba(0, 0, 0, 1);
      font-size: 18px;
      letter-spacing: 0%;
      text-align: center;
      font-family: "Poppins";
`

export const PurchaseButtonContainer = styled.div`
  display: flex;
      flex-direction: column;
      max-width: 336px;
      width: 100%;
      box-shadow: 0px 5px 5px 0px #7777;
      border-radius: 20px;
      height: 55px;
`


export const PurchaseButton = styled.div`
display: flex;
      flex-direction: column;
      max-width: 336px;
      height: 55px;
      border-radius: 8px;
      padding-top: 12px;
      padding-bottom: 12px;
      padding-right: 12px;
      padding-left: 12px;
      background-color: rgba(64, 244, 139, 1);
      align-items: center;
      cursor: pointer;      
      border: 1px solid rgba(64, 244, 139, 1);  
`

export const PurchaseMKTText = styled.div`
 color: rgba(26, 26, 26, 1);
      font-size: 20px;
      letter-spacing: 0%;
      width: 100px;
      margin-top: 5px;
      text-align: center;
      font-family: Montserrat, sans-serif;
      font-weight: bold;
`

export const SellButton = styled.div`
 display: flex;
      flex-direction: column;
      max-width: 336px;
      height: 55px;
      border-radius: 8px;
      padding-top: 12px;
      padding-bottom: 12px;
      padding-right: 12px;
      padding-left: 12px;
      background-color: red;
      align-items: center;
      cursor: pointer;      
      border: 1px solid red;   
`


export const SellMKTText = styled.div`
color: white;
      font-size: 20px;
      letter-spacing: 0%;
      width: 100px;
      margin-top: 5px;
      text-align: center;
      font-family: Montserrat, sans-serif;
      font-weight: bold;
`







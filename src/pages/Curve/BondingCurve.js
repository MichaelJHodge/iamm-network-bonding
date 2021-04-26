import React from 'react';
import {
  BondingCurveContainer,
  PurchaseColumn,
  ChartContainer,
  PurchaseContainer,
  WalletContainer,
  CurveOfferingHeader,
  HeaderTitle,
  HeaderAlert,
  ChartDetailsRow,
  BuyPrice,
  Reserve,
  Issuance,
  Supply,
  ConnectWallet,
  CreateWallet,
  ImportWallet,
  Switch,
  Conversion,
  BuySwitch,
  SellSwitch,
  AmountField,
  Input,
  Dropdown,
  CKBText,
  Percentages, 
  Percent25,
  Percent50,
  Percent75,
  Percent100,
  TotalAmountContainer,
  TotalAmountField,
  Amount,
  PurchaseButtonContainer,
  PurchaseButton,
  PurchaseMKTText,

} from "../Curve/BondingCurve.elements"

import AreaChart from '../Curve/components/graph'


export default function BondingCurve() { 
  return (
    <>       
        <CurveOfferingHeader>
        <HeaderAlert>!</HeaderAlert>
        <HeaderTitle>Initial Bonding Curve Offering</HeaderTitle>
      </CurveOfferingHeader>
     <BondingCurveContainer>
        <ChartContainer>
         <ChartDetailsRow>
          <BuyPrice>Buy Price </BuyPrice>
          <Reserve> Reserve</Reserve>
          <Issuance>Curve Issuance</Issuance>
          <Supply>Total Supply</Supply>
         </ChartDetailsRow>
          <AreaChart/> 

 
        </ChartContainer>
        <PurchaseColumn>
            <WalletContainer>
            <ConnectWallet>Connect Wallet</ConnectWallet>
            <ImportWallet>Import Wallet</ImportWallet>
            <CreateWallet>Create Wallet</CreateWallet>
            </WalletContainer>
            <PurchaseContainer>
              <Conversion>1 MKT = 678 CKB</Conversion>
              <Switch>
              <BuySwitch>BUY </BuySwitch>
              <SellSwitch>SELL</SellSwitch>
              </Switch>
              <AmountField>
                <Input type="text" value="123, 456"/>
                <Dropdown>
                  <CKBText>$CKB</CKBText>
                </Dropdown>
              </AmountField>

              <Percentages>
              <Percent25>25%</Percent25>
              <Percent50>50%</Percent50>
              <Percent75>75%</Percent75>
              <Percent100>100%</Percent100>

              </Percentages>

              <TotalAmountContainer>
                <TotalAmountField>
                  <Amount>83,703,168 $CKB</Amount>
                </TotalAmountField>
              </TotalAmountContainer>

              <PurchaseButtonContainer>
                <PurchaseButton>
                  <PurchaseMKTText>BUY MKT</PurchaseMKTText>
                </PurchaseButton>
              </PurchaseButtonContainer>
            </PurchaseContainer>
        </PurchaseColumn>

     </BondingCurveContainer>
    </>

  );
}


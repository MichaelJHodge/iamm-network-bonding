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
  Supply
} from "../Curve/BondingCurve.elements"




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
        

        </ChartContainer>
        <PurchaseColumn>
            <WalletContainer>

            </WalletContainer>
            <PurchaseContainer>
              
            </PurchaseContainer>
        </PurchaseColumn>

     </BondingCurveContainer>
    </>
  );
}


import React from 'react';
import {
  BondingCurveContainer,
  PurchaseColumn,
  ChartContainer,
  PurchaseContainer,
  WalletContainer,
  CurveOfferingHeader,
  HeaderTitle,
  HeaderAlert
} from "../Curve/BondingCurve.elements"




export default function BondingCurve() {
  return (
    <>       
        <CurveOfferingHeader>
        <HeaderAlert>!</HeaderAlert>
        <HeaderTitle>Initial Bonding Curve Offering</HeaderTitle>
      </CurveOfferingHeader>
     <BondingCurveContainer>
        <ChartContainer/>
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


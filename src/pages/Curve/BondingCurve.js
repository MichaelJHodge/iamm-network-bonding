import React, {Component }from 'react';
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
  BuySwitchActive,
  SellSwitchInactive,
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
  AreaChartContainer,

} from "../Curve/BondingCurve.elements"

import AreaChart from '../Curve/components/graph'



class BondingCurve extends Component {

  state = {
    selectedIndex: 0
  };

  handleSelect = index => {
    this.setState({ selectedIndex: index });
  };

  handleButtonClick = () => {
    this.setState({ selectedIndex: 0 });
  };


  render(){
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

         <AreaChartContainer>
         <AreaChart/> 
         </AreaChartContainer>

 
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
             
             <BuySwitchActive>BUY</BuySwitchActive>
             
             
              <SellSwitchInactive>SELL</SellSwitchInactive>
             
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
    )
  }
}

export default BondingCurve
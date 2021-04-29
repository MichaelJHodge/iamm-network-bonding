import React, { Component,  } from 'react';
import "../Curve/curve.css"
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
  // BuySwitchActive,
  // SellSwitchInactive,
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
  // PurchaseButton,
  // PurchaseMKTText,
  AreaChartContainer,
  // SellMKTText

} from "../Curve/BondingCurve.elements"

import LineChart from '../Curve/components/chart'

import Tour from "reactour";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import {tourConfig} from "../../components/Onboarding/Onboarding.js"
 

class BondingCurve extends Component {

  constructor(){
    super();
    
    this.state = {
      switchID: 1,
      isTourOpen: true,
    }

    this.setSwitchID = this.SwitchID.bind(this);
  }

 
  disableBody = target => disableBodyScroll(target);
  enableBody = target => enableBodyScroll(target);

  closeTour = () => {
    this.setState({ isTourOpen: false });
  };

  openTour = () => {
    this.setState({ isTourOpen: true });
  };

  SwitchID(id){
    this.setState({switchID: id});
  }

  render(){

    const { isTourOpen } = this.state;

  
    return (
<>       

          <Tour
          onRequestClose={this.closeTour}
          steps={tourConfig}
          isOpen={isTourOpen}
          maskClassName="mask"
          className="helper"
          rounded={5}
          accentColor={"#40F48B"}
          onAfterOpen={this.disableBody}
          onBeforeClose={this.enableBody}
         
        />

        <CurveOfferingHeader>
        <HeaderAlert>!</HeaderAlert>
        <HeaderTitle>Initial Bonding Curve Offering</HeaderTitle>

        </CurveOfferingHeader> 



       <BondingCurveContainer data-tut="Main-Container">


        <ChartContainer data-tut="Line-Chart">

         <ChartDetailsRow>
          <BuyPrice>Buy Price</BuyPrice>
          <Reserve> Reserve</Reserve>
          <Issuance>Curve Issuance</Issuance>
          <Supply>Total Supply</Supply>
         </ChartDetailsRow>

         <AreaChartContainer >

         <LineChart/>    

         </AreaChartContainer>

 
        </ChartContainer>


        <PurchaseColumn>

            <WalletContainer data-tut="Wallets">
            <ConnectWallet>Connect Wallet</ConnectWallet>
            <ImportWallet>Import Wallet</ImportWallet>
            <CreateWallet>Create Wallet</CreateWallet>
            </WalletContainer>

            <PurchaseContainer>
              <Conversion>1 MKT = 678 CKB</Conversion>

              <Switch>    

      
            <button className={this.state.switchID === 1 ? "button1 active" : "button1 inactive"} onClick={() => this.SwitchID(1)} 
            type="buyButton" ref="button1">
              BUY
            </button>
            
            <button className={this.state.switchID === 2 ? "button2 active" : "button2 inactive"} onClick={() => this.SwitchID(2)} 
              ref="button2" type="sellButton">
                SELL
              </button>
        
              {/* 
             <BuySwitchActive>BUY</BuySwitchActive>
              <SellSwitchInactive>SELL</SellSwitchInactive>      */}
                    
              </Switch>

              <AmountField>
                <Input type="text" value="123, 456"/>
                <Dropdown>
                  <CKBText>$CKB</CKBText>
                </Dropdown>
              </AmountField>

              <Percentages>
              <Percent25 className={this.state.switchID === 1 ? "button1 active" : "button1 inactive"} type='buyPercent25'>25%</Percent25>
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

              <button className={this.state.switchID === 1 ? "button1 active" : "button1 inactive"} type='purchaseMKTButton'>

              <text className={this.state.switchID === 1 ? " active" : " inactive"} type="purchaseMKT">

              {this.state.switchID === 1 ? 'BUY MKT' : "SELL MKT"}

              </text>

              


              </button>

                {/* <PurchaseButton>
                  <PurchaseMKTText>BUY MKT</PurchaseMKTText>
                </PurchaseButton> */}

                
              </PurchaseButtonContainer>
            </PurchaseContainer>
        </PurchaseColumn>


     </BondingCurveContainer>
    </>
    )
  }
}



export default BondingCurve
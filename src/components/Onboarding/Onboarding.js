
import {TipContainer, TipHeader, TipText} from "./Onboarding.elements"


export const tourConfig = [
    {
      selector: '[data-tut="Main-Container"]',
      content: () => (
        <div>
          <TipContainer>
          <TipHeader> Get your MKT using our bonding curve app</TipHeader>
          <TipText> This app allows users to issue new MKT by depositing other reserve currencies in the contract</TipText>
  
          </TipContainer>
          
        </div>
      ),
      style :{ 
        backgroundColor: "rgba(139, 64, 244, 1)",
        color: "white"
      }
     
    },
    {
      selector: '[data-tut="Line-Chart"]',
      content: () => (
        <div>
          <TipContainer>
          <TipHeader> Understand the curve</TipHeader>
          <TipText> Our MKT obnding curve was designed to reward early adopters with lower costs.</TipText>
  
          </TipContainer>
          
        </div>
      ),
      style: {
        backgroundColor: "rgba(139, 64, 244, 1)",
        color: "white"
      }
    },
    {
      selector: '[data-tut="Wallets"]',
      content: () => (
        <div>
          <TipContainer>
          <TipHeader> Connect your wallet</TipHeader>
          <TipText> Connect, import, or create your own wallet to start interacting with our bonding curve.</TipText>
  
          </TipContainer>
          
        </div>
      ),
      style: {
        backgroundColor: "rgba(139, 64, 244, 1)",
        color: "white"
      }
    },
  ]
import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Button } from '../../Styles';
import {
  InfoSec,
  InfoColumn,
  TextWrapper,
  Heading,
  Subtitle,
} from './InfoSection.elements';

function InfoSection({
  primary,
  headline,
  buttonLabel,
 
}) {
  const creatorStyle = {
 color: "#40F48B",
  }
  
  return (
    <>
      <InfoSec>
        <Container>
            <InfoColumn>
              <TextWrapper>
                <Heading>{headline}</Heading>
                <Subtitle>Liberating the <text style={creatorStyle}> creator </text> economy </Subtitle>
                <Link to='/curve'>
                  <Button big fontBig primary={primary}>
                    {buttonLabel}
                  </Button>
                </Link>
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
            
            </InfoColumn>
        </Container>
      </InfoSec>
    </>
  );
}

export default InfoSection;
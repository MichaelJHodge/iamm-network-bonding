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
  description,
  buttonLabel,
 
}) {
  return (
    <>
      <InfoSec>
        <Container>
            <InfoColumn>
              <TextWrapper>
                <Heading>{headline}</Heading>
                <Subtitle>{description}</Subtitle>
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
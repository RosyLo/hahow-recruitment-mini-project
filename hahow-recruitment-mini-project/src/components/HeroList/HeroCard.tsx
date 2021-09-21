import React from 'react';
import Pic from './Pic';
import styled from 'styled-components';

const StyledHeroCard = styled.div`
  width: 250px;
  border: 1px solid black;
  height: 350px;
`;

const HeroCard = () => {
  return (
    <StyledHeroCard>
      <Pic />
    </StyledHeroCard>
  );
};

export default HeroCard;

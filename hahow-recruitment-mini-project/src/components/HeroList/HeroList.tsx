import React from 'react';
import styled from 'styled-components';
import fetchHeroList from '../../redux/actions/fetchHeros';
import { connect, ConnectedProps } from 'react-redux';
import {
  ReduxType,
  mapStateToProps,
  mapDispatchToProps,
} from './handler/HeroCard.handler';
import HeroCard from './HeroCard';

const StyledHeroList = styled.div`
  width: 80%;
  height: 500px;
  background: pink;
  border: 1px solid black;
  display: grid;
  margin: auto;
  padding: 30px;
`;

const HeroList = () => {
  return (
    <StyledHeroList>
      <HeroCard />
    </StyledHeroList>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(HeroList);

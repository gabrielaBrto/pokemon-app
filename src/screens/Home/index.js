import React, { useContext, useEffect } from 'react'
import Search from '../../components/Search';
import Items from '../../components/Items';
import Header  from '../../components/Header';
import { 
  Container, 
  Title, 
  TitleContainer
} from './style';

const Home = () => {

  return (
    <Container>
      <Header />
      <TitleContainer>
        <Title>More than 250 Pokemons for you to choose your favorite</Title>
      </TitleContainer>
      <Search />
      <Items />
    </Container>
  )
};

export default Home;

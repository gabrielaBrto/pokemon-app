import React, { useState, useEffect, useContext } from 'react'
import { View, Text } from 'react-native';
import { 
  Container, 
  CardHeader, 
  CardBody, 
  ImageContainer, 
  Photo 
} from './style';
import PokemonContext from '../../context/pokemon/pokemonContext';
import Header from '../../components/Header';

const Item = ({route}) => {
    const { id, color } = route.params;
    const pokemonContext = useContext(PokemonContext);
    const { getPokemon, pokemon, loading } = pokemonContext;
    
    // useEffect(() => {
    //   getPokemon(id)
    // }, [pokemon])
   
  return (
    <Container>
        <Header />
        <View style={{marginTop: 50}}>
          <CardHeader color={color}>
            <ImageContainer color={color+'Circle'}><Text>hello</Text></ImageContainer>
            <Text>{id}</Text>
          </CardHeader>
          <CardBody>
            <Text>ola</Text>
          </CardBody>
        </View>
    </Container>

  )
}
export default Item;

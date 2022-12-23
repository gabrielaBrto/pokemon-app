import React, { useContext, useEffect } from 'react';
import { ActivityIndicator} from "react-native";
import { ItemList, Container } from './style';
import Card from '../Card';
import PokemonContext from '../../context/pokemon/pokemonContext';

const Items = () => {
    const pokemonContext = useContext(PokemonContext);
    const { getPokemons, pokemons, loading } = pokemonContext;
    
    useEffect(() => {
       getPokemons();
    }, [])
   

  if(loading){
        return  <ActivityIndicator size="large" />;
    }else{
        return (
          <Container>
              <ItemList
              data={pokemons}
              numColumns={2}
              keyExtractor={(item, index) => index}
              renderItem={({ index, item }) => (
                <Card key={index} pokemon={item} />
              )}
            />
          </Container> 
          
        )
    }
}

export default Items;

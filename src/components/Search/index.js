import React, { useContext, useState } from 'react';
import { SearchInput, SearchContainer, SearchButton, Container } from './style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import PokemonContext from '../../context/pokemon/pokemonContext';

const Search = () => {
    const pokemonContext = useContext(PokemonContext);
    const { getPokemons, searchPokemons } = pokemonContext;
    const [search, setSearch] = useState('');


  const _onSubmit = () => {
    if(search){
        searchPokemons(search);
        setSearch('');
    }else{
        getPokemons();
    }

  };

    return(
        <Container>
            <SearchContainer>
                <Ionicons name="ios-search" color="#3663AD" size={25} style={{padding:2, marginLeft: 10, position: 'relative', top:-3}} />
                <SearchInput 
                    placeholder="Search Pokémon" 
                    placeholderTextColor="#3663AD" 
                    onChangeText={(e) => setSearch(e)}
                    value={search}
                />
                <SearchButton onPress={() => _onSubmit()}><Ionicons name="ios-arrow-forward" color="#FFF" size={25} style={{padding:3}} /></SearchButton>
            </SearchContainer>
        </Container>  
    )
};

export default Search;

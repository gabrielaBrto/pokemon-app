import React, { useReducer, useState } from 'react';
import PokemonContext from './pokemonContext';
import PokemonReducer from './PokemonReducer';
import axios from 'axios';
import {
    GET_POKEMONS,
    GET_POKEMON,
    SEARCH_POKEMONS
} from '../types';


const PokemonState = props => {
    const initialState = {
        pokemons: [],
        pokemon: {},
        loading: false
    };

    const [state, dispatch] = useReducer(PokemonReducer, initialState);

    const getPokemons = async () => {
       //const res = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=3')
       const endpoints = []; 
      
       const res = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=14")
       res.data.results.forEach((data) => {
           endpoints.push(data.url)
        });
       const response = await axios.all(endpoints.map((endpoint) => axios.get(endpoint)));
    
       dispatch({ type: GET_POKEMONS, payload: response });
       
    };

    const searchPokemons = async search => {
       //setLoading(true);
        var data = [];
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${search}`);
        data.push(res);
        dispatch({ 
            type: SEARCH_POKEMONS,
            payload:data
        });
    }

    const getPokemon = async (id) => {
       // setLoading();
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        console.log(res);
        dispatch({ type: GET_POKEMON, payload: res});
    };

    //Set Loading
   // const setLoading = () => dispatch({ type: SET_LOADING });

    return <PokemonContext.Provider 
    value={{ 
        pokemons: state.pokemons,
        pokemon: state.pokemon,
        loading: state.loading,
        searchPokemons,
        getPokemons,
        getPokemon
    }}>
    {props.children}
    </PokemonContext.Provider>
}

export default PokemonState;

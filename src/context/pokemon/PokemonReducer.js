import {
    GET_POKEMONS,
    GET_POKEMON,
    SEARCH_POKEMONS
} from '../types';

export default (state, action) => {
    switch(action.type){
        case GET_POKEMON:
            return { ...state, pokemon: action.payload, loading: false }
        case GET_POKEMONS:
            return { ...state, pokemons: action.payload, loading: false };
        case SEARCH_POKEMONS:
            return { ...state, pokemons: action.payload, loading: false }
        default:
            return state;
    }
}

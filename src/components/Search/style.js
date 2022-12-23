import styled from 'styled-components/native'
import { TextInput, TouchableOpacity } from "react-native";


export const Container = styled(TouchableOpacity)`  
    margin-left:10px;
`;

export const SearchContainer = styled.View`
    flex-direction: row;
    border: 1px;
    border-radius:20px;
    border-color: #3663AD; 
    width: 82%;
    justify-content: center;
    align-items:center;
    padding:3px;
`;

export const SearchInput = styled.TextInput`
    flex: 1;
    color: #3663AD;
`;

export const SearchButton = styled(TouchableOpacity)`
    margin-right: 5px;
    width: 35px;
    height: 35px;
    background-color: #3663AD;
    border-radius:20px;
    color: #fff;
`;
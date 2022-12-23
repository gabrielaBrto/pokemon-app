import styled from 'styled-components/native'
import { TextInput, TouchableOpacity } from "react-native";
import colors from '../../types/colors';

export const Container = styled(TouchableOpacity)`
    margin-left:15px;
    height:220px;
    width: 160px;
    background-color:${props => colors[props.color] || '#90639e'};
    border-radius:20px;
    align-items: center;
    justify-content: center;
    margin-bottom:10px;
    margin-top:30px;
`;

export const ContainerId = styled.View`
    background-color: #FFCB05;
    width: 60px;
    height:24px;
    border-radius: 20px;
    justify-content: center;
    align-items:center;
    margin-bottom:10px;
`;

export const IdText = styled.Text`
    color: #21386E;
    font-size:17px;
`;

export const NameText = styled.Text`
    color: #FFF;
    font-weight:bold;
    font-size:20px;
`;

export const TypeText = styled.Text`
    color: ${props => props.color};
    font-size:12px;
`;

export const TypeContainer = styled.View`
    flex-direction: row;
    margin-bottom:30px;
    
`;

export const TypeContent = styled.View`
    backgroundColor: ${props => colors[props.color] || '#d289d6'};
    font-size:17px;
    border-radius: 10px;
    height: 20px;
    width: 60px;
    justify-content: center;
    align-items: center;
    margin-left: 4px;
    
`;

export const ImageContainer = styled.View`
    height: 60%;
    width: 75%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color:${props => colors[props.color] || '#d289d6'};
    border-radius:90px;
`;

export const Photo = styled.Image`
    width: 100%;
    height: 100%;
`;

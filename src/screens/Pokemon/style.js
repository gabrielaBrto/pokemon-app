import styled from 'styled-components/native';
import colors from '../../types/colors';

export const Container = styled.View`
// display: flex;
// flex-direction: column;
// align-items: flex-start;
height: 100%;
width: 400px;
padding: 0;
`;

export const CardHeader = styled.View`
background-color: ${props => colors[props.color]};
width: 80%; 
height: 20%; 
align-items: center; 
margin-left:20px;
border-top-left-radius: 30px;
border-top-right-radius: 30px;
`;

export const CardBody = styled.View`
background-color: #e0e0e0;
width: 80%; 
height: 60%; 
align-items: center; 
margin-left:20px;
border-bottom-left-radius: 30px;
border-bottom-right-radius: 30px;
`;

export const ImageContainer = styled.View`
    height: 110%;
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    marginRight: 50%;
    margin-top:30px;
    background-color:${props => colors[props.color]};
    border-radius:90px;
`;

export const Photo = styled.Image`
    width: 100%;
    height: 100%;
`;
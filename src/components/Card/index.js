import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { 
  ImageContainer, 
  ContainerId, 
  Container,
  IdText,
  Photo,
  NameText,
  TypeContainer,
  TypeContent,
  TypeText
} from './style';

const Card = (props) => {
    const navigation = useNavigation();
    return(
        <Container 
          color={props.pokemon.data.types[0].type.name}
          onPress={() => {
            navigation.navigate('Pokemon', {
              id: props.pokemon.data.id,
              color: props.pokemon.data.types[0].type.name
            });
          }}
        >
          <ContainerId>
            <IdText>#{props.pokemon.data.id}</IdText>
          </ContainerId>
          <ImageContainer color={props.pokemon.data.types[0].type.name+'Circle'}>
            <Photo source={{ uri: props.pokemon.data.sprites.other['official-artwork'].front_default }} />
          </ImageContainer>
            <NameText>{props.pokemon.data.name}</NameText>
            <TypeContainer>
             {props.pokemon.data.types.map((type, i) => (
                <TypeContent color={props.pokemon.data.types[0].type.name+'Text'}>
                  <TypeText>{type.type.name}</TypeText>
                </TypeContent>
              ))}
            </TypeContainer>
        </Container>  
    )
};

export default Card;

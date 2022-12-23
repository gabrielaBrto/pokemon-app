import React from 'react'
import { Container, ImageContainer, Photo } from './style';

const Header = () => {
  return (
    <Container>
        <ImageContainer>
            <Photo source = {require('../../../assets/International_Pokémon_logo.png')} />
        </ImageContainer>
      </Container>
  )
}

export default Header;

import React, { useState, useEffect } from 'react';
import * as Font from 'expo-font';
import { TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { AreaBtn, AreaTitleIcon, Body, BtnText, BtnType, Container, Description, Line, Title } from "./styles"


export default function Page() {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        'Inter': require('../assets/fonts/Inter-Regular.ttf'),
      });
      setFontLoaded(true);
    }

    loadFonts();
  }, []);

  if (!fontLoaded) {
    return null;
  }

  return (
    <Container>
      <AreaTitleIcon>
        <Title>SocialGPT</Title>
        <TouchableOpacity>
          <Ionicons name='menu' size={30} color="#333333" />
        </TouchableOpacity>
      </AreaTitleIcon>
      <Description>Selecione o tipo de conteúdo:</Description>
      <Line />
      <Body>
        <AreaBtn>
          <BtnType>
            <BtnText>Post</BtnText>
            <BtnText>Instagram</BtnText>
          </BtnType>
          <BtnType color="#E83F5B">
            <BtnText>Story</BtnText>
            <BtnText>Instagram</BtnText>
          </BtnType>
        </AreaBtn>

        <AreaBtn>
          <BtnType color="#9BDBB1">
            <BtnText color="#4A4A4A">Hashtags</BtnText>
            <BtnText color="#4A4A4A">Instagram</BtnText>
          </BtnType>
          <BtnType color="#FFBB43">
            <BtnText color="#4A4A4A">Legenda</BtnText>
            <BtnText color="#4A4A4A">Instagram</BtnText>
          </BtnType>
        </AreaBtn>

        <AreaBtn>
          <BtnType color="#D946EF">
            <BtnText>Carrossel</BtnText>
            <BtnText>Instagram</BtnText>
          </BtnType>
          <BtnType color="#5965E0">
            <BtnText>Título</BtnText>
            <BtnText>YouTube</BtnText>
          </BtnType>
        </AreaBtn>

        <AreaBtn>
          <BtnType color="#FFB347">
            <BtnText color="#4A4A4A">Descrição</BtnText>
            <BtnText color="#4A4A4A">YouTube</BtnText>
          </BtnType>
          <BtnType color="#33CC95">
            <BtnText color="#4A4A4A">Chamada</BtnText>
            <BtnText color="#4A4A4A">para Ação</BtnText>
          </BtnType>
        </AreaBtn>

        <AreaBtn>
          <BtnType width="330px">
            <BtnText>Pesquisa Geral</BtnText>
          </BtnType>
        </AreaBtn>
      </Body>
      <Line />
    </Container>
  );
}
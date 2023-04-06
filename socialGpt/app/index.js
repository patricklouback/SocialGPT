import React, { useState, useEffect } from 'react';
import * as Font from 'expo-font';
import { useRouter } from 'expo-router';
import { TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { AreaBtn, AreaTitleIcon, Body, BtnText, BtnType, Container, Description, Line, Title } from "./styles"
import { ModalComponent } from '../components/Modal';


export default function Page() {
  const router = useRouter();

  const [fontLoaded, setFontLoaded] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

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
        <TouchableOpacity onPress={()=>{setModalVisible(true)}}>
          <Ionicons name='information-circle' size={35} color="#333333" />
        </TouchableOpacity>
      </AreaTitleIcon>
      <Description>Selecione o tipo de conteúdo:</Description>
      <Line />

      <ModalComponent modalVisible={modalVisible} fechar={() => {setModalVisible(false)}}/>

      <Body>
        <AreaBtn>
          <BtnType onPress={() => router.push("./screens/PostInstagram")}>
            <BtnText>Post</BtnText>
            <BtnText>Instagram</BtnText>
          </BtnType>
          <BtnType color="#E83F5B" onPress={() => router.push("./screens/StoryInstagram")}>
            <BtnText>Story</BtnText>
            <BtnText>Instagram</BtnText>
          </BtnType>
        </AreaBtn>

        <AreaBtn>
          <BtnType color="#9BDBB1" onPress={() => router.push("./screens/HashtagsInstagram")}>
            <BtnText color="#4A4A4A">Hashtags</BtnText>
            <BtnText color="#4A4A4A">Instagram</BtnText>
          </BtnType>
          <BtnType color="#FFBB43" onPress={() => router.push("./screens/LegendaInstagram")}>
            <BtnText color="#4A4A4A">Legenda</BtnText>
            <BtnText color="#4A4A4A">Post</BtnText>
          </BtnType>
        </AreaBtn>

        <AreaBtn>
          <BtnType color="#D946EF" onPress={() => router.push("./screens/CarrosselInstagram")}>
            <BtnText>Carrossel</BtnText>
            <BtnText>Instagram</BtnText>
          </BtnType>
          <BtnType color="#5965E0" onPress={() => router.push("./screens/TituloYouTube")}>
            <BtnText>Título</BtnText>
            <BtnText>YouTube</BtnText>
          </BtnType>
        </AreaBtn>

        <AreaBtn>
          <BtnType color="#FFB347" onPress={() => router.push("./screens/DescricaoYouTube")}>
            <BtnText color="#4A4A4A">Descrição</BtnText>
            <BtnText color="#4A4A4A">YouTube</BtnText>
          </BtnType>
          <BtnType color="#33CC95" onPress={() => router.push("./screens/ChamadaParaAcao")}>
            <BtnText color="#4A4A4A">Chamada</BtnText>
            <BtnText color="#4A4A4A">para Ação</BtnText>
          </BtnType>
        </AreaBtn>

        <AreaBtn>
          <BtnType onPress={() => router.push("./screens/PesquisaGeral")} width="330px">
            <BtnText>Pesquisa Geral</BtnText>
          </BtnType>
        </AreaBtn>
      </Body>
      <Line />
    </Container>
  );
}
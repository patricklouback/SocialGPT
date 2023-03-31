import React, { useState, useEffect } from 'react';
import * as Font from 'expo-font';
import { useRouter } from 'expo-router'
import { TouchableOpacity, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { AreaBtn, AreaBtn2, AreaResp, AreaTitleIcon, Body, BtnText, BtnType, Container, Description, Input, Line, Resp, Title } from "../styles"

const CHAT_GPD_API_KEY = process.env.CHAT_GPD_API_KEY;

export default function Page() {

  const router = useRouter();
  const [resposta,setResposta] = useState('Resp')
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        'Inter': require('../../../assets/fonts/Inter-Regular.ttf'),
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
      <TouchableOpacity onPress={() => router.push('../')}>
        <Ionicons name='arrow-back' size={35} color="#333333" />
      </TouchableOpacity>
      <Title>Pesquisa Geral</Title>
      <Description>Pergunte qualquer coisa que queira saber.</Description>
      <Line />
      <Input placeholder="Digite aqui..." placeholderTextColor="#3D3D3D" multiline={true} />
      <AreaBtn>
        <BtnType onPress={() => setResposta(CHAT_GPD_API_KEY)}>
          <BtnText>Pesquisar</BtnText>
        </BtnType>
      </AreaBtn>
      <Line />
      <AreaResp>
        <Resp>-- {resposta} --</Resp>
      </AreaResp>

      <AreaBtn2>
        <View>
          <BtnType width="144px" color="#FFB347">
            <BtnText color="#4A4A4A">Copiar Resposta</BtnText>
          </BtnType>
          <BtnType width="144px" color="#9BDBB1">
            <BtnText color="#4A4A4A">Outra Resposta</BtnText>
          </BtnType>
        </View>

        <BtnType width="144px" height="93px" color="#5965E0">
          <BtnText color="#FFF">Salvar Resposta</BtnText>
        </BtnType>
      </AreaBtn2>

      <Line />
      <BtnType width="100%" color="#E83F5B">
        <BtnText color="#FFF">Ver Pesquisas Salvas</BtnText>
      </BtnType>
    </Container>
  );
}
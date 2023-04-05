import React, { useState, useEffect } from 'react';
import * as Font from 'expo-font';
import { useRouter } from 'expo-router'
import { TouchableOpacity, View, ActivityIndicator, ScrollView } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import {
  AreaBtn, AreaBtn2, AreaResp, BtnText, BtnType,
  Container, Description, Input, Line, Resp, Title, Loading
} from "../styles"
import { ChatGpt } from '../../../utils/gpt';
import * as Clipboard from 'expo-clipboard';

export default function Page() {

  const router = useRouter();
  const [prompt, setPrompt] = useState('');
  const [text, setText] = useState('');
  const [resposta, setResposta] = useState('Resposta');
  const [fontLoaded, setFontLoaded] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        'Inter': require('../../../assets/fonts/Inter-Regular.ttf'),
      });
      setFontLoaded(true);
    }

    loadFonts();
  }, []);

  useEffect(() => {
    if (prompt != '') {
      setLoading(true);
      ChatGpt(prompt)
        .then(resposta => {
          setResposta("Você:\n" + prompt + "\n\n Resposta: " + resposta);
        })
        .finally(() => setLoading(false));
    }
  }, [prompt]);

  if (!fontLoaded) {
    return null;
  }

  function pesquisar() {
    setLoading(true)
    setPrompt(text);
    setText('');
  }

  function outraResposta() {
    setLoading(true)
    setPrompt(prompt + " outro(a)");
    setText('');
  }

  const copyToClipboard = async () => {
    await Clipboard.setStringAsync(resposta);
  };

  return (
    <Container>
      <TouchableOpacity onPress={() => router.push('../')}>
        <Ionicons name='arrow-back' size={35} color="#333333" />
      </TouchableOpacity>
      <Title>Pesquisa Geral</Title>
      <Description>Pergunte qualquer coisa que queira saber.</Description>
      <Line />
      <Input
        value={text}
        onChangeText={setText}
        placeholder="Digite aqui..."
        placeholderTextColor="#3D3D3D"
        multiline={true} />
      <AreaBtn>
        <BtnType
          onPress={pesquisar}
          disabled={loading}>
          {loading && <ActivityIndicator size="large" color="#DDD" />}
          {!loading && <BtnText>Pesquisar</BtnText>}

        </BtnType>
      </AreaBtn>
      <Line />
      <AreaResp>
        <ScrollView>
          <Resp>{resposta}</Resp>
        </ScrollView>
      </AreaResp>

      <AreaBtn2>
        <View>
          <BtnType onPress={copyToClipboard} width="144px" color="#FFB347">
            <BtnText color="#4A4A4A">Copiar Resposta</BtnText>
          </BtnType>
          <BtnType
            disabled={loading}
            onPress={outraResposta}
            width="144px"
            color="#9BDBB1">
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
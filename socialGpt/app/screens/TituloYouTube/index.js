import React, { useState, useEffect } from 'react';
import * as Font from 'expo-font';
import { useRouter } from 'expo-router'
import { TouchableOpacity, View, ActivityIndicator, ScrollView } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Picker } from '@react-native-picker/picker';
import { AreaBtn, AreaBtn2, AreaResp, AreaTitleIcon, Body, BtnText, BtnType, Container, Description, Input, Line, Resp, Title } from "../styles"
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
    setPrompt("Crie 5 opções de título para vídeo no Youtube que fala sobre " + text);
    setText('');
  }

  function outraResposta() {
    setLoading(true)
    if (prompt != '') {
      setPrompt(prompt + " outro(a)");
      setText('');
    }
  }

  const copyToClipboard = async () => {
    await Clipboard.setStringAsync(resposta);
  };

  return (
    <Container>
      <TouchableOpacity onPress={() => router.push('../')}>
        <Ionicons name='arrow-back' size={35} color="#333333" />
      </TouchableOpacity>
      <Title>Título para Vídeo</Title>
      <Description>Digite o assunto do seu vídeo para gerar um título:</Description>
      <Input
        value={text}
        onChangeText={setText}
        placeholder="Digite o assunto do vídeo..."
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
        <BtnType onPress={copyToClipboard} width="54px" color="#FFB347">
          <Ionicons name='copy' size={35} color="#333333" />
        </BtnType>
        <BtnType
          disabled={loading}
          onPress={outraResposta}
          width="54px"
          color="#9BDBB1">
          <Ionicons name='refresh-circle' size={35} color="#333333" />
        </BtnType>
      </AreaBtn2>

      <Line />

    </Container>
  );
}
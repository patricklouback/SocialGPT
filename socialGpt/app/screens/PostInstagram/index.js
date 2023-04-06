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
  const [selectedOption, setSelectedOption] = useState('duvidas_frequentes');

  const options = [
    { label: 'Perguntas Frequentes', value: 'duvidas_frequentes' },
    { label: 'Curiosidades Interessantes', value: 'curiosidades' },
    { label: 'Frases de Impacto', value: 'frases_efeito' },
    { label: 'Guias e Tutoriais', value: 'tutoriais' },
    { label: 'Promoções e Ofertas', value: 'promocoes' },
    { label: 'Lançamentos de Produtos', value: 'lancamentos' },
    { label: 'Incentivo à Compra', value: 'incentivo_compra' },
    { label: 'Bastidores e Histórias', value: 'bastidores' },
  ];

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
    setPrompt("Me dê 5 ideias de post de " + selectedOption + " para o Instagram, falando sobre " + text);
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
      <Title>Post para o Instagram</Title>
      <Description>Estas são os tipos mais comuns de posts:</Description>
      <Picker
        style={{ backgroundColor: "#5965E0", color: "#FFF" }}
        itemStyle={{ backgroundColor: "#8257E5", color: "#FFF" }}
        selectedValue={selectedOption}
        onValueChange={(itemValue, itemIndex) =>
          setSelectedOption(itemValue)
        }>
        <Picker.Item label={options[0].label} value={options[0].value} />
        <Picker.Item label={options[1].label} value={options[1].value} />
        <Picker.Item label={options[2].label} value={options[2].value} />
        <Picker.Item label={options[3].label} value={options[3].value} />
        <Picker.Item label={options[4].label} value={options[4].value} />
        <Picker.Item label={options[5].label} value={options[5].value} />
        <Picker.Item label={options[6].label} value={options[6].value} />
        <Picker.Item label={options[7].label} value={options[7].value} />
      </Picker>
      <Input
        value={text}
        onChangeText={setText}
        placeholder="Digite o assunto do post..."
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
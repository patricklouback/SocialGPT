import React, { useState, useEffect } from 'react';
import * as Font from 'expo-font';
import { useRouter } from 'expo-router'
import { TouchableOpacity, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Picker } from '@react-native-picker/picker';
import Checkbox from 'expo-checkbox';
import { AreaBtn, AreaBtn2, AreaResp, AreaTitleIcon, Body, BtnText, BtnType, Container, Description, Input, Line, Resp, Title } from "../styles"


export default function Page() {
  const router = useRouter();

  const [fontLoaded, setFontLoaded] = useState(false);
  const [selectedOption, setSelectedOption] = useState(0);
  const [isChecked, setChecked] = useState(false);

  const options = [
    { label: '01 Página', value: 1 },
    { label: '02 Páginas', value: 2 },
    { label: '03 Páginas', value: 3 },
    { label: '04 Páginas', value: 4 },
    { label: '05 Páginas', value: 5 },
    { label: '06 Páginas', value: 6 },
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

  if (!fontLoaded) {
    return null;
  }

  return (
    <Container>
      <TouchableOpacity onPress={() => router.push('../')}>
        <Ionicons name='arrow-back' size={35} color="#333333" />
      </TouchableOpacity>
      <Title>Carrossel de Imagens</Title>
      <Description>Escolha quantas páginas terá o seu Carrossel:</Description>
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
      </Picker>
      <AreaBtn>
        <Checkbox
          style={{ margin: 8, }}
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? "#E83F5B" : undefined}
        />
        <BtnText color="#3D3D3D">Com Título nas Páginas</BtnText>
      </AreaBtn>
      <Input placeholder="Digite aqui o assunto..." placeholderTextColor="#3D3D3D" multiline={true} />
      <AreaBtn>
        <BtnType>
          <BtnText>Pesquisar</BtnText>
        </BtnType>
      </AreaBtn>
      <Line />
      <AreaResp>
        <Resp>-- Resposta --</Resp>
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

        <View>
          <BtnType width="144px" color="#5965E0">
            <BtnText>Salvar Resposta</BtnText>
          </BtnType>
          <BtnType width="144px">
            <BtnText>Download .CSV</BtnText>
          </BtnType>
        </View>
      </AreaBtn2>
      <Line />
      <BtnType width="100%" color="#E83F5B">
        <BtnText color="#FFF">Ver Pesquisas Salvas</BtnText>
      </BtnType>

    </Container>
  );
}
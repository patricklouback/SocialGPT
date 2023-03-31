import { Text, TextInput, View, TouchableOpacity } from "react-native";
import styled from "styled-components";

export const Container = styled.View`
    flex: 1;
    padding: 70px 23px;
    background: #DDDDDD;
`;

export const Title = styled.Text`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 300;
    font-size: 32px;
    line-height: 58px;
    color: #333333;
`;

export const Description = styled.Text`
    margin-top: 15px;
    margin-left: 4px;
    margin-bottom: 15px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 300;
    font-size: 15px;
    line-height: 19px;
    color: #3D3D3D;
`;

export const Line = styled.View`
    border: 1px solid #B5B5B5;
    margin: 5px 0px;
`;

export const Input = styled.TextInput`
    width: 100%;
    height: 111px;
    background: rgba(130, 87, 229, 0.21);
    border-radius: 8px;
    padding: 15px;
    margin: 5px 0px;
`;

export const AreaBtn = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: flex-end;
    margin-bottom: 5px;
`;

export const AreaBtn2 = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 5px;
`;

export const BtnType = styled.TouchableOpacity`
    width: ${(props) => props.width || '112px'};
    height: ${(props) => props.height || '47px'};
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.color || '#8257E5'};
    border-radius: 8px;
    elevation: 5;
    margin: 3px 0px;
    
`;

export const BtnText = styled.Text`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: ${(props) => props.color || '#FFFFFF'};
`;

export const AreaResp = styled.View`
    width: 100%;
    height: 208px;
    background: rgba(255, 179, 71, 0.21);
    border-radius: 8px;
    padding: 15px;
    margin: 5px 0px;
    justify-content: center;
    align-items: center;
`;

export const Resp = styled.Text`
    color: #4A4A4A;
`;

export const AreaTitleIcon = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;
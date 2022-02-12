import React from "react";
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    background-color: #ffff;
    flex: 1;
    align-items: center;
    justify-content: center;
    padding: 24px;
    padding-top: 45%;
    position: relative;
`;
export const Text1 = styled.Text`
  justify-content: center;
  font-size: 25px;
  font-weight: 800;
  color: black;
  position: absolute;
  top: 80px;
`;
export const Text5 = styled.Text`
 margin-bottom: 10px;
`;


export const ContentAlert= styled.Text`
  margin-top: 20;
  flex-direction: row;
  justify-Content: center;
  align-Items: center;
`;


export const Circle = styled.View`
  width: 501px;
  height: 537px;
  border-bottom-right-radius: 425px;
  border-bottom-left-radius: 319px;
  position: absolute;
  top: -280.54px;
  left: -100px;
  
  background-color: rgba(255, 69, 0, 0.62);
`;


export const Texts = styled.Text`
  justify-content: center;
  font-size: 25px;
  font-weight: 900;
  margin-top:25px;
`;

export const Textes = styled.Text`
  justify-content: center;
  align-items: center;
  margin-left: 49px;
`;

export const FormContainer = styled.View`
  width: 343px;
  height: 459px;
  background-color: #fff;
  border-radius: 35px;
  align-items: center;
  justify-content: center;
  padding-bottom: 2%;
  elevation: 4;
`;


export const InputArea = styled.View`
  width: 100%;
  padding: 40px;
`;

export const Icon = styled.View`
 
`;


export const Messages = styled.Text`
  justify-content: center;
  align-items: flex-end;
  margin-top: 5px;
  margin-bottom: 15px;
  margin-left: 120px;
`;
export const Mensagem1 = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-right: 50px;
  width: 100%;
`;

export const Botao = styled.TouchableOpacity`
  height: 40px;
  margin-left: 55px;
  margin-right: 55px;
  background-color: #ff4500;
  border-radius: 35px;
  justify-content: center;
  align-items: center;
  elevation: 5;
`;
export const TextBottom = styled.Text`
    font-size: 18px;
    color: #000;
    font-weight: 900;
`;

export const Text2 = styled.Text`
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: 900;
  margin-left: 120px;
`;

export const RedeSocial = styled.SafeAreaView`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  height: auto;
  margin-top: 15px;
`;

export const Twi = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  /* border: 1px solid #23e; */
  border-radius: 18.5px;
  margin-left: 18px;

  //posicionar os icons no centro
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Face = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  border-radius: 18.5px;
  margin-right: 18px;

  //posicionar os icons no centro
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Texte = styled.Text`
  
`;

export const MensagemSemConta = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: center;
    margin-top: 50px;
    margin-bottom: 20px;
`;
export const Mensagem2 = styled.Text`
    font-size: 16px;
`;
export const Mensagem3Bold = styled.Text`
    font-size: 16px;
    font-weight: bold;
    margin-left: 5px;
`;

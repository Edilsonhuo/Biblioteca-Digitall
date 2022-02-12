import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  background-color: #fff;
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 24px;
  padding-top: 45%;
  position: relative;
`;

export const InputArea = styled.View`
  width: 100%;
  padding: 40px;
`;

export const Text1 = styled.Text`
  justify-content: center;
  font-size: 25px;
  font-weight: 800;
  color: black;
  position: absolute;
  top: 80px;
`;
export const Text = styled.Text``;

export const Circle = styled.View`
  width: 501px;
  height: 537px;
  /* width: 450px;
    height: 250px; */
  /* top: -68px;
  left: -21px; */
  border-bottom-right-radius: 425px;
  border-bottom-left-radius: 319px;
  /* border-bottom-right-radius: 270px; */
  position: absolute;
  top: -280.54px;
  left: -100px;
  background-color: rgba(255, 69, 0, 0.62);
`;

  export const Texts = styled.Text`
    justify-content: center;
    font-size: 20px;
    font-weight: 900;
    margin-top: 25px;
  `;

export const FormContainer = styled.View`
  width: 343px;
  height: 459px;
  background-color: #fff;
  border-radius: 35px;
  align-items: center;
  justify-content: center;
  elevation: 4;
`;

export const Botao = styled.TouchableOpacity`
  height: 40px;
  margin-left: 55px;
  margin-right: 55px;
  background-color: #fd7e14;
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

/* 
InputArea,
Mensagem1,
Botao,
TextBottom, MensagemSemConta,
Mensagem2, Mensagem3
*/

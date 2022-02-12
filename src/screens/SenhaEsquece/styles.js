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

export const LocationArea = styled.View`
  /* background-color: #4eadbe; */
  flex-direction: row;
  height: 50px;
  border-radius: 30px;
  align-items: center;
  padding-left: 30px;
  padding-right: 30px;
  margin-top: 30px;

  font-weight: 8000;
  margin-bottom: 15px;
  position: absolute;
  top: 5px;
  left: -10px;
`;

export const LocationFinder = styled.TouchableOpacity`

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
  font-weight: 500;
  margin-top: 25px;
`;

export const FormContainer = styled.View`
  width: 343px;
  height: 345px;
  background-color: #fff;
  border-radius: 35px;
  align-items: center;
  justify-content: center;
  margin-bottom: 220px ;
  elevation: 4 ;
`;

export const InputArea = styled.View`
  width: 100%;
  padding: 40px;
`;



export const Botao = styled.TouchableOpacity`
  height: 40px;
  margin-left: 55px;
  margin-right: 55px;
  background-color: #fd7e14;
  border-radius: 35px;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  elevation: 5;
`;
export const TextBottom = styled.Text`
  font-size: 18px;
  color: #000;
  font-weight: 900;
`;



/* 
InputArea,
Mensagem1,
Botao,
TextBottom, MensagemSemConta,
Mensagem2, Mensagem3
*/

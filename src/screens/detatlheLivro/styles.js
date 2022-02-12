import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
width: 100%;
height: 100%;
  background-color: #ffff;
  flex: 1;
  justify-content: center;
  position: relative;
`;

export const Scroller = styled.ScrollView`
  flex: 1;
  padding: 0px;
`;

export const HeaderArea = styled.View`
  width: 100%;
  height: 20%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  align-items: center;
  background-color: beige;
  bottom: 30px;
`;

export const LocationFinder = styled.TouchableOpacity`
  margin-top: 36px;
`;

// export const HeaderTitle = styled.Text`
//   font-size: 20px;
//   font-weight: bold;
//   align-items: center;
//   padding: 48px;
//   padding-bottom: 10px;
//   color: black;
//   margin-right: 212px;
// `;

export const Message = styled.Text`
  margin-top: 100px;
  font-size: 20px;
  justify-content: center;
  align-items: center;
  font-weight: 900;
  padding: 100px;
  margin-left: 30px;
`;
export const Text = styled.Text``;

export const LivroDetalhe= styled.View`
 align-items: center;
 justify-content: center;
 width: 380px;
 height: 390px;
 padding-bottom: 38%;
`;

export const Detalhe = styled.View`
/* width: 100px;
height: 100px;
  flex-direction: row;

  bottom: 5%; */
`;

export const Botao = styled.TouchableOpacity`
  height: 40px;
  width: 64px;
  /* justify-content: center; */
  align-items: center;
  /* margin-left: 55px;
  margin-right: 55px; */
  /* padding-bottom: 50px; */
  /* margin-top: 90px; */
  /* margin-bottom: 50px; */
  background-color: #ff4500;
  border-radius: 35px;
  elevation: 5;
  position: absolute;
  bottom: 5%;
`;

export const TextBottom = styled.Text`
  font-size: 18px;
  color: #000;
  /* margin-bottom: 10px; */
  font-weight: 900;
`;

export const Teste = styled.Text`

`;

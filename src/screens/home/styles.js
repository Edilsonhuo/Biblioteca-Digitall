import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.ScrollView`
    flex: 1;
`; 
export const Scroller = styled.ScrollView`
    flex: 1;
    padding: 20px;
`; 

export const HeaderArea = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`; 
export const HeaderTitle = styled.Text`
  font-size: 22px;
  font-weight: bold;
  justify-content: center;
  align-items: center;
  padding: 48px;
  margin-left: 35px;
`;
export const MenuBottom = styled.TouchableOpacity`
    width: 49px; 
    height: 49px;
    margin-right: 15px;
`;

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
export const HeaderSub = styled.View`
  justify-content: center;
  align-items: flex-start;
  /* align-items: center; */
  font-size: 28px;
  margin-left: 20px;
`; 

export const Text = styled.Text`
  font-size: 16px; 
`; 


export const LocationArea = styled.View`
  background-color: #fff;
  /* border: #000; */
  /* font-weight: bold; */
  height: 50px;
  border-radius: 30px;
  flex-direction: row;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
  margin-top: 30px;
  elevation: 4;
`;

export const Linha = styled.View`
//  display: block;
  margin-top: 20px;
 border: 1px solid black;
`;

export const Linha2 = styled.View`
  //  display: block;
  margin-top: 20px;
  border: 1px solid black;
`;

export const Linha3 = styled.View`
  //  display: block;
  margin-top: 20px;
  border: 1px  black;
`;

export const LocationInput = styled.TextInput`
    flex: 1;
    font-size: 15px;
    color: #000;
    
`;
export const LocationFinder = styled.TouchableOpacity`
  width: 24px;
  height: 24px;
`;

export const Historias = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const Historia1 = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  padding-left: 190px;
  /* padding-bottom: 70px; */
  margin-top: 30px;
`;

export const Texte = styled.Text`
  font-size: 17px;
  font-weight: bold;
  color: black;
  padding-left: 16px;
  /* padding-top: 30px; */
`;
 
//---------Tecnologia------

export const Tecnologia = styled.View`
  align-items: center;
`;

// export const Sos = styled.View`
//   align-items: center;
// `;

export const Texte1 = styled.Text`
  font-size: 17px;
  font-weight: bold;
  color: black;
`;

export const Livro = styled.View`
  flex-direction: row;
`;

export const Livro01 = styled.View`
  flex-direction: row;
`;

export const Mais = styled.TouchableOpacity``;
export const Text2 = styled.Text`
  margin-right: 180px;
  font-size: 17px;
  font-weight: bold;
  color: orange;
`;

//---------Tecnologia---------
export const Livro1 = styled.TouchableOpacity`
  align-items: center;
`;

export const Livro2 = styled.TouchableOpacity`
  align-items: center;
`;

export const Livro3 = styled.TouchableOpacity`
  align-items: center;
`;

//=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-==


//---------Ciencias--------------
export const Ciencias = styled.View`
  /* flex-direction: row; */
  align-items: center;
`;

export const Texte2 = styled.Text`
  font-size: 17px;
  font-weight: bold;
  color: black;
`;

export const Livro_C = styled.View`
  flex-direction: row;
`;

export const Livro_C1 = styled.View`
  flex-direction: row;
`;

export const Mais1 = styled.TouchableOpacity``;
export const Text1 = styled.Text`
  margin-right: 180px;
  font-size: 17px;
  font-weight: bold;
  color: orange;
`;

//---------Ciencias---------
export const Livro1C = styled.TouchableOpacity``;

export const Livro2C = styled.TouchableOpacity``;

export const Livro3C = styled.TouchableOpacity``;


//----------Teologia----------
export const Teologia = styled.View`
  /* flex-direction: row; */
  align-items: center;
`;

export const Texte3 = styled.Text`
  font-size: 17px;
  font-weight: bold;
  color: black;
`;

export const Livro_T = styled.View`
  flex-direction: row;
`;

export const Livro_T1 = styled.View`
  flex-direction: row;
`;

export const Mais2 = styled.TouchableOpacity``;
export const Text3 = styled.Text`
  margin-right: 180px;
  font-size: 17px;
  font-weight: bold;
  color: orange;
`;

//---------Ciencias---------
export const Livro1T = styled.TouchableOpacity``;

export const Livro2T = styled.TouchableOpacity``;

export const Livro3T = styled.TouchableOpacity``;


//----------------------------------------------

// export const LoadingIcon = styled.ActivityIndicator`
//   margin-top: 50px;
// `;
/*
  Scroller,
  HeaderArea,
  HeaderTitle,
  HeaderSub,
  LocationArea,
  LocationInput,
  LocationFinder,
  MyLocationIcon,
*/ 
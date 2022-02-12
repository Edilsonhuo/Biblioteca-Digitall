import React from "react";
import styled from "styled-components/native";
import {Text} from 'react-native';


import TomeIcon from '../assets/icons-home.svg';
import PerfilIcon from '../assets/icons-user.svg';
import OfflineIcon from '../assets/icons-offline.svg';


const TabArea = styled.View`
    height: 50px;
    background-color: #ffffff;
    flex-direction: row;
`;

const TabItem = styled.TouchableOpacity`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export default ({state, navigation}) => {
  const goTo = screenName => {
      navigation.navigate(screenName);
  };
  return (
    <TabArea>
      <TabItem onPress={() => goTo('home')}>
        <TomeIcon
          style={{opacity: state.index === 0 ? 1 : 0.5}}
          width="24"
          height="24"
          fill="#000"
        />
        <Text>Home</Text>
      </TabItem>

      <TabItem onPress={() => goTo('perfil')}>
        <PerfilIcon
          style={{opacity: state.index === 1 ? 1 : 0.5}}
          width="24"
          height="24"
          fill="#000"
        />
        <Text 
        style={{opacity: state.index === 1 ? 1 : 0.5}} 
        fill="#000">
          Perfil
        </Text>
      </TabItem>

      <TabItem onPress={() => goTo('offline')}>
        <OfflineIcon
          style={{opacity: state.index === 2 ? 1 : 0.5}}
          width="24"
          height="24"
          fill="#000"
        />
        <Text>Offline</Text>
      </TabItem>
    </TabArea>
  );
};
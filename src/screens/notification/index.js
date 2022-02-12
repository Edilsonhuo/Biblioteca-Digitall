import React from 'react';
import {useNavigation} from '@react-navigation/native';
// import {Text} from 'react-native';
// import { Scroller } from '../home/styles';
import {
  Container,
  Message,
  Scroller,
  HeaderArea,
  HeaderTitle,
  Text,
  LocationFinder,
} from './style';
import Back from '../../assets/icons-back.svg';

export default () => {

      const navigation = useNavigation();


  return (
    <Container>
      <Scroller>
        <HeaderArea>
          <LocationFinder onPress={() => navigation.navigate('perfil')}>
            <Back width="30" height="30" />
          </LocationFinder>
          <HeaderTitle>Notificações</HeaderTitle>
        </HeaderArea>
        <Message>
          <Text>Sem Notificações</Text>
        </Message>
      </Scroller>
    </Container>
  );
};

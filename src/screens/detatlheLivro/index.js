import React from 'react';
import {useNavigation} from '@react-navigation/native';
// import {Text} from 'react-native';
// import { Scroller } from '../home/styles';
import {
  Container,
  Message,
  Scroller,
  HeaderArea,
  Text,
  LocationFinder,
  LivroDetalhe,
  Detalhe,
  Botao,
  Teste,
  TextBottom,
} from './styles';

import Back from '../../assets/icons-back.svg';

import Livro from '../../assets/Tech book.svg';

export default () => {
  const navigation = useNavigation();

  const handleSignClick = () => {}

  return (
    <Container>
      <Scroller>
        <HeaderArea>
          <LocationFinder onPress={() => navigation.navigate('home')}>
            <Back width="30" height="30" />
          </LocationFinder>
        </HeaderArea>

        <LivroDetalhe>
          <Livro width="200" height="310" />
        </LivroDetalhe>
        <Detalhe>
          <Teste>Detalhes</Teste>
          <Botao onPress={handleSignClick}>
            <TextBottom>Ler</TextBottom>
          </Botao>
        </Detalhe>
      </Scroller>
    </Container>
  );
};

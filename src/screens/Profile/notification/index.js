import React from 'react';
// import {Text} from 'react-native';
// import { Scroller } from '../home/styles';
import {
  Container,
  Message,
  Scroller,
  HeaderArea,
  HeaderTitle,
  Text,
} from './styles';

export default () => {
  return (
    <Container>
      <Scroller>
        <HeaderArea>
          <HeaderTitle>Livros em Offline</HeaderTitle>
        </HeaderArea>
        <Message>
          <Text>Sem ficheiros</Text>
        </Message>
      </Scroller>
    </Container>
  );
};

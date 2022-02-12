import React from "react";
import {useNavigation} from '@react-navigation/native';
//import { Text } from 'react-native';
import {
  Container,
  // Message,
  Scroller,
  HeaderArea,
  MenuBottom,
  HeaderTitle,
  Perfil,
  Profi,
  Text,

  Opcao,
  Motifica,
  Matifica1,
  Texts,

  Historias,
  Historia1,
  Texte,
} from './styles';

import Profile from '../../assets/account-circle-fill.svg'
import Menu from '../../assets/icons-menu.svg';
import Matificacao from '../../assets/icon-notification.svg'
import Historico from '../../assets/icon-activity-history.svg'


export default () => {

   const navigation = useNavigation();

    return (
      <Container>
        <Scroller>
          <HeaderArea>
            <HeaderTitle>Meu Perfil</HeaderTitle>
            <MenuBottom>
              <Menu width="29" height="29" />
            </MenuBottom>
          </HeaderArea>

          <Perfil>
            <Profi>
              <Profile width="50px" height="50px" />
            </Profi>
            <Text>usuário</Text>
          </Perfil>

          <Opcao>
            <Motifica onPress={() => navigation.navigate('notification')}>
              <Matifica1>
                <Matificacao width="50px" height="50px" />
              </Matifica1>
              <Texts>Notificações</Texts>
            </Motifica>

            <Historias onPress={() => navigation.navigate('search')}>
              <Historia1>
                <Historico width="54px" height="54px" />
              </Historia1>
              <Texte>Histórico</Texte>
            </Historias>
          </Opcao>
        </Scroller>
      </Container>
    );
}
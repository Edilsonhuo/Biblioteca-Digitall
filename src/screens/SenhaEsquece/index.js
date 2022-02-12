import React, {useState} from 'react';
import {Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {
  Container,
  LocationArea,
  LocationFinder,
  InputArea,
  Botao,
  Text1,
  Circle,
  Texts,
  FormContainer,
  TextBottom,
} from './styles';

import Login from '../../components/Login';

import Back from '../../assets/icons-back.svg'

import {auth} from '../../database/firebaseConfig';
import {sendPasswordResetEmail} from 'firebase/auth';

export default () => {
  const navigation = useNavigation();

  const [nameField, setNameField] = useState('');
  const [email, setEmail] = useState('');

  const handleSignClick = () => {

    //redefinir Senha
      sendPasswordResetEmail(auth, email)
      .then(() => {
        alert('Verifique sua caixa de e-mail.');
        navigation.reset({
          routes: [{name: 'Login'}],
        });
      })
      .catch(error => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      });
    



    // if (email !== ''){
    //   console.log(email);
    //   auth()
    //   .sendPasswordResetEmail(email)
    //   .then((r) => {
    //     alert.alert(
    //       'Atencao',
    //       'Enviamos um email de recuperacao de senha para o seguinte endereco' +
    //         email,
    //       [{text: 'OK', onPress: () => navigation.goBack()}],
    //     );
       
    //   })
    //   .catch((e) =>{
    //     console.log('Recuperar senha: '+ e);
    //     switch (e.code) {
    //       case 'auth/user-not-found':
    //         alert.alert('Erro', 'Usuario nao Cadastrado');
    //         break;
    //       case 'auth/wrong-password':
    //         alert.alert('Erro', 'Erro na senha');
    //         break;
    //       case 'auth/invalid-email':
    //         alert.alert('Erro', 'email invalido');
    //         break;
    //       case 'auth/user-disabled':
    //         alert.alert('Erro', 'Usuario desabilitado');
    //         break;
    //     }
    //   })
      
    // }else{
    //   alert.alert('Erro', 'Por favor, digite email')
    // }
      // navigation.reset({
      //   routes: [{name: 'Login'}],
      // });
  }; 


  return (
    <Container>
      <Circle></Circle>
      <LocationArea>
        <LocationFinder onPress={() => navigation.navigate('Login')}>
          <Back width="30" height="30" />
        </LocationFinder>
        <Text font-size="20">Login</Text>
      </LocationArea>
      <Text1>
        <Text>Biblioteca Digital</Text>
      </Text1>
      <FormContainer>
        <Texts font-size="200">
          <Text>Recuperar Senha</Text>
        </Texts>

        <InputArea>
          <Login
            placeholder="Email"
            value={email}
            onChangeText={t => setEmail(t)}
          />

          <Botao onPress={handleSignClick}>
            <TextBottom>Enviar</TextBottom>
          </Botao>
        </InputArea>
      </FormContainer>
    </Container>
  );
};

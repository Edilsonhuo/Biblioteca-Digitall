import React, {useState, useEffect, useContext, useLayoutEffect}from 'react';
import {Alert, Text} from 'react-native';
import { useNavigation } from '@react-navigation/native';


import {
  Container,
  Text1,
  InputArea,
  Messages,
  FormContainer,
  Texts,
  Circle,
  Mensagem1,
  Botao,
  Text2,
  Texte,
  Textes,
  Icon,
  TextBottom,
  MensagemSemConta,
  RedeSocial,
  Face,
  Twi,
  Mensagem2,
  Mensagem3Bold,
} from './styles';


import Facebook from '../../assets/facebook-circle-fill.svg';
import Twitter from '../../assets/twitter-fill.svg';

import Login from '../../components/Login';

// import Api from '../../Api'

import {auth} from '../../database/firebaseConfig'
import {
  getAuth, getRedirectResult, signInWithEmailAndPassword,
} from 'firebase/auth';

export default () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorLogin, setErrorLogin] = useState('');

  // useEffect(() => {
  //   const unsubscribe = auth.onAuthStateChanged((authUser) => {
  //     console.log(authUser);
  //     if (authUser){
  //       navigation.reset({
  //     routes: [{name: 'MainTab'}],
  //   });
  //     } 
  //   });
  //   return unsubscribe;
  // }, []);

  const handleSignClick = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        // Signed in
        const user = userCredential.user;
        // console.log(user)
        // ...
      
        navigation.reset({
          routes: [{name: 'MainTab'}],
        });
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });

  };

  // import {
  //   getAuth,
  //   getRedirectResult,
  //   FacebookAuthProvider,
  // } from 'firebase/auth';

 

  const singFacebook = () =>{
    // let result = Api.googleLogar();

    // if(result){

    // }else{
    //   alert("Erro")
    //}

const auth = getAuth();
getRedirectResult(auth)
  .then(result => {
    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    const credential = FacebookAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;

    const user = result.user;
  })
  .catch(error => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // AuthCredential type that was used.
    const credential = FacebookAuthProvider.credentialFromError(error);
    // ...
  }); 
  }

  const handlerMessageButtonClick = () => {
    navigation.reset({
      routes: [{name: 'Cadastro'}],
    });
  };

  const handlerMessageButtonClick2 = () => {
    navigation.reset({
      routes: [{name: 'SenhaEsquece'}],
    });
  };

  return (
    <Container>
      <Circle></Circle>
      <Text1>
        <Text>Biblioteca Digital</Text>
      </Text1>

      <FormContainer>
        <Texts>
          <Text>Login</Text>
        </Texts>

        <InputArea>
          <Login
            placeholder="Email"
            value={email}
            onChangeText={t => setEmail(t)}
          />

          <Login
            placeholder="Senha"
            value={password}
            onChangeText={t => setPassword(t)}
            password={true}
          />

          {errorLogin === true
          ?
          <Text>Email ou password invalida!</Text>
          :
          <Text></Text>
          }

          <Messages onPress={handlerMessageButtonClick2}>
            <Mensagem1>Esqueceu Senha?</Mensagem1>
          </Messages>
          <Botao onPress={handleSignClick}>
            <TextBottom>Entrar</TextBottom>
          </Botao>

          <Text2>
            <Texte>or</Texte>
          </Text2>
          {/* <Text>Entrar usado outras redes</Text> */}
          <Textes>Entrar usado outras redes</Textes>

          <RedeSocial>
            <Face onPress={singFacebook}>
              <Facebook width="90%" height="90" />
            </Face>
            <Twi>
              <Twitter width="90%" height="90" />
            </Twi>
          </RedeSocial>
        </InputArea>
      </FormContainer>

      <MensagemSemConta onPress={handlerMessageButtonClick}>
        <Mensagem2>Nao tem conta?</Mensagem2>
        <Mensagem3Bold>Cadastre-se</Mensagem3Bold>
      </MensagemSemConta>
    </Container>
  );
};

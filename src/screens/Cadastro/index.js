import React, {useState, useContext} from 'react';
import {Text, Keyboard} from 'react-native';
import {useNavigation} from '@react-navigation/native';

//import AsyncStorage from '@react-native-async-storage/async-storage'

import {
  Container,
  InputArea,
  Botao,
  TextBottom,
  FormContainer,
  Text1,
  Circle,
  Texts,
  MensagemSemConta,
  Mensagem2,
  Mensagem3Bold,
} from './styles'; 

import Login from '../../components/Login';

// import {auth} from '../../database/firebaseConfig'
import {auth} from '../../database/firebaseConfig';
import {
  createUserWithEmailAndPassword,
} from 'firebase/auth';


export default () => {
  
  const navigation = useNavigation();

  
  const [nameField, setNameField] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  


  // useLayoutEffect(() => {
  //   return () => {
  //     headerBackTitle: 'asa'
  //   },
  //   [navigation ]
  // })

  const handleSignClick = () =>{
    createUserWithEmailAndPassword(auth, email, password)
      .then((authUser) => {
        // Signed in
        authUser.user.update({
          displayName: nameField,
        });

         navigation.reset({
           routes: [{name: 'Login'}],
         });  
        // const user = userCredential.user;
        // ...
      })   
      .catch(error => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  // async function handleSignClick() {
  //   await createUserWithEmailAndPassword(auth, email, password)
  //   .then((authUser) => {
  //         // Signed in
  //         authUser.user.update({
  //           displayName: nameField,
          
  //           // console.log("cadastrado com sucesso" + value.user.uid)
  //         })
  //         // const user = userCredential.user;
  //         // ...
  //       })
  //       .catch(error => {
  //         // const errorCode = error.code;
  //         const errorMessage = error.message;
  //         // ..
  //       });
  // }



  const handlerMessageButtonClick = () => {
    navigation.reset({ 
      routes: [{name: 'Login'}],
    });
  };
 
  return (
    <Container>
      <Circle></Circle>
      <Text1>
        <Text>Biblioteca Digital</Text>
      </Text1>
      <FormContainer>
        <Texts font-size="200">
          <Text>Criar conta</Text>
        </Texts>
        <InputArea>
          <Login
            placeholder="Nome"
            value={nameField}
            onChangeText={t => setNameField(t)}
          />

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

          <Botao onPress={handleSignClick}>
            <TextBottom>Cadastrar</TextBottom>
          </Botao>
        </InputArea>
      </FormContainer>

      <MensagemSemConta onPress={handlerMessageButtonClick}>
        <Mensagem2>Tem uma conta?</Mensagem2>
        <Mensagem3Bold>Faca Login</Mensagem3Bold>
      </MensagemSemConta>
    </Container>
  );
};

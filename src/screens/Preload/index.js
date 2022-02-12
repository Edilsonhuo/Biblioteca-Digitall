import React, {useEffect, useState, useContext} from "react";
import {Text} from 'react-native';
import {Container, Message, LoadingIcon} from './styles';

// import AsyncStorage from '@react-native-async-storage/async-storage';
// import Api from '../../Api'
//import {UserContext} from '../../contexts/UserContext';


import { useNavigation } from "@react-navigation/native";
import Tela_Splash from '../../assets/!MUM.svg'

export default () => {

  //const {dispatch: userDispatch} = useContext(UserContext);


  const navigation = useNavigation();

  //     const SplashScreen = ({ navigation }) => {
  // //State for ActivityIndicator animation
  // const [animating, setAnimating] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      try{
        navigation.reset({
           routes: [{name: 'Login'}],
         });
      }catch(error){
        console.log("Somenthing went wrong", error);
      }
    }, 3000);
  }, []);
  //useEffect(() => {
    // const checkToken = async () =>{
    //   const token = await AsyncStorage.getItem('token');
    //   if(token) {
    //     //Validar o token  
    //     let res = await Api.checkToken(token);
    //     if(res.token){
    //       await AsyncStorage.setItem('token', res.token);

    //       userDispatch({
    //         type: 'setAvatar',
    //         payload: {
    //           avatar: json.data.avatar,
    //         },
    //       });

    //       navigation.reset({
    //         routes: [{name: 'MainTab'}],
    //       });

    //     }else{
    //       navigation.navigate('Login');
    //     }
    //   }else{
    //     navigation.navigate('Login');
    //   }

    // }
    // checkToken();
 // }, []);
  return (

    <Container>
      <Tela_Splash width="100%" height="160" />
      <Message>
        <Text >Biblioteca Digital</Text>
      </Message>
      <LoadingIcon size="large" color="#ffffff" />
    </Container>
  );
};
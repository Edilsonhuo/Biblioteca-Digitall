import React from "react";
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    background-color: #FF4500;
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const Message = styled.Text`
  margin-top: 30px;
  font-size: 20px;

  font-weight: 900;
`;
export const Text = styled.Text``;

export const LoadingIcon = styled.ActivityIndicator`
  margin-top: 50px;

  
`;
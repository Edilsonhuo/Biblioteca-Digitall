import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  background-color: #c4c4c4;
  flex: 1;
  justify-content: center;
`;

export const Scroller = styled.ScrollView`
  flex: 1;
  padding: 0px;
`;

export const HeaderArea = styled.View`
  width: 100%;
  height: 23%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  align-items: center;
  background-color: beige;
  bottom: 30px;
`;

export const LocationFinder = styled.TouchableOpacity`
    margin-top: 25px;
`;

export const HeaderTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
  align-items: center;
  padding: 48px;
  padding-bottom: 10px;
  color: black;
  margin-right: 180px;
`;

export const Message = styled.Text`
  margin-top: 100px;
  font-size: 20px;
  justify-content: center;
  align-items: center;
  font-weight: 900;
  padding: 100px;
  margin-left: 26px;
`;
export const Text = styled.Text``;

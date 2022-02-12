import { placeholder } from "@babel/types";
import React from "react";
import styled from "styled-components/native";

const InputArea = styled.View`
    width: 100%;
    height: 60px;
    flex-direction: row;
    border-radius: 10px;
    padding-left: 15px;
    align-items: center;
    margin-bottom: 15px;
    background-color: #fff;

`;

const Input = styled.TextInput`
  flex: 1;
  font-size: 16px;
  background-color: #ffff;
  border-bottom-width: 2px;
`; 

export default ({placeholder, value, onChangeText, password}) => {
    return(
        <InputArea>
            <Input
                placeholder = {placeholder}
                value = {value}
                onChangeText = {onChangeText}
                secureTextEntry = {password}
            />

        </InputArea>

    );
}
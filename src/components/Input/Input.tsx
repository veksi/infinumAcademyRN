import React, { FunctionComponent, useState } from 'react';
import { KeyboardTypeOptions, View, TextInput, Animated, TouchableWithoutFeedback } from 'react-native';
import { useTheme } from 'emotion-theming';
import { Theme } from '../../styles/themes';
import { css } from '@emotion/native';
import { Text, TextType, TextSize } from '../Text/Text';
import { observer } from 'mobx-react';

import ShowPasswordIcon from '../../assets/images/ic-logo.svg';

export interface IInputProps {
  error: boolean;
  errorText?: string;
  placeholderText?: string;
  onChange?(val: string): void;
  inputType?: KeyboardTypeOptions;
  value: string;
}

const inputContainerStyle = css`
  width: 100%;
  border: none;
  height: 64px;
  position: relative;
  display: flex;
  justify-content: flex-end;
`;

const inputUnderlineStyle = (underlineColor: string) => css`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 1px;
  background-color: ${underlineColor};
`;

const labelStyle = css`
  position: absolute;
`;

const inputStyle = (color: string) => css`
  padding: 0;
  margin-bottom: 14px;
  color: ${color};
  font-weight: bold;
`;

const errorTextStyle = css`
  position: absolute;
`;

const showPasswordIconStyle = css`
  height: 24px;
  width: 24px;
  position: absolute;
  bottom: 12px;
  right: 16px;
`;

export const Input: FunctionComponent<IInputProps> = observer(({
  onChange,
  inputType,
  placeholderText = '',
  value,
  error = false,
  errorText,
}) => {

  const labelTextSizeAnimation = new Animated.Value(18);
  const labelTextPositionAnimation = new Animated.Value(14);

  const theme = useTheme<Theme>();

  const handleFocus = () => {
    if (!value) {
      Animated.parallel([
        Animated.timing(labelTextPositionAnimation,
          {
            toValue: 38,
            duration: 150,
          }
        ),
        Animated.timing(labelTextSizeAnimation,
          {
            toValue: 14,
            duration: 150,
          }
        ),
      ]).start();
    }
  }

  const handleBlur = () => {
    if (!value) {
      Animated.parallel([
        Animated.timing(labelTextPositionAnimation,
          {
            toValue: 14,
            duration: 150,
          }
        ),
        Animated.timing(labelTextSizeAnimation,
          {
            toValue: 18,
            duration: 150,
          }
        ),
      ]).start();
    }
  }

  return (
      <View style={inputContainerStyle}>
        <Text
          color={theme.colors.placeholderText}
          type={TextType.Animated}
          style={{
            ...labelStyle,
            fontSize: labelTextSizeAnimation,
            bottom: labelTextPositionAnimation,
          }}
        >
          {placeholderText}
        </Text>
        <TextInput
          style={inputStyle(theme.colors.defaultText)}
          value={value}
          onChangeText={onChange}
          keyboardType={inputType}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        {/* <ShowPasswordIcon style={showPasswordIconStyle} /> */}
        <View style={inputUnderlineStyle(theme.colors.underline)}/>
        <Text
          color={theme.colors.primary}
          type={TextType.Animated}
          style={errorTextStyle}
        >
          {errorText}
        </Text>
      </View>
  )
})

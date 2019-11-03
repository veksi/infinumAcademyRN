import React, { FunctionComponent } from 'react';
import { KeyboardTypeOptions, View, Animated, Inp, TextInput } from 'react-native';
import { useTheme } from 'emotion-theming';
import { Theme } from '../../styles/themes';
import { css } from '@emotion/native';

export enum InputElementType {
  Default = 'default',
  Password = 'password',
}

export interface IInputProps {
  placeholderText?: string;
  onChange?(val: string): void;
  elementType?: InputElementType,
  inputType?: KeyboardTypeOptions;
  value: string;
}

const inputContainerClass = css`
`

export const Input: FunctionComponent<IInputProps> = ({
  onChange,
  elementType = InputElementType.Default,
  inputType = 'default',
  placeholderText = '',
  value,
}) => {
  const theme = useTheme<Theme>();

  const handleFocus = () => {

  }

  const handleBlur = () => {

  }

  return (
    <View>
      <Animated.Text>
        {placeholderText}
      </Animated.Text>
      <TextInput
        placeholder={placeholderText}
        placeholderTextColor={theme.colors.placeholderText}

        keyboardType={inputType}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </View>
  )
}


import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { Text, TextType, TextSize, TextWeight } from './Text';

storiesOf('Text', module)
  .add('Default', () => (
      <Text
        type={TextType.Default}
        size={TextSize.md}
      >
        Default input
      </Text>
  ))
  .add('Default bold', () => (
      <Text
        type={TextType.Default}
        size={TextSize.md}
        weight={TextWeight.Bold}
      >
        Bold text
      </Text>
  ))
  .add('Animated', () => (
      <Text
        type={TextType.Animated}
        size={TextSize.md}
        weight={TextWeight.Normal}
      >
        Animated
      </Text>
  ));

import React, { FunctionComponent } from 'react';
import { Text as RNText, Animated } from 'react-native';
import { useTheme } from 'emotion-theming';
import { Theme } from '../../styles/themes';
import { css } from '@emotion/native';

export enum TextType {
  Default = 'default',
  Animated = 'animated',
}

export enum TextSize {
  xxs = '14px',
  xs = '16px',
  sm = '18px',
  md = '20px',
  lg = '28px',
}

export enum TextWeight {
  Bold = 'bold',
  Normal = 'normal'
}

export interface ITextProps {
  style?: any;
  color?: string;
  weight?: TextWeight;
  size?: TextSize;
  type?: TextType;
  lineHeight?: number;
  letterSpacing?: number;
}

const textStyle = (
  color: string,
  size: string,
  weight: string,
  fontFamily: string,
  lineHeight: number,
  letterSpacing: number,
) => css`
  color: ${color};
  font-family: ${fontFamily};
  font-size: ${size};
  font-weight: ${weight};
  line-height: ${lineHeight};
  letter-spacing: ${letterSpacing};
`;

export const Text: FunctionComponent<ITextProps> = ({
  color,
  children,
  weight = TextWeight.Normal,
  size = TextSize.sm,
  type = TextType.Default,
  lineHeight = 1,
  letterSpacing = 1,
  style,
}) => {
  const theme = useTheme<Theme>();

  const fontColor = color || theme.colors.defaultText;
  const fontFamiliy = theme.font.primary;
  const Element = type === TextType.Default ? RNText : Animated.Text;

  return (
    <Element
      style={[textStyle(fontColor, size, weight, fontFamiliy, lineHeight, letterSpacing), style]}
    >
      {children}
    </Element>
  )
}

import {
  normalizePaddingMargin,
  PaddingMarginType,
} from '@src/global/styles/normalizePaddingMargin';
import StyleUtils, { TextAlignType } from '@src/global/styles/utils';
import React from 'react';
import {
  ColorValue,
  StyleSheet,
  Text,
  TextProps,
  TextStyle,
} from 'react-native';

interface TypographyProps extends TextProps {
  fontFamily?: 'Roboto' | 'Roboto-Bold';
  color?: ColorValue | undefined;
  textAlign?: TextAlignType;
  circle?: number;
  pressable?: boolean;
  padding?: PaddingMarginType;
  margin?: PaddingMarginType;
  size?: number;
  style?: TextStyle;
}

const Typography: React.FC<TypographyProps> = props => {
  const {
    children,
    textAlign,
    color,
    margin,
    padding,
    size,
    style,
    fontFamily,
  } = props;

  const combinedStyle = StyleSheet.flatten([
    padding && StyleUtils.padding(normalizePaddingMargin(padding)),
    margin && StyleUtils.margin(normalizePaddingMargin(margin)),
    { color, size, fontFamily, textAlign },
    style,
  ]);

  return <Text style={[styles.default, combinedStyle, style]}>{children}</Text>;
};

export default Typography;

const styles = StyleSheet.create({
  default: {
    fontFamily: 'Roboto',
    fontSize: 12,
    lineHeight: 20,
  },
});

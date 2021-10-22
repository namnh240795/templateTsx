import React from 'react';
import StyleUtils, {
  FlexDirectionType,
  FlexJustifyType,
  FlexWrapType,
  WidthHeightType,
} from '@src/global/styles/utils';
import {
  ColorValue,
  FlexAlignType,
  StyleSheet,
  ViewProps,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  normalizePaddingMargin,
  PaddingMarginType,
} from '@src/global/styles/normalizePaddingMargin';

interface BoxProps extends ViewProps {
  background?: ColorValue | undefined;
  width?: WidthHeightType;
  height?: WidthHeightType;
  flex?: number;
  flexDirection?: FlexDirectionType;
  flexWrap?: FlexWrapType;
  justify?: FlexJustifyType;
  alignItems?: FlexAlignType | undefined;
  alignSelf?: FlexAlignType | undefined;
  circle?: number;
  pressable?: boolean;
  padding?: PaddingMarginType;
  margin?: PaddingMarginType;
}

const Box: React.FC<BoxProps> = props => {
  const {
    background,
    width,
    height,
    flex,
    flexDirection,
    alignItems,
    alignSelf,
    circle,
    padding,
    margin,
    pressable,
    children,
    style,
    ...rest
  } = props;

  const combinedStyle = StyleSheet.flatten([
    StyleUtils.background(background),
    StyleUtils.width(width),
    StyleUtils.height(height),
    StyleUtils.flex(flex),
    StyleUtils.flexDirection(flexDirection),
    StyleUtils.alignItems(alignItems),
    StyleUtils.alignSelf(alignSelf),
    StyleUtils.circle(circle),
    padding && StyleUtils.padding(normalizePaddingMargin(padding)),
    margin && StyleUtils.margin(normalizePaddingMargin(margin)),
  ]);

  if (pressable) {
    return (
      <TouchableOpacity
        style={StyleSheet.flatten([combinedStyle, style])}
        activeOpacity={0.7}
        {...rest}>
        {children}
      </TouchableOpacity>
    );
  }

  return (
    <View style={StyleSheet.flatten([combinedStyle, style])} {...rest}>
      {children}
    </View>
  );
};

export default Box;

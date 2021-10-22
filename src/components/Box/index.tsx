import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';

type BoxProps = {
  background: string;
  flexDirection: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  justify:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  align: 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline';
  alignSelf: 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline';
  flex: number;
  square: number;
  circle: number;
  shadowDepth: number;
  width: string | number;
  height: string | number;
  margin: number | [number, number] | [number, number, number, number];
  padding: number | [number, number] | [number, number, number, number];
  pressable: boolean;
  children: string;
};

export const Box = ({
  background,
  flexDirection,
  justify,
  align,
  alignSelf,
  flex,
  square,
  circle,
  shadowDepth,
  width,
  height,
  pressable,
  children,
  style,
  ...rest
}: BoxProps) => {
  const combinedStyle = [
    'flexDirection',
    'justify',
    'align',
    'alignSelf',
    'flex',
    'background',
    'square',
    'circle',
    'shadowDepth',
    'height',
    'width',
  ];
  if (pressable) {
    return (
      <TouchableOpacity
        style={[combinedStyle, style]}
        {...rest}
        activeOpacity={0.7}>
        {children}
      </TouchableOpacity>
    );
  }
  return (
    <View style={[combinedStyle, style]} {...rest}>
      {children}
    </View>
  );
};

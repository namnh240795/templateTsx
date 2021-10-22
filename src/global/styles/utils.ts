import { ColorValue, FlexAlignType } from 'react-native';

export type WidthHeightType = number | string | undefined;
export type FlexDirectionType =
  | 'row'
  | 'column'
  | 'row-reverse'
  | 'column-reverse'
  | undefined;
export type FlexWrapType = 'wrap' | 'nowrap' | 'wrap-reverse' | undefined;
export type FlexJustifyType =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | undefined;
export type TextAlignType = 'left' | 'center' | 'right' | undefined;

const background = (color: ColorValue | undefined) => ({
  backgroundColor: color,
});
const width = (value: WidthHeightType) => ({ width: value });
const height = (value: WidthHeightType) => ({ height: value });
const flex = (number: number | undefined) => ({ flex: number });
const flexDirection = (direction: FlexDirectionType) => ({
  flexDirection: direction,
});
const flexWrap = (value: FlexWrapType) => ({ flexWrap: value });
const justify = (justifyContent: FlexJustifyType) => ({
  justify: justifyContent,
});
const alignItems = (alignment: FlexAlignType | undefined) => ({
  alignItems: alignment,
});
const alignSelf = (alignment: FlexAlignType | undefined) => ({
  alignSelf: alignment,
});
const circle = (number: number | undefined) => ({
  width: number,
  height: number,
  borderRadius: number ? number / 2 : undefined,
});
const padding = ([top, right, bottom, left]: [
  number,
  number,
  number,
  number,
]) => ({
  paddingTop: top,
  padingBottom: bottom,
  paddingLeft: left,
  paddingRight: right,
});
const margin = ([top, right, bottom, left]: [
  number,
  number,
  number,
  number,
]) => ({
  marginTop: top,
  marginLeft: left,
  marginBottom: bottom,
  marginRight: right,
});

const StyleUtils = {
  background,
  width,
  height,
  flex,
  flexDirection,
  flexWrap,
  justify,
  alignItems,
  alignSelf,
  circle,
  padding,
  margin,
};

export default StyleUtils;

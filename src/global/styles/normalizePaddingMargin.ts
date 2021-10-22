type HorizontalAndVertical = [number, number];
type TopRightBottomLeft = [number, number, number, number];

export type PaddingMarginType =
  | undefined
  | [number]
  | HorizontalAndVertical
  | TopRightBottomLeft;

function normalizePaddingMargin(
  options: PaddingMarginType,
): TopRightBottomLeft {
  if (options.length === 1) {
    const value = options[0];
    return [value, value, value, value];
  }
  if (options.length === 2) {
    const value1 = options[0];
    const value2 = options[1];
    return [value1, value2, value1, value2];
  }
  return options;
}

export { normalizePaddingMargin };

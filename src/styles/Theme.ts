import { css } from 'styled-components';

import type { DefaultTheme } from 'styled-components';

type Font = {
  size: number;
  weight: 'L' | 'R' | 'SB' | 'B'; // 순서대로 ExtraLight, Regular, SemiBold, Bold 입니다
  family: 'MaruBuri-Regular';
};

const fontWeight = (weight: Font['weight']) => {
  switch (weight) {
    case 'L':
      return 300;
    case 'R':
      return 400;
    case 'SB':
      return 600;
    case 'B':
      return 700;
  }
};

const FONT = ({ size, weight, family }: Font) => css`
  font-size: ${size}px;
  font-weight: ${fontWeight(weight)};
  font-family: ${family};
`;

const colors = {
  NAVY: '#222832',
  WTHIE: '#FFFFFF',
  BLACK: '#000000',
  GRAY: '#1B1B1B',
  PURPLE: '#6462B9',
  PINK: '#E8AAAA',
  LIGHT_GRAY: '#8D8D8D',
};

const fonts = {
  // extraLight, Regular => BASIC
  L_BASIC_15: FONT({ size: 15, family: 'MaruBuri-Regular', weight: 'L' }),
  L_BASIC_30: FONT({ size: 30, family: 'MaruBuri-Regular', weight: 'L' }),

  R_BASIC_10: FONT({ size: 10, family: 'MaruBuri-Regular', weight: 'R' }),
  R_BASIC_16: FONT({ size: 16, family: 'MaruBuri-Regular', weight: 'R' }),
  R_BASIC_17: FONT({ size: 17, family: 'MaruBuri-Regular', weight: 'R' }),
  R_BASIC_20: FONT({ size: 20, family: 'MaruBuri-Regular', weight: 'R' }),
  R_BASIC_22: FONT({ size: 22, family: 'MaruBuri-Regular', weight: 'R' }),

  // SemiBold, Bold => POINT
  SB_POINT_10: FONT({ size: 10, family: 'MaruBuri-Regular', weight: 'SB' }),
  SB_POINT_14: FONT({ size: 14, family: 'MaruBuri-Regular', weight: 'SB' }),
  SB_POINT_16: FONT({ size: 16, family: 'MaruBuri-Regular', weight: 'SB' }),
  SB_POINT_18: FONT({ size: 18, family: 'MaruBuri-Regular', weight: 'SB' }),
  SB_POINT_20: FONT({ size: 20, family: 'MaruBuri-Regular', weight: 'SB' }),
  SB_POINT_30: FONT({ size: 30, family: 'MaruBuri-Regular', weight: 'SB' }),

  B_POINT_17: FONT({ size: 17, family: 'MaruBuri-Regular', weight: 'B' }),
  B_POINT_18: FONT({ size: 18, family: 'MaruBuri-Regular', weight: 'B' }),
  B_POINT_20: FONT({ size: 20, family: 'MaruBuri-Regular', weight: 'B' }),
  B_POINT_22: FONT({ size: 22, family: 'MaruBuri-Regular', weight: 'B' }),
};

export type ColorTypes = typeof colors;
export type FontTypes = typeof fonts;

const Theme: DefaultTheme = {
  colors,
  fonts,
};

export default Theme;

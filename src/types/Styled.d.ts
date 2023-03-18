import 'styled-components';

import type { ColorTypes, FontTypes } from '@/styles/Theme';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: ColorTypes;
    fonts: FontTypes;
  }
}

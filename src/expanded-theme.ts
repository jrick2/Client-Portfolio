// eslint-disable-next-line
import { Palette, PaletteColor } from "@mui/material/styles/createPalette";

declare module "@mui/material/styles/createPalette" {
  export interface PaletteColor {
    [key: number]: string;
  }

  export interface Palette {
    tertiary: PaletteColor;
  }
}

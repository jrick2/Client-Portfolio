// eslint-disable-next-line
import { Palette, PaletteColor } from "@mui/material/styles/createPalette.d";

declare module "@mui/material/styles/createPalette.d" {
  interface PaletteColor {
    [key: number]: string;
  }

  interface Palette {
    tertiary: PaletteColor;
  }
}

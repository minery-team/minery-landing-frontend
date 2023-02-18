import "styled-components";
import { ColorTypes, FontSizeTypes, FontWeightTypes } from "./theme";
declare module "styled-components" {
  export interface DefaultTheme {
    colors: ColorTypes;
    fontSize: FontSizeTypes;
    fontWeight: FontWeightTypes;
  }
}

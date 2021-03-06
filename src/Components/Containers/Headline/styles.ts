import calculateSize from './styleUtils';

import styled from '../../../Common/theming/themedComponents';

import { Props } from './types';
import { marginCss } from "../../Display/Paragraph/styles";
import { ThemeInterface } from "../../../Common/theming/types";

export const HeadlineStyled = styled.h1`
  text-align: center;
  font-size: ${(props: Props) => calculateSize(props.fontSize)};
  text-align: ${(props: Props) => props.textAlign};
  color: ${(props: Props) => props.color};
  font-weight: ${(props: Props) => props.fontWeight};
  ${(props: Props) => marginCss(props.margin)};
`;

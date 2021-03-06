import styled from '../../../Common/theming/themedComponents';
import { style } from './styles';
import { ThemeInterface } from "../../../Common/theming/types";

export type ParagraphSize = 'small' | 'medium' | 'large' | 'xlarge';
export type Margin = 'none' | 'small' | 'medium' | 'large';

export interface SizeMap {
  small: number;
  medium: number;
  large: number;
  xlarge: number;
}

export interface MarginSizeMap {
  none: number;
  small: number;
  medium: number;
  large: number;
}

export interface Props {
  color?: string;
  textAlign?: string;
  paragraphSize?: ParagraphSize;
  margin?: Margin;
}

const Paragraph = styled.p`
  ${style}
`;

export default Paragraph;

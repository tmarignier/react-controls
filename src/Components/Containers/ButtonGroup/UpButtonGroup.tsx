import * as React from 'react'
import { UpButtonGroupProps } from './'
import defaultTheme from '../../../Common/theming'
import  UpTooltip, {Tooltip} from '../../Display/Tooltip'
import { ButtonGroupStyled } from './styles'

export default class UpButtonGroup extends React.Component<UpButtonGroupProps, undefined> {

  constructor(props) {
    super(props) ;
  }

  public static defaultProps: UpButtonGroupProps = {
    gutter:10,
    align:'h',
    theme:defaultTheme
  };

  public render() {
    const {children, ...others} = this.props ;
    return (
        <ButtonGroupStyled {...others}>
            {children}
        </ButtonGroupStyled>
    ) ;
  }
}
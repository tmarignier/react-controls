import * as React from 'react';
import { InputStyled } from './styles';
import { InputBaseComponent } from "../_Common/BaseControl/BaseControl";

import { Props } from './';

export default class UpInput extends InputBaseComponent<Props, any> {
    public static defaultProps: Props = {
    };

    constructor(p, c) {
        super(p, c);
    }

    onChange(event: any) {
        return event.target.value;
    }

    renderControl() {
        return (
            <InputStyled
                type="text"
                onChange={this.handleChangeEvent}>
                {this.props.children}
            </InputStyled>
        );
    }
}

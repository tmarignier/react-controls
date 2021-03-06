import * as React from 'react'
import { UpDateStyledProps } from './'

import styled from '../../../Common/theming/themedComponents';

import { DateInput, IDatePickerLocaleUtils } from '@blueprintjs/datetime'
import { ThemeInterface } from "../../../Common/theming/types";

class UpLocaleUtils implements IDatePickerLocaleUtils {
    formatDay(day: Date, locale: string) {
        return "jour" ;
    }
    formatMonthTitle(month: Date, locale: string) {
        return "" ;
    }
    formatWeekdayShort(weekday: number, locale: string) {
        return "" ;
    }
    formatWeekdayLong(weekday: number, locale: string) {
        return "";
    }
    getFirstDayOfWeek(locale: string) {
        return 1;
    }
    getMonths() {
            return ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet",
                          "Août", "Septembre", "Octobre", "Novembre", "Décembre"] ;
    }
}

const locale = new UpLocaleUtils() ;

const BaseDate : React.StatelessComponent<UpDateStyledProps> = (props) => {
    
    const {value, className, format, onChange} = props ;
    const picker = (<span className="pt-icon pt-icon-calendar"></span>) ;

    return (<DateInput  className={className}
                        locale="fr" 
                        invalidDateMessage=""
                        localeUtils={locale}
                        rightElement={picker}
                        value={value}
                        onChange={onChange} format={format} />) ;
}

export const NormalDate = styled<UpDateStyledProps>(BaseDate)`
`; 

export default class UpDateStyle extends React.Component<UpDateStyledProps, {}> {
    public static defaultProps: UpDateStyledProps = {
        value:null,
    };
  public render() {
    const {value, format, onChange} = this.props ;
    return (
      <NormalDate value={value} format={format} onChange={onChange} />
    );
  }
}
﻿// Exports
import UpInteger from './UpInteger'
import { CommonProps } from '../Input/';

export interface UpIntegerProps extends CommonProps{
   max?: number;
   min?: number;
   stepSize?:number;
   isNullable?: boolean;
   value?:number;
}

export default UpInteger ;

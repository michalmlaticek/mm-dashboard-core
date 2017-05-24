import { EAggregation, ENest } from '../enums';
import { IColumn } from '../interfaces';
export declare class DataFormater {
    constructor();
    d3aggregateNumber(srcData: Array<any>, keyCols: Array<IColumn>, rollupCol: IColumn, rollupType: EAggregation, nestType: ENest): any;
}

import { Injectable } from '@angular/core';
import { EAggregation, ENest, EColType } from '../enums';
import { IColumn } from '../interfaces'
import * as D3Collection from 'd3-collection';
import * as D3Array from 'd3-array';

@Injectable()
export class DataFormater {

    constructor() { }

    d3aggregateNumber(srcData: Array<any>, keyCols: Array<IColumn>, rollupCol: IColumn, rollupType: EAggregation, nestType: ENest) {
        let nestGenerator = D3Collection.nest<any, number>();
        let aggregatedObject: any;

        keyCols.forEach(element => {
            nestGenerator = nestGenerator.key(d => d[element.name]);
        });

        switch (rollupType) {
            case EAggregation.sum:
                console.log("Aggregation type sum");
                nestGenerator = nestGenerator.rollup(d => D3Array.sum(d, g => g[rollupCol.name]));
                break;
            case EAggregation.mean:
                console.log("Aggregation type mean");
                nestGenerator = nestGenerator.rollup(d => D3Array.mean(d, g => g[rollupCol.name]));
                break;
            case EAggregation.max:
                console.log("Aggregation type max");
                nestGenerator = nestGenerator.rollup(d => D3Array.max(d, g => g[rollupCol.name]));
                break;
            case EAggregation.min:
                console.log("Aggregation type min");
                nestGenerator = nestGenerator.rollup(d => D3Array.min(d, g => g[rollupCol.name]));
                break;
            case EAggregation.median:
                console.log("Aggregation type median");
                nestGenerator = nestGenerator.rollup(d => D3Array.median(d, g => g[rollupCol.name]));
                break;
            case EAggregation.count:
            default:
                console.log("Aggregation type count");
                nestGenerator = nestGenerator.rollup(d => d.length);
                nestGenerator = nestGenerator.rollup(function (d) { return d.length });
                break;
        }

        switch (nestType) {
            case ENest.map:
                aggregatedObject = nestGenerator.map(srcData);
                break;
            case ENest.object:
                aggregatedObject = nestGenerator.object(srcData);
            case ENest.entries:
            default:
                aggregatedObject = nestGenerator.entries(srcData);
        }

        return aggregatedObject;
    }
}

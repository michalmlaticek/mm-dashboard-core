var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { EAggregation, ENest } from '../enums';
import * as D3Collection from 'd3-collection';
import * as D3Array from 'd3-array';
var DataFormater = (function () {
    function DataFormater() {
    }
    DataFormater.prototype.d3aggregateNumber = function (srcData, keyCols, rollupCol, rollupType, nestType) {
        var nestGenerator = D3Collection.nest();
        var aggregatedObject;
        keyCols.forEach(function (element) {
            nestGenerator = nestGenerator.key(function (d) { return d[element.name]; });
        });
        switch (rollupType) {
            case EAggregation.sum:
                console.log("Aggregation type sum");
                nestGenerator = nestGenerator.rollup(function (d) { return D3Array.sum(d, function (g) { return g[rollupCol.name]; }); });
                break;
            case EAggregation.mean:
                console.log("Aggregation type mean");
                nestGenerator = nestGenerator.rollup(function (d) { return D3Array.mean(d, function (g) { return g[rollupCol.name]; }); });
                break;
            case EAggregation.max:
                console.log("Aggregation type max");
                nestGenerator = nestGenerator.rollup(function (d) { return D3Array.max(d, function (g) { return g[rollupCol.name]; }); });
                break;
            case EAggregation.min:
                console.log("Aggregation type min");
                nestGenerator = nestGenerator.rollup(function (d) { return D3Array.min(d, function (g) { return g[rollupCol.name]; }); });
                break;
            case EAggregation.median:
                console.log("Aggregation type median");
                nestGenerator = nestGenerator.rollup(function (d) { return D3Array.median(d, function (g) { return g[rollupCol.name]; }); });
                break;
            case EAggregation.count:
            default:
                console.log("Aggregation type count");
                nestGenerator = nestGenerator.rollup(function (d) { return d.length; });
                nestGenerator = nestGenerator.rollup(function (d) { return d.length; });
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
    };
    return DataFormater;
}());
DataFormater = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [])
], DataFormater);
export { DataFormater };
//# sourceMappingURL=C:/_user/Code/dashboard/mm-dashboard-core/src/services/data-formater.js.map
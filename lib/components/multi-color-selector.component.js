var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, EventEmitter } from '@angular/core';
var MultiColorSelectorComponent = (function () {
    function MultiColorSelectorComponent() {
        this.colorsChange = new EventEmitter();
    }
    MultiColorSelectorComponent.prototype.onAddColor = function () {
        console.log("PieChartFromComponent -> onAddColor: activeColor = ", this.activeColor);
        this.colors.push(this.activeColor);
        console.log("PieChartFromComponent -> onAddColor: colors = ", this.colors);
        this.colorsChange.emit(this.colors);
    };
    MultiColorSelectorComponent.prototype.onRemoveColor = function (i) {
        this.colors.splice(i, 1);
        this.colorsChange.emit(this.colors);
    };
    return MultiColorSelectorComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", Array)
], MultiColorSelectorComponent.prototype, "colors", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], MultiColorSelectorComponent.prototype, "colorsChange", void 0);
MultiColorSelectorComponent = __decorate([
    Component({
        selector: 'mm-multi-color-selector',
        template: "\n        <div class=\"mm-multi-color-picker\">\n            <input [colorPicker]=\"activeColor\" (colorPickerChange)=\"activeColor=$event\" [style.background]=\"activeColor\" [value]=\"activeColor\"/>\n            <button class=\"mm-button\" (click)=\"onAddColor($event)\"><span>Add color</span></button>\n            <ul class=\"color-list\">\n                <li *ngFor=\"let c of colors; let i=index\" class=\"mm-color-square\" [style.background-color]=\"c\">\n                    <div class=\"square-remove\" (click)=\"onRemoveColor(i)\">x</div>\n                </li>\n            </ul>\n        </div>\n    ",
        styles: [
            "\n        .mm-color-square {\n            position: relative;\n            display: inline-block;\n            width: 15px;\n            height: 15px;\n        }\n\n        .square-remove {\n            position: absolute;\n            right: 0px;\n            top: 0px;\n            font-size: 5px;\n        }\n        "
        ]
    })
], MultiColorSelectorComponent);
export { MultiColorSelectorComponent };
//# sourceMappingURL=C:/_user/Code/dashboard/mm-dashboard-core/src/components/multi-color-selector.component.js.map
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
var SingleColorSelectorComponent = (function () {
    function SingleColorSelectorComponent() {
        this.colorChange = new EventEmitter();
    }
    SingleColorSelectorComponent.prototype.onColorPickerChange = function (color) {
        console.log("changing color: ", color);
        this.color = color;
        this.colorChange.emit(color);
    };
    return SingleColorSelectorComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", String)
], SingleColorSelectorComponent.prototype, "color", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], SingleColorSelectorComponent.prototype, "colorChange", void 0);
SingleColorSelectorComponent = __decorate([
    Component({
        selector: 'mm-single-color-selector',
        template: "\n    <div class=\"mm-single-color-picker\">\n        <input [colorPicker]=\"color\" (colorPickerChange)=\"onColorPickerChange($event)\" [style.background]=\"color\" [value]=\"color\"/>\n    </div>\n    ",
        styles: [
            "\n        \n        "
        ]
    }),
    __metadata("design:paramtypes", [])
], SingleColorSelectorComponent);
export { SingleColorSelectorComponent };
//# sourceMappingURL=C:/_user/Code/dashboard/mm-dashboard-core/src/components/single-color-selector.component.js.map
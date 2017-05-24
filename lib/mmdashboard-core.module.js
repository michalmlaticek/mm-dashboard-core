var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnumKeysPipe, TruncatePipe } from './pipes';
import { DataFormater, MmObjectFactory } from './services';
import { ColorPickerModule } from 'angular2-color-picker';
import { SingleColorSelectorComponent, MultiColorSelectorComponent } from './components';
var DashboardCoreModule = DashboardCoreModule_1 = (function () {
    function DashboardCoreModule() {
    }
    DashboardCoreModule.forRoot = function () {
        return {
            ngModule: DashboardCoreModule_1,
            providers: [DataFormater, MmObjectFactory]
        };
    };
    DashboardCoreModule.forChild = function () {
        return {
            ngModule: DashboardCoreModule_1,
            providers: [DataFormater, MmObjectFactory]
        };
    };
    return DashboardCoreModule;
}());
DashboardCoreModule = DashboardCoreModule_1 = __decorate([
    NgModule({
        imports: [
            CommonModule,
            ColorPickerModule
        ],
        declarations: [EnumKeysPipe, TruncatePipe, SingleColorSelectorComponent, MultiColorSelectorComponent],
        exports: [EnumKeysPipe, TruncatePipe, SingleColorSelectorComponent, MultiColorSelectorComponent]
    })
], DashboardCoreModule);
export { DashboardCoreModule };
var DashboardCoreModule_1;
//# sourceMappingURL=C:/_user/Code/dashboard/mm-dashboard-core/src/mmdashboard-core.module.js.map
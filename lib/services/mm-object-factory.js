var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@angular/core';
var MmObjectFactory = (function () {
    function MmObjectFactory() {
    }
    MmObjectFactory.prototype.init = function (defaultInstance, objectToInit) {
        if (objectToInit) {
            for (var prop in defaultInstance) {
                if (objectToInit[prop] === undefined || objectToInit[prop] === null) {
                    objectToInit[prop] = defaultInstance[prop];
                }
            }
            return objectToInit;
        }
        return defaultInstance;
    };
    return MmObjectFactory;
}());
MmObjectFactory = __decorate([
    Injectable()
], MmObjectFactory);
export { MmObjectFactory };
//# sourceMappingURL=C:/_user/Code/dashboard/mm-dashboard-core/src/services/mm-object-factory.js.map
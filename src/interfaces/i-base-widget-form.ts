import { Output, EventEmitter } from '@angular/core';

export interface IBaseWidgetForm {
    config: any;
    configChange: any; // EventEmitter<any>;
}

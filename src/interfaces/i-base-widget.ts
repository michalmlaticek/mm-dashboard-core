import { Output, EventEmitter } from '@angular/core';

export interface IBaseWidget {
    config: any;
    data: Array<any>;
    dataChange: any; // EventEmitter<any[]>;
}

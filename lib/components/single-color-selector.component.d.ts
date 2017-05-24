import { EventEmitter } from '@angular/core';
export declare class SingleColorSelectorComponent {
    color: string;
    colorChange: EventEmitter<string>;
    constructor();
    onColorPickerChange(color: string): void;
}

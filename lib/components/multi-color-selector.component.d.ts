import { EventEmitter } from '@angular/core';
export declare class MultiColorSelectorComponent {
    colors: Array<string>;
    colorsChange: EventEmitter<Array<string>>;
    activeColor: string;
    onAddColor(): void;
    onRemoveColor(i: number): void;
}

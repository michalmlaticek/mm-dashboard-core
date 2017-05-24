import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'mm-single-color-selector',
    template: `
    <div class="mm-single-color-picker">
        <input [colorPicker]="color" (colorPickerChange)="onColorPickerChange($event)" [style.background]="color" [value]="color"/>
    </div>
    `,
    styles: [
        `
        
        `
    ]
})
export class SingleColorSelectorComponent {
    @Input() color: string;
    @Output() colorChange: EventEmitter<string> = new EventEmitter<string>();

    constructor() { }

    onColorPickerChange(color: string) {
        console.log("changing color: ", color);
        this.color = color;
        this.colorChange.emit(color);
    }


}
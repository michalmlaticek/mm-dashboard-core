import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'mm-multi-color-selector',
    template: `
        <div class="mm-multi-color-picker">
            <input [colorPicker]="activeColor" (colorPickerChange)="activeColor=$event" [style.background]="activeColor" [value]="activeColor"/>
            <button class="mm-button" (click)="onAddColor($event)"><span>Add color</span></button>
            <ul class="color-list">
                <li *ngFor="let c of colors; let i=index" class="mm-color-square" [style.background-color]="c">
                    <div class="square-remove" (click)="onRemoveColor(i)">x</div>
                </li>
            </ul>
        </div>
    `,
    styles: [
        `
        .mm-color-square {
            position: relative;
            display: inline-block;
            width: 15px;
            height: 15px;
        }

        .square-remove {
            position: absolute;
            right: 0px;
            top: 0px;
            font-size: 5px;
        }
        `
    ]
})
export class MultiColorSelectorComponent {
    @Input() colors: Array<string>;
    @Output() colorsChange: EventEmitter<Array<string>> = new EventEmitter();

    activeColor: string;

    onAddColor() {
        console.log("PieChartFromComponent -> onAddColor: activeColor = ", this.activeColor);
        this.colors.push(this.activeColor);
        console.log("PieChartFromComponent -> onAddColor: colors = ", this.colors);
        this.colorsChange.emit(this.colors);
    }

    onRemoveColor(i: number) {
        this.colors.splice(i, 1);
        this.colorsChange.emit(this.colors);
    }
}
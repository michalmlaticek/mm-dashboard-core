import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { EnumKeysPipe, TruncatePipe } from './pipes';
import { DataFormater, MmObjectFactory } from './services';

import { ColorPickerModule } from 'angular2-color-picker';
import { SingleColorSelectorComponent, MultiColorSelectorComponent } from './components';

@NgModule({
    imports: [
        CommonModule,
        ColorPickerModule
    ],
    declarations: [EnumKeysPipe, TruncatePipe, SingleColorSelectorComponent, MultiColorSelectorComponent],
    exports: [EnumKeysPipe, TruncatePipe, SingleColorSelectorComponent, MultiColorSelectorComponent]
})
export class DashboardCoreModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: DashboardCoreModule,
            providers: [DataFormater, MmObjectFactory]
        };
    }

    static forChild(): ModuleWithProviders {
        return {
            ngModule: DashboardCoreModule,
            providers: [DataFormater, MmObjectFactory]
        };
    }
}


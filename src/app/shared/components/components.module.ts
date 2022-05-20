import { NgModule } from '@angular/core';
import { MaterialModule } from '../modules/material.module';
import { NoRecordsMessageComponent } from './no-records-message/no-records-message.component';

const exportable = [
  NoRecordsMessageComponent,
];

@NgModule({
  declarations: exportable,
  imports: [
    MaterialModule,
  ],
  exports: exportable,
})
export class ComponentsModule { }

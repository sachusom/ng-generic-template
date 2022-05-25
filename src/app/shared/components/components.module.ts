import { NgModule } from '@angular/core';
import { MaterialModule } from '../modules/material.module';
import { ConfirmModalComponent } from './confirm-modal/confirm-modal.component';
import { MessageModalComponent } from './message-modal/message-modal.component';
import { NoRecordsMessageComponent } from './no-records-message/no-records-message.component';

const exportable = [
  NoRecordsMessageComponent,
  MessageModalComponent,
  ConfirmModalComponent
];

@NgModule({
  declarations: exportable,
  imports: [
    MaterialModule,
  ],
  exports: exportable,
})
export class ComponentsModule { }

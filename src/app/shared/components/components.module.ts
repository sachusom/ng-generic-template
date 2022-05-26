import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { MaterialModule } from '../modules/material.module';
import { ConfirmModalComponent } from './confirm-modal/confirm-modal.component';
import { MessageModalComponent } from './message-modal/message-modal.component';
import { NoRecordsMessageComponent } from './no-records-message/no-records-message.component';
import { ValidationSheetComponent } from './validation-sheet/validation-sheet.component';

const exportable = [
  NoRecordsMessageComponent,
  MessageModalComponent,
  ConfirmModalComponent,
  ValidationSheetComponent
];

@NgModule({
  declarations: exportable,
  imports: [
    CommonModule,
    MaterialModule,
    PerfectScrollbarModule,
    ReactiveFormsModule,
    // AvatarModule,
  ],
  exports: exportable,
})
export class ComponentsModule { }

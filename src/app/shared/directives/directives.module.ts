import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AllowOnlyAlphabetsDirective } from './allow-only-alphabets.directive';
import { AllowOnlyNumbersDirective } from './allow-only-numbers.directive';
import { BackButtonDirective } from './back-button.directive';
import { DecimalNumberDirective } from './decimal-number.directive';
import { DisabledDirective } from './disabled.directive';
import { DisplayNoneDirective } from './display-none.directive';
import { FileDragDropDirective } from './file-drag-drop.directive';
import { MinMaxDirective } from './min-max.directive';

const exportable = [
  AllowOnlyNumbersDirective,
  AllowOnlyAlphabetsDirective,
  FileDragDropDirective,
  BackButtonDirective,
  DisabledDirective,
  DecimalNumberDirective,
  MinMaxDirective,
  DisplayNoneDirective
];

@NgModule({
  declarations: exportable,
  imports: [
    CommonModule
  ],
  exports: exportable
})
export class DirectivesModule { }

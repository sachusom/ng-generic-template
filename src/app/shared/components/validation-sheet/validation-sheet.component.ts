import { Component, Inject, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';

@Component({
  selector: 'nggt-validation-sheet',
  templateUrl: './validation-sheet.component.html',
  styleUrls: ['./validation-sheet.component.scss']
})
export class ValidationSheetComponent {

  form: FormGroup;
  messages: any;
  errors = [];

  constructor(
    private sheetRef: MatBottomSheetRef<ValidationSheetComponent>,
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: any) {
    this.form = data.formGroup;
    this.messages = data.validationMessages;
    this.composer();
  }

  /* Public Methods */
  close(): void {
    this.sheetRef.dismiss();
  }

  /* private Methods */
  private composer(): void {
    Object.keys(this.form.controls).forEach(field => {
      const control = this.form.controls[field] as FormControl | FormGroup | FormArray;
      if (control instanceof FormControl) {
        if (control.status === 'INVALID') {
          for (const key in control.errors) {
            if (control.errors.hasOwnProperty(key)) {
              // this.errors.push(this.messages[field][key]);
            }
          }
        }
      } else if (control instanceof FormGroup || control instanceof FormArray) {

      } else {

      }
    });
  }
}

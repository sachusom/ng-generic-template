import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { ConfirmModalComponent } from '../components/confirm-modal/confirm-modal.component';
import { MessageModalComponent } from '../components/message-modal/message-modal.component';
import { ValidationSheetComponent } from '../components/validation-sheet/validation-sheet.component';
import { ConfirmModalData } from '../models/confirm-modal-data.model';

@Injectable()
export class ModalService {

  constructor(
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    private bottomSheet: MatBottomSheet
  ) { }

  /* Public Methods */
  setDialogConfig(disableClose: boolean, autoFocus: boolean, width: string, data: any = null, panelClass: string = ''): MatDialogConfig {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = disableClose;
    dialogConfig.autoFocus = autoFocus;
    dialogConfig.width = width;
    dialogConfig.data = data;
    dialogConfig.panelClass = panelClass;
    return dialogConfig;
  }

  showSuccessMessage(message: string): Observable<boolean> {
    const dialogConfig = this.setDialogConfig(true, false, 'auto', message);
    dialogConfig.panelClass = 'success';
    return this.dialog.open(MessageModalComponent, dialogConfig).afterClosed();
  }

  showInfoMessage(message: string): Observable<boolean> {
    const dialogConfig = this.setDialogConfig(true, false, 'auto', message);
    dialogConfig.panelClass = 'info';
    return this.dialog.open(MessageModalComponent, dialogConfig).afterClosed();
  }

  showAlertMessage(message: string): Observable<boolean> {
    const dialogConfig = this.setDialogConfig(true, false, 'auto', message);
    dialogConfig.panelClass = 'alert';
    return this.dialog.open(MessageModalComponent, dialogConfig).afterClosed();
  }

  showErrorMessage(message: string): Observable<boolean> {
    const dialogConfig = this.setDialogConfig(true, false, 'auto', message);
    dialogConfig.panelClass = 'error';
    return this.dialog.open(MessageModalComponent, dialogConfig).afterClosed();
  }

  confirm(data: ConfirmModalData): Observable<boolean> {
    const dialogConfig = this.setDialogConfig(true, false, 'auto', data);
    dialogConfig.panelClass = 'confirm';
    return this.dialog.open(ConfirmModalComponent, dialogConfig).afterClosed();
  }

  /*
  * message: message to be displayed
  * action: label of button
  */
  showNotification(message: string, action: string = 'OK', duration: number = 4000): void {
    this.snackBar.open(message, action, {
      horizontalPosition: 'start',
      verticalPosition: 'bottom',
      duration,
    });
  }

  showValidationSheet(formGroup: FormGroup, validationMessages: any): MatBottomSheetRef {
    return this.bottomSheet.open(ValidationSheetComponent, {
      data: { formGroup, validationMessages },
    });
  }
}

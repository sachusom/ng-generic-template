import { Component } from '@angular/core';
import { ComponentBase } from '@shared/abstracts/component-base';
import { ModalService } from '@shared/services/modal.service';

@Component({
  selector: 'app-dev-guide-modals',
  templateUrl: './dev-guide-modals.component.html',
  styleUrls: ['./dev-guide-modals.component.scss']
})
export class DevGuideModalsComponent extends ComponentBase {

  constructor(
    private modalService: ModalService
  ) {
    super();
  }

  initVariables(): void { }

  subscribeEvents(): void { }

  load(): void { }

  unload(): void { }

  successMessage(): void {
    this.modalService.showSuccessMessage('Success');
  }

  showInfoMessage(): void {
    this.modalService.showInfoMessage('Information');
  }

  showAlertMessage(): void {
    this.modalService.showAlertMessage('Alert');
  }

  showErrorMessage(): void {
    this.modalService.showErrorMessage('Error');
  }

  confirm(): void {
    this.modalService.confirm({
      question: 'Are you sure?',
      confirmBtnText: 'Yes',
      cancelBtnText: 'No'
    })
      .subscribe((confirmed: boolean) => {

      });
  }

  showNotification(): void {
    this.modalService.showNotification('Notification');
  }

  showValidationSheet(): void {
    // this.modalService.showSuccessMessage('Success');
  }
}

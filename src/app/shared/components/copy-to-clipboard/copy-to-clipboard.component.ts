import { Clipboard } from '@angular/cdk/clipboard';
import { Component, Input, OnInit } from '@angular/core';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'nggt-copy-to-clipboard',
  templateUrl: './copy-to-clipboard.component.html',
  styleUrls: ['./copy-to-clipboard.component.scss']
})
export class CopyToClipboardComponent implements OnInit {

  /* I/O Properties */
  @Input() url: string = '';
  @Input() dataType = 'Link';

  constructor(
    private clipboard: Clipboard,
    private modalService: ModalService
  ) { }

  /* Life Cycle Hooks */
  ngOnInit(): void {
  }

  /* Public Methods */
  copyToClipBoard(): void {
    this.clipboard.copy(this.url);
    this.modalService.showNotification(this.dataType + ' Copied..!');
  }
}

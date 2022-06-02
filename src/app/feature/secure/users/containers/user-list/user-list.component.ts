import { Component } from '@angular/core';
import { ComponentBase } from '@shared/abstracts/component-base';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent extends ComponentBase {

  constructor() {
    super();
  }

  initVariables(): void { }

  subscribeEvents(): void { }

  load(): void { }

  unload(): void { }
}

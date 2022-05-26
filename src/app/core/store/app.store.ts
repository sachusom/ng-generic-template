import { Injectable } from '@angular/core';
import { DataStoreBase } from '../abstracts/data-store.base';

@Injectable({
  providedIn: 'root'
})
export class AppStore extends DataStoreBase {

  constructor() {
    super();
    this.initListeners();
  }

  initListeners(): void {
    this.todo.init();
  }

  /* Public Shared Values */
  todo = this.manageStoreValue('todo');
}
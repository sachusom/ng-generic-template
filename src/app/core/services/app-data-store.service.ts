import { Injectable } from '@angular/core';
import { DataStoreBase } from '../abstracts/data-store.base';

@Injectable({
  providedIn: 'root'
})
export class AppDataStoreService extends DataStoreBase {

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
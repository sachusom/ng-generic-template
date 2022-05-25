import { Component, OnInit } from '@angular/core';
import { ComponentBase } from '@shared/abstracts/component-base';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent extends ComponentBase implements OnInit {

  constructor() {
    super();
  }

  /* LifeCycle Hooks */
  ngOnInit(): void {
    console.log();
  }

  /* Public Methods */
  pageInitVariables(): void {
    throw new Error('Method not implemented.');
  }

  pageSubscribeEvents(): void {
    throw new Error('Method not implemented.');
  }
}

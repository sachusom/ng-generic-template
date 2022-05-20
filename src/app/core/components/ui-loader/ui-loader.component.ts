import { Component, OnInit } from '@angular/core';
import { UiLoaderService } from './ui-loader.service';

@Component({
  selector: 'nggt-ui-loader',
  templateUrl: './ui-loader.component.html',
  styleUrls: ['./ui-loader.component.scss']
})
export class UiLoaderComponent implements OnInit {

  /* Public Properties */
  showLoader = false;
  loaderText!: string | null;

  /* Constructor */
  constructor(
    private uiLoaderService: UiLoaderService
  ) { }

  /* Life Cycle Hooks */
  ngOnInit(): void {
    this.subscribeEvents();
  }

  /* Private Methods */
  private subscribeEvents(): void {
    this.uiLoaderService.loaderVisibility$
      .subscribe((visibility: boolean) => {
        debugger;
        this.loaderText = this.uiLoaderService.loaderText;
        this.showLoader = visibility;
      });
  }
}

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PageLayoutComponent } from './components/page-layout/page-layout.component';

@NgModule({
  declarations: [
    PageLayoutComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [PageLayoutComponent]
})
export class SecureSharedModule { }

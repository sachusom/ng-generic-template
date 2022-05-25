import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { SecureLayoutComponent } from './secure-layout.component';

@NgModule({
  declarations: [
    SecureLayoutComponent
  ],
  imports: [
    SharedModule,
    RouterModule
  ],
  exports: [SecureLayoutComponent]
})
export class SecureLayoutModule { }

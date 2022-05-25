import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { SecureLayoutModule } from './secure-layout/secure-layout.module';
import { SecureRoutingModule } from './secure-routing.module';
import { SecureComponent } from './secure.component';

@NgModule({
  declarations: [
    SecureComponent,
  ],
  imports: [
    SharedModule,
    SecureRoutingModule,
    SecureLayoutModule
  ]
})
export class SecureModule { }

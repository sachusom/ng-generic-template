import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { SecureRoutingModule } from './secure-routing.module';
import { SecureComponent } from './secure.component';

@NgModule({
  declarations: [
    SecureComponent,
  ],
  imports: [
    SharedModule,
    SecureRoutingModule
  ]
})
export class SecureModule { }

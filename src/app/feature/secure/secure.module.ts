import { LayoutModule } from '@angular/cdk/layout';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { SecureRoutingModule } from './secure-routing.module';
import { SecureComponent } from './secure.component';

@NgModule({
  declarations: [
    SecureComponent,
  ],
  imports: [
    SecureRoutingModule,
    SharedModule,
    LayoutModule,
  ]
})
export class SecureModule { }

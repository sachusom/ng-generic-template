import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { SecureSharedModule } from '../secure-shared/secure-shared.module';
import { DevGuideRoutingModule } from './dev-guide-routing.module';
import { DevGuideComponent } from './dev-guide.component';
import { DevGuideModalsComponent } from './components/dev-guide-modals/dev-guide-modals.component';

@NgModule({
  declarations: [
    DevGuideComponent,
    DevGuideModalsComponent
  ],
  imports: [
    SharedModule,
    DevGuideRoutingModule,
    SecureSharedModule
  ]
})
export class DevGuideModule { }

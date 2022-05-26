import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { SecureSharedModule } from '../secure-shared/secure-shared.module';
import { DevGuideRoutingModule } from './dev-guide-routing.module';
import { DevGuideComponent } from './dev-guide.component';
import { DevGuideModalsComponent } from './components/dev-guide-modals/dev-guide-modals.component';
import { DevGuideFormComponent } from './components/dev-guide-form/dev-guide-form.component';
import { DevGuideSkeletonsComponent } from './components/dev-guide-skeletons/dev-guide-skeletons.component';
import { DevGuideBreadcrumbComponent } from './components/dev-guide-breadcrumb/dev-guide-breadcrumb.component';

@NgModule({
  declarations: [
    DevGuideComponent,
    DevGuideModalsComponent,
    DevGuideFormComponent,
    DevGuideSkeletonsComponent,
    DevGuideBreadcrumbComponent
  ],
  imports: [
    SharedModule,
    DevGuideRoutingModule,
    SecureSharedModule
  ]
})
export class DevGuideModule { }

import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { SecureSharedModule } from '../secure-shared/secure-shared.module';
import { UserDetailsComponent } from './containers/user-details/user-details.component';
import { UserListComponent } from './containers/user-list/user-list.component';
import { UsersComponent } from './containers/users/users.component';
import { UsersRoutingModule } from './users-routing.module';
import { UserIdCardComponent } from './containers/user-id-card/user-id-card.component';
import { UserSocialComponent } from './containers/user-social/user-social.component';
import { UserSocialTwitterComponent } from './containers/user-social-twitter/user-social-twitter.component';
import { UserSocialLinkedinComponent } from './containers/user-social-linkedin/user-social-linkedin.component';

@NgModule({
  declarations: [
    UserListComponent,
    UserDetailsComponent,
    UsersComponent,
    UserIdCardComponent,
    UserSocialComponent,
    UserSocialTwitterComponent,
    UserSocialLinkedinComponent
  ],
  imports: [
    SharedModule,
    UsersRoutingModule,
    SecureSharedModule,
  ]
})
export class UsersModule { }

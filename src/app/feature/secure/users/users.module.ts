import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { SecureSharedModule } from '../secure-shared/secure-shared.module';
import { UserDetailsComponent } from './containers/user-details/user-details.component';
import { UserListComponent } from './containers/user-list/user-list.component';
import { UsersComponent } from './containers/users/users.component';
import { UsersRoutingModule } from './users-routing.module';
import { UserIdCardComponent } from './containers/user-id-card/user-id-card.component';

@NgModule({
  declarations: [
    UserListComponent,
    UserDetailsComponent,
    UsersComponent,
    UserIdCardComponent
  ],
  imports: [
    SharedModule,
    UsersRoutingModule,
    SecureSharedModule,
  ]
})
export class UsersModule { }

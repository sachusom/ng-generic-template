import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailsComponent } from './containers/user-details/user-details.component';
import { UserIdCardComponent } from './containers/user-id-card/user-id-card.component';
import { UserListComponent } from './containers/user-list/user-list.component';
import { UsersComponent } from './containers/users/users.component';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
    data: { breadcrumb: 'Users' },
    children: [
      {
        path: '',
        component: UserListComponent,
      },
      {
        path: 'id',
        component: UserDetailsComponent,
        data: { breadcrumb: 'Details' }
      },
      {
        path: 'id/card',
        pathMatch: 'full',
        component: UserIdCardComponent,
        data: { breadcrumb: 'ID Card' }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }

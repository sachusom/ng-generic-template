import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailsComponent } from './containers/user-details/user-details.component';
import { UserIdCardComponent } from './containers/user-id-card/user-id-card.component';
import { UserListComponent } from './containers/user-list/user-list.component';
import { UserSocialLinkedinComponent } from './containers/user-social-linkedin/user-social-linkedin.component';
import { UserSocialTwitterComponent } from './containers/user-social-twitter/user-social-twitter.component';
import { UserSocialComponent } from './containers/user-social/user-social.component';
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
        path: ':id',
        component: UserDetailsComponent,
        data: { breadcrumb: 'Details' },
        children: [
          {
            path: 'card',
            component: UserIdCardComponent,
            data: { breadcrumb: 'ID Card' },
          },
          {
            path: 'social',
            component: UserSocialComponent,
            data: { breadcrumb: 'Social' },
            children: [
              {
                path: 'twitter',
                component: UserSocialTwitterComponent,
                data: { breadcrumb: 'Twitter' },
              },
              {
                path: 'linkedin',
                component: UserSocialLinkedinComponent,
                data: { breadcrumb: 'Linkedin' },
              },
            ]
          },
        ]
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }

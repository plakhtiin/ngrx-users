import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

const routes: Routes = [
  {
    path: 'list',
    component: UserListComponent,
  },
  {
    path: 'detail',
    children: [
      {
        path: ':id',
        component: UserDetailComponent,
      }
    ]
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'list',
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class UserRoutingModule {
}

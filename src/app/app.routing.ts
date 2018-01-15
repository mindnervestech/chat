import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';

export const AppRoutes: Routes = [{
  path: '',
  component: AdminLayoutComponent,
  children: [ {
    path: '',
    loadChildren: './chat/chat.module#ChatModule'
  },{
    path: 'chat',
    loadChildren: './chat/chat.module#ChatModule'
  }]
}, {
  path: '',
  component: AuthLayoutComponent,
  children: []
 }, {
  path: '**',
  redirectTo: '/'
}];
